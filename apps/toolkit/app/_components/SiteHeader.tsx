"use client";

import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const isPixelRemover = pathname?.startsWith("/pixel-remover") ?? false;
  const isPixelMouse = pathname?.startsWith("/pixel-mouse") ?? false;

  return (
    <nav className={styles.siteNav}>
      <div className={styles.navInner}>
        <a
          href="https://pebblylabs.com"
          className={styles.navLogo}
          aria-label="Pebbly Labs home"
        >
          <svg viewBox="-1 -1 15 16">
            <rect x="2" y="0" width="9" height="1" fill="#00ff00" />
            <rect x="1" y="1" width="11" height="5" fill="#00ff00" />
            <rect x="0" y="6" width="13" height="1" fill="#00ff00" />
            <rect x="0" y="7" width="1" height="4" fill="#00ff00" />
            <rect x="2" y="7" width="9" height="4" fill="#00ff00" />
            <rect x="12" y="7" width="1" height="4" fill="#00ff00" />
            <rect x="0" y="11" width="13" height="1" fill="#00ff00" />
            <rect x="2" y="12" width="2" height="2" fill="#00ff00" />
            <rect x="9" y="12" width="2" height="2" fill="#00ff00" />
            <rect x="3" y="2" width="2" height="2" fill="#ffffff" />
            <rect x="3" y="3" width="2" height="1" fill="#00aaff" />
            <rect x="8" y="2" width="2" height="2" fill="#ffffff" />
            <rect x="8" y="3" width="2" height="1" fill="#00aaff" />
            <rect x="4" y="5" width="5" height="1" fill="#007700" />
          </svg>
          <span>PEBBLY LABS</span>
        </a>
        <div className={styles.navLinks}>
          <a
            href="https://toolkit.pebblylabs.com/pixel-remover"
            className={isPixelRemover ? styles.activeLink : ""}
            aria-current={isPixelRemover ? "page" : undefined}
          >
            PIXEL_REMOVER
          </a>
          <a
            href="https://toolkit.pebblylabs.com/pixel-mouse"
            className={isPixelMouse ? styles.activeLink : ""}
            aria-current={isPixelMouse ? "page" : undefined}
          >
            PIXEL_MOUSE
          </a>
        </div>
      </div>
    </nav>
  );
}
