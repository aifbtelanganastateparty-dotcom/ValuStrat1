import React from 'react';
import { useScrollProgress } from '../../hooks/useSmoothAnimations';
import styles from './ScrollProgress.module.css';

/**
 * Scroll progress indicator component
 * Shows a progress bar at the top of the page indicating scroll position
 */
const ScrollProgress: React.FC = () => {
  const { ref } = useScrollProgress();

  return (
    <div className={styles.scrollProgress}>
      <div ref={ref} className={styles.progressBar} />
    </div>
  );
};

export default ScrollProgress;

