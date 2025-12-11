/**
 * Utility functions for scroll-triggered animations
 * Similar to Webflow's animation system
 */

export interface AnimationConfig {
  transform?: string;
  opacity?: number;
  scale?: number;
  translateX?: number;
  translateY?: number;
  rotate?: number;
  blur?: number;
}

/**
 * Apply animation styles to an element
 */
export const applyAnimation = (
  element: HTMLElement,
  config: AnimationConfig,
  duration: number = 0.8,
  easing: string = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
) => {
  const transforms: string[] = [];

  if (config.translateX !== undefined) {
    transforms.push(`translate3d(${config.translateX}px, 0, 0)`);
  }
  if (config.translateY !== undefined) {
    transforms.push(`translate3d(0, ${config.translateY}px, 0)`);
  }
  if (config.scale !== undefined) {
    transforms.push(`scale3d(${config.scale}, ${config.scale}, 1)`);
  }
  if (config.rotate !== undefined) {
    transforms.push(`rotate(${config.rotate}deg)`);
  }
  if (config.transform) {
    transforms.push(config.transform);
  }

  const transformValue = transforms.length > 0 ? transforms.join(' ') : 'none';

  element.style.transform = transformValue;
  element.style.transformStyle = 'preserve-3d';
  
  if (config.opacity !== undefined) {
    element.style.opacity = config.opacity.toString();
  }
  
  if (config.blur !== undefined) {
    element.style.filter = `blur(${config.blur}px)`;
  }

  element.style.transition = `transform ${duration}s ${easing}, opacity ${duration}s ${easing}, filter ${duration}s ${easing}`;
};

/**
 * Animate element to final state
 */
export const animateTo = (
  element: HTMLElement,
  config: AnimationConfig,
  duration: number = 0.8
) => {
  applyAnimation(element, config, duration);
  
  // Force reflow
  void element.offsetHeight;
  
  // Reset to final state
  setTimeout(() => {
    applyAnimation(element, {
      translateX: 0,
      translateY: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      blur: 0,
      ...config,
    }, duration);
  }, 10);
};

/**
 * Create a scroll-triggered animation observer
 */
export const createScrollAnimation = (
  element: HTMLElement,
  initialConfig: AnimationConfig,
  finalConfig: AnimationConfig = {
    translateX: 0,
    translateY: 0,
    opacity: 1,
    scale: 1,
  },
  options: {
    threshold?: number;
    rootMargin?: string;
    duration?: number;
    delay?: number;
  } = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    duration = 0.8,
    delay = 0,
  } = options;

  // Set initial state
  applyAnimation(element, initialConfig, duration);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            applyAnimation(element, finalConfig, duration);
          }, delay);
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
};

