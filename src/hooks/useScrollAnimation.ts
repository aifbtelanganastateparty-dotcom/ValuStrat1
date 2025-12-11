import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

/**
 * Custom hook for scroll-triggered animations similar to Webflow
 * Returns a ref to attach to the element and a boolean indicating visibility
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If already animated and triggerOnce is true, don't observe again
    if (hasAnimated && triggerOnce) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
                if (triggerOnce) {
                  setHasAnimated(true);
                }
              }, delay);
            } else {
              setIsVisible(true);
              if (triggerOnce) {
                setHasAnimated(true);
              }
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { ref: elementRef, isVisible };
};

/**
 * Hook for animating multiple elements with staggered delays
 */
export const useStaggeredScrollAnimation = (
  count: number,
  options: UseScrollAnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options;

  const containerRef = useRef<HTMLElement>(null);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (hasAnimated && triggerOnce) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newIndices = new Set<number>();
            
            // Animate each element with staggered delay
            for (let i = 0; i < count; i++) {
              setTimeout(() => {
                newIndices.add(i);
                setVisibleIndices(new Set(newIndices));
              }, i * 100); // 100ms delay between each element
            }

            if (triggerOnce) {
              setHasAnimated(true);
            }
          } else if (!triggerOnce) {
            setVisibleIndices(new Set());
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [count, threshold, rootMargin, triggerOnce, hasAnimated]);

  const isVisible = (index: number) => visibleIndices.has(index);

  return { ref: containerRef, isVisible };
};

