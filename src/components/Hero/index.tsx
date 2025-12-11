import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp } from '../../hooks/useGSAPScrollAnimation';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Animate title - fade in from bottom
  const titleRef = useFadeInUp(0);
  
  // Animate subtitle with delay
  const subtitleRef = useFadeInUp(200);
  
  // Animate CTA buttons - slide in from left and right
  const ctaContainerRef = useFadeInUp(400);
  
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const playVideo = async () => {
      try {
        await videoElement.play();
        setIsVideoReady(true);
      } catch {
        videoElement.muted = true;
        try {
          await videoElement.play();
          setIsVideoReady(true);
        } catch {
          setIsVideoReady(false);
        }
      }
    };

    if (videoElement.readyState >= 2) {
      setIsVideoReady(true);
    } else {
      playVideo();
    }
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoReady(true);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.videoBackground} aria-hidden="true">
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoaded}
        >
          <source src="/videos/wave.mp4" type="video/mp4" />
        </video>
        <div className={`${styles.videoOverlay} ${isVideoReady ? styles.videoVisible : ''}`} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 ref={titleRef.ref} className={styles.title}>
            Transforming Businesses with
            <span className={styles.highlight}> Innovative Technology Solutions</span>
          </h1>
          <p ref={subtitleRef.ref} className={styles.subtitle}>
            We help businesses leverage cutting-edge technology to drive growth, 
            improve efficiency, and stay ahead of the competition.
          </p>
          <div ref={ctaContainerRef.ref} className={styles.ctaContainer}>
            <Link to="/contact" className={styles.primaryButton}>
              Get Started
            </Link>
            <Link to="/services" className={styles.secondaryButton}>
              Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        Scroll Down
        <div className={styles.arrowDown}></div>
      </div>
    </section>
  );
};

export default Hero;
