# GSAP Scroll Animation Hooks

Professional-grade scroll animations using GSAP (GreenSock Animation Platform) - a powerful alternative to Webflow's animation system.

## Installation

GSAP is already added to `package.json`. Install dependencies:

```bash
npm install
```

## Available Hooks

### useFadeInUp

Simple fade-in and slide-up animation on scroll.

```tsx
import { useFadeInUp } from './hooks/useGSAPScrollAnimation';

const MyComponent = () => {
  const { ref } = useFadeInUp(200); // 200ms delay

  return (
    <div ref={ref}>
      Content that fades in and slides up
    </div>
  );
};
```

### useSlideIn

Slide-in animation from any direction.

```tsx
import { useSlideIn } from './hooks/useGSAPScrollAnimation';

const MyComponent = () => {
  const { ref } = useSlideIn('left', 100); // Slide from left with 100ms delay

  return (
    <div ref={ref}>
      Content that slides in from left
    </div>
  );
};
```

**Directions:** `'left' | 'right' | 'up' | 'down'`

### useStaggeredGSAP

Animate multiple child elements with staggered delays.

```tsx
import { useStaggeredGSAP } from './hooks/useGSAPScrollAnimation';

const MyComponent = () => {
  const { ref } = useStaggeredGSAP(
    { scale: 1.1 }, // Additional animation config
    0.15 // Stagger delay between elements
  );

  return (
    <div ref={ref}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </div>
  );
};
```

### useGSAPScrollAnimation

Advanced hook for custom animations.

```tsx
import { useGSAPScrollAnimation } from './hooks/useGSAPScrollAnimation';

const MyComponent = () => {
  const { ref } = useGSAPScrollAnimation(
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 360,
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    },
    {
      start: 'top 80%',
      once: true,
      delay: 200,
    }
  );

  return <div ref={ref}>Custom animated content</div>;
};
```

## Utility Functions

### fadeInUp

```tsx
import { fadeInUp } from './utils/gsapAnimations';

useEffect(() => {
  fadeInUp('.my-element', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 200,
  });
}, []);
```

### slideIn

```tsx
import { slideIn } from './utils/gsapAnimations';

slideIn('.my-element', 'left', {
  duration: 1,
  ease: 'power3.out',
});
```

### staggerAnimation

```tsx
import { staggerAnimation } from './utils/gsapAnimations';

staggerAnimation(
  document.querySelectorAll('.item'),
  { opacity: 1, y: 0 },
  0.1 // Stagger delay
);
```

### parallaxScroll

```tsx
import { parallaxScroll } from './utils/gsapAnimations';

parallaxScroll('.parallax-element', 0.5); // 50% speed
```

## Benefits of GSAP

- **Performance**: Hardware-accelerated animations
- **Smooth**: 60fps animations
- **Powerful**: More control than CSS animations
- **Flexible**: Complex animation sequences
- **Cross-browser**: Works everywhere
- **ScrollTrigger**: Advanced scroll-based animations

## Example: Footer with GSAP

```tsx
import { useStaggeredGSAP } from './hooks/useGSAPScrollAnimation';

const Footer = () => {
  const { ref } = useStaggeredGSAP({}, 0.1);

  return (
    <footer>
      <div ref={ref} className="footer-grid">
        <div className="footer-column">Column 1</div>
        <div className="footer-column">Column 2</div>
        <div className="footer-column">Column 3</div>
      </div>
    </footer>
  );
};
```

## Migration from Current System

You can gradually migrate components:

1. **Keep current system** - It works fine for simple animations
2. **Use GSAP for complex animations** - Parallax, pinning, scrubbing
3. **Hybrid approach** - Use both systems where appropriate

## Performance Tips

- Use `once: true` for elements that only need to animate once
- Use `scrub: true` for scroll-linked animations
- Clean up ScrollTriggers on unmount (handled automatically)
- Use `will-change` CSS property for better performance

