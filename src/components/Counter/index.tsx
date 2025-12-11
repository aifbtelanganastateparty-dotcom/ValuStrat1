import React from 'react';
import { useCounter } from '../../hooks/useSmoothAnimations';
import styles from './Counter.module.css';

interface CounterProps {
  end: number;
  duration?: number;
  start?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * Animated counter component that counts up from start to end
 */
const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  start = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const { count, ref } = useCounter(end, duration, start);

  return (
    <span ref={ref} className={`${styles.counter} ${className}`}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default Counter;

