"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.weddingInvitation}>
      <div className={`${styles.imageCtn} ${showVideo ? styles.slideUp : ""}`}>
        <img className={styles.image} src="image.png" alt="Groom and Bride" />
      </div>
      {showVideo && (
        <div className={styles.main}>
          <div className={styles.content}>
            <h2>Wedding Invitation</h2>
            <button
              className={styles.btn}
              onClick={() => {
                window.location.href =
                  "https://maps.app.goo.gl/yLS5yy8ndYzdT7R1A";
              }}
            >
              Tap here for location
            </button>
          </div>
          <video className={styles.video} controls>
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}
