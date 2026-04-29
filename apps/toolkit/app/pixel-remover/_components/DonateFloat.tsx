"use client";

import styles from "./DonateFloat.module.css";

export default function DonateFloat() {
  return (
    <a
      href="https://paypal.me/pebblylabs"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.donateFloat}
      aria-label="Support Pebbly Labs"
    >
      <div className={styles.donateFloatBot}>
        <svg viewBox="-1 -1 15 16">
          <rect x="2" y="0" width="9" height="1" fill="#00ff00" />
          <rect x="1" y="1" width="11" height="5" fill="#00ff00" />
          <rect x="0" y="6" width="13" height="1" fill="#00ff00" />
          <rect x="0" y="7" width="1" height="4" fill="#00ff00" />
          <rect x="2" y="7" width="9" height="4" fill="#00ff00" />
          <rect x="12" y="7" width="1" height="4" fill="#00ff00" />
          <rect x="0" y="11" width="13" height="1" fill="#00ff00" />
          <rect x="3" y="12" width="2" height="2" fill="#00ff00" />
          <rect x="8" y="12" width="2" height="2" fill="#00ff00" />
          <rect x="3" y="2" width="2" height="2" fill="#ffffff" />
          <rect x="3" y="3" width="2" height="1" fill="#00aaff" />
          <rect x="8" y="2" width="2" height="2" fill="#ffffff" />
          <rect x="8" y="3" width="2" height="1" fill="#00aaff" />
          <rect x="4" y="5" width="5" height="1" fill="#007700" />
        </svg>
      </div>
      <span className={styles.donateFloatText}>SUPPORT BOT</span>
    </a>
  );
}
