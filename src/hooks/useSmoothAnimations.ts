import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/**
 * Hook for smooth scroll progress indicator
 */
export const useScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progressBar = progressRef.current;
    if (!progressBar) return;

    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;

      gsap.to(progressBar, {
        width: `${progress}%`,
        duration: 0.1,
        ease: 'none',
      });
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return { ref: progressRef };
};

/**
 * Hook for button ripple effect
 */
export const useRippleEffect = () => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const createRipple = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = mouseEvent.clientX - rect.left - size / 2;
      const y = mouseEvent.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple');

      button.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 0.6 },
        {
          scale: 2,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        }
      );
    };

    button.addEventListener('click', createRipple);

    return () => {
      button.removeEventListener('click', createRipple);
    };
  }, []);

  return { ref: buttonRef };
};

/**
 * Hook for magnetic button effect (button follows cursor slightly)
 */
export const useMagneticButton = (strength: number = 0.3) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let x = 0;
    let y = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      x = (mouseEvent.clientX - centerX) * strength;
      y = (mouseEvent.clientY - centerY) * strength;
    };

    const handleMouseLeave = () => {
      x = 0;
      y = 0;
    };

    const animate = () => {
      currentX += (x - currentX) * 0.1;
      currentY += (y - currentY) * 0.1;

      gsap.set(button, {
        x: currentX,
        y: currentY,
        force3D: true,
      });

      requestAnimationFrame(animate);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      gsap.set(button, { x: 0, y: 0 });
    };
  }, [strength]);

  return { ref: buttonRef };
};

/**
 * Hook for number counter animation
 */
export const useCounter = (
  end: number,
  duration: number = 2000,
  start: number = 0
) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const counter = countRef.current;
    if (!counter) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const currentCount = Math.floor(
        start + (end - start) * easeOutCubic(progress)
      );
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Trigger animation when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(counter);

    return () => observer.disconnect();
  }, [end, duration, start]);

  return { count, ref: countRef };
};

/**
 * Easing function for smooth counter animation
 */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Hook for image lazy loading with fade-in animation
 */
export const useLazyImage = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);

      // Fade in animation
      gsap.fromTo(
        img,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        }
      );
    };

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoaded) {
          imageLoader.src = src;
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(img);

    return () => observer.disconnect();
  }, [src, isLoaded]);

  return { ref: imgRef, src: imageSrc, isLoaded };
};

/**
 * Hook for smooth page transitions
 */
export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transition = (callback: () => void) => {
    setIsTransitioning(true);

    gsap.to('body', {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        callback();
        gsap.to('body', {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => setIsTransitioning(false),
        });
      },
    });
  };

  return { transition, isTransitioning };
};

/**
 * Hook for enhanced hover effects with scale and glow
 */
export const useHoverEffect = (
  scale: number = 1.05,
  glowIntensity: number = 0.3
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale,
        boxShadow: `0 10px 40px rgba(255, 87, 34, ${glowIntensity})`,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [scale, glowIntensity]);

  return { ref: elementRef };
};

/**
 * Hook for typing animation effect
 */
export const useTypingAnimation = (
  text: string,
  speed: number = 50,
  delay: number = 0
) => {
  const [displayedText, setDisplayedText] = useState('');
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Trigger when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let currentIndex = 0;

          const typeChar = () => {
            if (currentIndex < text.length) {
              setDisplayedText(text.slice(0, currentIndex + 1));
              currentIndex++;
              setTimeout(typeChar, speed);
            }
          };

          setTimeout(typeChar, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [text, speed, delay]);

  return { displayedText, ref: textRef };
};

