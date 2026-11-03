// 서비스 워커: 홈 화면에 '앱'으로 설치되게(없으면 안드로이드가 바로가기로만 만들어 시작 화면이 흰 바탕이 됨) + 인터넷이 끊겨도 첫 화면이 뜨게
// - 같은 사이트 파일: 인터넷 먼저(새 배포를 바로 받게), 안 되면 저장본. 다른 주소로 넘기는 /01·/03은 그대로 넘김(저장 안 함)
// - 글꼴(Google Fonts): 저장본 먼저, 없으면 받아서 저장
const CACHE = 'labs-v1';   // 저장할 파일 목록이 바뀌면 올림
const SHELL = ['/', '/00', '/pebbly-intro.js', '/manifest.webmanifest', '/favicon.svg', '/favicon.ico', '/apple-touch-icon.png', '/icon-192.png', '/icon-512.png', '/icon-maskable.png'];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(SHELL.map(u => fetch(u, { cache: 'no-cache' }).then(res => res.ok && c.put(u, res)).catch(() => {}))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  if (url.origin === location.origin) e.respondWith(fresh(req, url));
  else if (FONT_HOSTS.includes(url.hostname)) e.respondWith(stored(req));
});

// 같은 사이트: 주소 뒤 ?v= 같은 건 빼고 경로로 저장 (/00 과 /00.html 은 같은 화면)
async function fresh(req, url) {
  const cache = await caches.open(CACHE), key = url.pathname.replace(/\.html$/, '').replace(/^\/index$/, '/');
  try {
    const res = await fetch(req.mode === 'navigate' ? req : new Request(req, { cache: 'no-cache' }));
    if (res.ok && res.type === 'basic') cache.put(key, res.clone());
    return res;
  } catch (err) {
    return (await cache.match(key)) || (req.mode === 'navigate' && await cache.match('/')) || Response.error();
  }
}
async function stored(req) {
  const cache = await caches.open(CACHE), hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
  return res;
}
