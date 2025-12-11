import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GSAP animation utilities for smooth, performant animations
 * Similar to Webflow's animation system but more powerful
 */

export interface GSAPAnimationConfig {
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
  rotation?: number;
  duration?: number;
  ease?: string;
  delay?: number;
}

/**
 * Create a fade-in-up animation on scroll
 */
export const fadeInUp = (
  element: Element | string,
  options: GSAPAnimationConfig = {}
) => {
  const {
    opacity = 1,
    y = 0,
    duration = 0.8,
    ease = 'power2.out',
    delay = 0,
  } = options;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity,
      y,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    }
  );
};

/**
 * Create a slide-in animation
 */
export const slideIn = (
  element: Element | string,
  direction: 'left' | 'right' | 'up' | 'down' = 'left',
  options: GSAPAnimationConfig = {}
) => {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  };

  const initial = directions[direction];
  const {
    opacity = 1,
    duration = 0.8,
    ease = 'power2.out',
    delay = 0,
  } = options;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      ...initial,
    },
    {
      opacity,
      x: 0,
      y: 0,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    }
  );
};

/**
 * Create a scale-in animation
 */
export const scaleIn = (
  element: Element | string,
  options: GSAPAnimationConfig = {}
) => {
  const {
    opacity = 1,
    scale = 1,
    duration = 0.8,
    ease = 'back.out(1.7)',
    delay = 0,
  } = options;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity,
      scale,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    }
  );
};

/**
 * Create staggered animations for multiple elements
 */
export const staggerAnimation = (
  elements: Element[] | string,
  animationConfig: GSAPAnimationConfig = {},
  staggerDelay: number = 0.1
) => {
  const {
    opacity = 1,
    y = 0,
    duration = 0.8,
    ease = 'power2.out',
    delay = 0,
  } = animationConfig;

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity,
      y,
      duration,
      ease,
      delay,
      stagger: staggerDelay,
      scrollTrigger: {
        trigger: elements,
        start: 'top 80%',
        once: true,
      },
    }
  );
};

/**
 * Create a parallax scroll effect
 */
export const parallaxScroll = (
  element: Element | string,
  speed: number = 0.5
) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

/**
 * Create a pin animation (element stays fixed while scrolling)
 */
export const pinElement = (
  element: Element | string,
  pinDuration: string = '100%'
) => {
  ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: pinDuration,
    pin: true,
    pinSpacing: true,
  });
};

/**
 * Cleanup all ScrollTrigger instances
 */
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

