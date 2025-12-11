import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPScrollAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean | string;
  markers?: boolean;
  once?: boolean;
  delay?: number;
}

/**
 * Custom hook for GSAP scroll-triggered animations
 * Provides smooth, performant animations similar to Webflow
 */
export const useGSAPScrollAnimation = (
  animationConfig: gsap.TweenVars,
  options: GSAPScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      trigger,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      pin = false,
      markers = false,
      once = true,
      delay = 0,
    } = options;

    // Set initial state if not already set
    if (!scrub) {
      gsap.set(element, {
        opacity: animationConfig.opacity === undefined ? 0 : undefined,
        y: animationConfig.y === undefined ? 50 : undefined,
      });
    }

    // Create animation
    const animation = gsap.to(element, {
      ...animationConfig,
      scrollTrigger: {
        trigger: trigger || element,
        start,
        end,
        scrub,
        pin,
        markers,
        once,
        onEnter: () => {
          if (delay > 0 && !scrub) {
            gsap.delayedCall(delay / 1000, () => {
              gsap.to(element, animationConfig);
            });
          }
        },
      },
    });

    animationRef.current = animation;

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((scrollTrigger) => {
        if (scrollTrigger.vars?.trigger === element) {
          scrollTrigger.kill();
        }
      });
    };
  }, []);

  return { ref: elementRef };
};

/**
 * Hook for fade-in-up animation on scroll
 */
export const useFadeInUp = (delay: number = 0) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.set(element, { opacity: 0, y: 50 });

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: delay / 1000,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return { ref: elementRef };
};

/**
 * Hook for slide-in animations
 */
export const useSlideIn = (
  direction: 'left' | 'right' | 'up' | 'down' = 'up',
  delay: number = 0
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const directions = {
      left: { x: -100, y: 0 },
      right: { x: 100, y: 0 },
      up: { x: 0, y: 50 },
      down: { x: 0, y: -50 },
    };

    const initial = directions[direction];

    gsap.set(element, { opacity: 0, ...initial });

    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: delay / 1000,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, delay]);

  return { ref: elementRef };
};

/**
 * Hook for staggered animations (multiple elements)
 */
export const useStaggeredGSAP = (
  animationConfig: gsap.TweenVars = {},
  staggerDelay: number = 0.1
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(container.children) as HTMLDivElement[];

    if (elements.length === 0) return;

    // Set initial state
    gsap.set(elements, {
      opacity: 0,
      y: 50,
    });

    // Create scroll trigger
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: staggerDelay,
          ...animationConfig,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [staggerDelay]);

  return { ref: containerRef };
};

/**
 * Hook for scroll-based active state management (like Fission Labs strategy section)
 * Manages active states based on scroll position
 */
export const useScrollActiveState = (
  triggerSelector: string,
  targetSelector: string,
  activeClass: string = 'is-active'
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const triggers = container.querySelectorAll<HTMLElement>(triggerSelector);
    const targets = container.querySelectorAll<HTMLElement>(targetSelector);

    if (triggers.length === 0 || targets.length === 0) return;

    // Set first item as active initially
    triggers[0]?.classList.add(activeClass);
    targets[0]?.classList.add(activeClass);

    // Function to switch active state
    const makeItemActive = (index: number) => {
      triggers.forEach((el) => el.classList.remove(activeClass));
      targets.forEach((el) => el.classList.remove(activeClass));
      triggers[index]?.classList.add(activeClass);
      targets[index]?.classList.add(activeClass);
    };

    // Create scroll triggers for each element
    triggers.forEach((trigger, index) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            makeItemActive(index);
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (container.contains(trigger.trigger as Node)) {
          trigger.kill();
        }
      });
    };
  }, [triggerSelector, targetSelector, activeClass]);

  return { ref: containerRef };
};

/**
 * Hook for parallax effect on background elements
 * Similar to Fission Labs abstract shapes
 */
export const useParallax = (
  speed: number = 0.5,
  direction: 'up' | 'down' = 'up'
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const multiplier = direction === 'up' ? -1 : 1;

    const animation = gsap.to(element, {
      y: (i, el) => {
        return (window.innerHeight - (el as HTMLElement).getBoundingClientRect().top) * speed * multiplier;
      },
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed, direction]);

  return { ref: elementRef };
};

/**
 * Hook for scale/zoom animation on scroll
 * Used for hero images and featured content
 */
export const useScaleOnScroll = (
  scaleFrom: number = 1.2,
  scaleTo: number = 1,
  start: string = 'top bottom',
  end: string = 'top top'
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.set(element, { scale: scaleFrom });

    const animation = gsap.to(element, {
      scale: scaleTo,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [scaleFrom, scaleTo, start, end]);

  return { ref: elementRef };
};

/**
 * Hook for text reveal animation (character/word by word)
 * Similar to Fission Labs headline animations
 */
export const useTextReveal = (delay: number = 0.05) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const text = element.textContent || '';
    const words = text.split(' ');

    // Wrap each word in a span
    element.innerHTML = words
      .map((word) => `<span style="display: inline-block; opacity: 0;">${word}</span>`)
      .join(' ');

    const wordSpans = element.querySelectorAll<HTMLElement>('span');

    gsap.set(wordSpans, { opacity: 0, y: 20 });

    const animation = gsap.to(wordSpans, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return { ref: elementRef };
};


/**
 * Hook for navbar scroll effect (changes appearance on scroll)
 * Similar to Fission Labs navbar behavior
 */
export const useNavbarScroll = (scrollThreshold: number = 50) => {
  const navbarRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const handleScroll = () => {
      const scrolled = window.scrollY > scrollThreshold;
      setIsScrolled(scrolled);
      
      if (scrolled) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  return { ref: navbarRef, isScrolled };
};
