import React from 'react';
import {
  useFadeInUp,
  useSlideIn,
  useStaggeredGSAP,
  useParallax,
  useScaleOnScroll,
  useTextReveal,
} from '../../hooks/useGSAPScrollAnimation';
import styles from './AnimationExamples.module.css';

/**
 * Example component demonstrating all available animation hooks
 * Use this as a reference for implementing animations in your components
 */
const AnimationExamples: React.FC = () => {
  // Fade in up animations with different delays
  const titleRef = useFadeInUp(0);
  const subtitleRef = useFadeInUp(200);

  // Slide in from different directions
  const leftRef = useSlideIn('left', 0);
  const rightRef = useSlideIn('right', 200);
  const upRef = useSlideIn('up', 400);
  const downRef = useSlideIn('down', 600);

  // Staggered grid animation
  const gridRef = useStaggeredGSAP({}, 0.1);

  // Parallax effect
  const parallaxRef = useParallax(0.5, 'up');

  // Scale animation
  const scaleRef = useScaleOnScroll(1.2, 1, 'top bottom', 'top center');

  // Text reveal
  const textRevealRef = useTextReveal(0.05);

  return (
    <section className={styles.examples}>
      <div className={styles.container}>
        {/* Fade In Up Examples */}
        <div className={styles.section}>
          <h2 ref={titleRef.ref} className={styles.sectionTitle}>
            Fade In Up Animation
          </h2>
          <p ref={subtitleRef.ref} className={styles.sectionSubtitle}>
            Elements fade in and slide up when scrolled into view
          </p>
        </div>

        {/* Slide In Examples */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Slide In Animations</h2>
          <div className={styles.slideContainer}>
            <div ref={leftRef.ref} className={styles.slideBox}>
              <h3>Left</h3>
              <p>Slides in from left</p>
            </div>
            <div ref={rightRef.ref} className={styles.slideBox}>
              <h3>Right</h3>
              <p>Slides in from right</p>
            </div>
            <div ref={upRef.ref} className={styles.slideBox}>
              <h3>Up</h3>
              <p>Slides in from bottom</p>
            </div>
            <div ref={downRef.ref} className={styles.slideBox}>
              <h3>Down</h3>
              <p>Slides in from top</p>
            </div>
          </div>
        </div>

        {/* Staggered Grid */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Staggered Grid Animation</h2>
          <div ref={gridRef.ref} className={styles.staggeredGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.gridItem}>
                <div className={styles.gridItemNumber}>{item}</div>
                <p>Grid Item {item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Parallax Effect */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Parallax Effect</h2>
          <div className={styles.parallaxContainer}>
            <div ref={parallaxRef.ref} className={styles.parallaxShape}>
              <p>This shape moves at a different speed on scroll</p>
            </div>
            <div className={styles.parallaxContent}>
              <h3>Parallax Background</h3>
              <p>
                The background element moves slower than the content, creating
                a depth effect
              </p>
            </div>
          </div>
        </div>

        {/* Scale Animation */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Scale Animation</h2>
          <div className={styles.scaleContainer}>
            <div ref={scaleRef.ref} className={styles.scaleBox}>
              <h3>Scale on Scroll</h3>
              <p>This element scales from 1.2x to 1x as you scroll</p>
            </div>
          </div>
        </div>

        {/* Text Reveal */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Text Reveal Animation</h2>
          <div ref={textRevealRef.ref} className={styles.textReveal}>
            This text reveals word by word when scrolled into view
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationExamples;

