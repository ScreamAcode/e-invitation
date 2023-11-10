"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [hideVideo, setHideVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showVideo) {
      const timer = setTimeout(() => {
        setHideVideo(true);
      }, 11000);

      return () => clearTimeout(timer);
    }
  }, [showVideo]);

  return (
    <div className={styles.weddingInvitation}>
      {!hideVideo && (
        <div
          className={`${styles.imageCtn} ${showVideo ? styles.slideUp : ""}`}
        >
          <img className={styles.image} src="image.png" alt="Groom and Bride" />
        </div>
      )}
      {showVideo && (
        <div
          className={`${styles.videoCtn} ${hideVideo ? styles.slideUp : ""}`}
        >
          <video className={styles.video} playsInline autoPlay muted>
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      <div className={`${styles.btnCtn} ${hideVideo ? styles.showBtn : ""}`}>
        <button
          className={styles.locationButton}
          onClick={() => {
            window.location.href = "https://maps.app.goo.gl/yLS5yy8ndYzdT7R1A";
          }}
        >
          Get Location
        </button>
      </div>
    </div>
  );
}
