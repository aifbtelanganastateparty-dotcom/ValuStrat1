# Animation Implementation Guide

## Overview
Based on the analysis of Fission Labs website, we've implemented a comprehensive animation system using GSAP (GreenSock Animation Platform) with ScrollTrigger. All animations are optimized for performance and follow modern web animation best practices.

## Available Animation Hooks

### 1. `useFadeInUp(delay?: number)`
**Purpose**: Fade in and slide up animation on scroll (most common pattern)

**Usage**:
```tsx
import { useFadeInUp } from '../../hooks/useGSAPScrollAnimation';

const MyComponent = () => {
  const titleRef = useFadeInUp(0);      // No delay
  const subtitleRef = useFadeInUp(200); // 200ms delay
  
  return (
    <div>
      <h1 ref={titleRef.ref}>Title</h1>
      <p ref={subtitleRef.ref}>Subtitle</p>
    </div>
  );
};
```

**Characteristics**:
- Starts with `opacity: 0` and `y: 50px`
- Animates to `opacity: 1` and `y: 0`
- Duration: 0.8s
- Easing: `power2.out`
- Triggers at: `top 80%` of viewport

### 2. `useSlideIn(direction, delay?)`
**Purpose**: Slide in from different directions

**Usage**:
```tsx
import { useSlideIn } from '../../hooks/useGSAPScrollAnimation';

const MyComponent = () => {
  const leftRef = useSlideIn('left', 0);
  const rightRef = useSlideIn('right', 200);
  
  return (
    <div>
      <div ref={leftRef.ref}>Slides from left</div>
      <div ref={rightRef.ref}>Slides from right</div>
    </div>
  );
};
```

**Directions**: `'left' | 'right' | 'up' | 'down'`

### 3. `useStaggeredGSAP(animationConfig?, staggerDelay?)`
**Purpose**: Animate multiple child elements with stagger effect

**Usage**:
```tsx
import { useStaggeredGSAP } from '../../hooks/useGSAPScrollAnimation';

const ServicesGrid = () => {
  const gridRef = useStaggeredGSAP({}, 0.1);
  
  return (
    <div ref={gridRef.ref}>
      <div>Service 1</div>
      <div>Service 2</div>
      <div>Service 3</div>
    </div>
  );
};
```

**Note**: Animates all direct children of the container

### 4. `useScrollActiveState(triggerSelector, targetSelector, activeClass?)`
**Purpose**: Manage active states based on scroll position (like Fission Labs strategy section)

**Usage**:
```tsx
import { useScrollActiveState } from '../../hooks/useGSAPScrollAnimation';

const StrategySection = () => {
  const containerRef = useScrollActiveState(
    '.strategy-card',
    '.strategy-content',
    'is-active'
  );
  
  return (
    <div ref={containerRef.ref}>
      <div className="strategy-card">Card 1</div>
      <div className="strategy-content">Content 1</div>
      {/* More cards... */}
    </div>
  );
};
```

### 5. `useParallax(speed?, direction?)`
**Purpose**: Parallax effect for background elements

**Usage**:
```tsx
import { useParallax } from '../../hooks/useGSAPScrollAnimation';

const BackgroundShape = () => {
  const shapeRef = useParallax(0.5, 'up');
  
  return <div ref={shapeRef.ref} className="abstract-shape" />;
};
```

**Parameters**:
- `speed`: Movement speed (0.5 = moves at half scroll speed)
- `direction`: `'up' | 'down'`

### 6. `useScaleOnScroll(scaleFrom?, scaleTo?, start?, end?)`
**Purpose**: Scale/zoom animation on scroll (for hero images)

**Usage**:
```tsx
import { useScaleOnScroll } from '../../hooks/useGSAPScrollAnimation';

const HeroImage = () => {
  const imageRef = useScaleOnScroll(1.1, 1, 'top bottom', 'top center');
  
  return <div ref={imageRef.ref} className="hero-image" />;
};
```

### 7. `useTextReveal(delay?)`
**Purpose**: Reveal text word by word

**Usage**:
```tsx
import { useTextReveal } from '../../hooks/useGSAPScrollAnimation';

const AnimatedTitle = () => {
  const titleRef = useTextReveal(0.05);
  
  return <h1 ref={titleRef.ref}>This text reveals word by word</h1>;
};
```

### 8. `useNavbarScroll(scrollThreshold?)`
**Purpose**: Navbar scroll effect (changes appearance on scroll)

**Usage**:
```tsx
import { useNavbarScroll } from '../../hooks/useGSAPScrollAnimation';

const Navbar = () => {
  const { ref: navbarRef, isScrolled } = useNavbarScroll(50);
  
  return (
    <nav ref={navbarRef} className={isScrolled ? 'scrolled' : ''}>
      {/* Navbar content */}
    </nav>
  );
};
```

## Implementation Examples

### Hero Section (Already Implemented)
```tsx
const Hero = () => {
  const titleRef = useFadeInUp(0);
  const subtitleRef = useFadeInUp(200);
  const ctaRef = useFadeInUp(400);
  const imageRef = useScaleOnScroll(1.1, 1);
  
  return (
    <section>
      <h1 ref={titleRef.ref}>Title</h1>
      <p ref={subtitleRef.ref}>Subtitle</p>
      <div ref={ctaRef.ref}>CTA Buttons</div>
      <div ref={imageRef.ref}>Hero Image</div>
    </section>
  );
};
```

### Services Grid (Already Implemented)
```tsx
const Services = () => {
  const headerRef = useFadeInUp(0);
  const gridRef = useStaggeredGSAP({}, 0.1);
  
  return (
    <section>
      <h2 ref={headerRef.ref}>Our Services</h2>
      <div ref={gridRef.ref}>
        {services.map(service => <ServiceCard key={service.id} {...service} />)}
      </div>
    </section>
  );
};
```

## CSS Styling Tips

### Navbar Scroll Effect
Add to your Navbar CSS:
```css
.navbar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

### Performance Optimization
For animated elements, add:
```css
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU acceleration */
}
```

## Best Practices

1. **Stagger Delays**: Use 100-200ms delays between related elements
2. **Scroll Triggers**: Most animations trigger at `top 80%` for optimal visibility
3. **Performance**: Use `translate3d` instead of `translate` (already handled by GSAP)
4. **Cleanup**: All hooks properly clean up ScrollTrigger instances
5. **Once vs Repeat**: Most animations use `once: true` to prevent re-triggering

## Animation Patterns from Fission Labs

### Pattern 1: Section Header + Content
```tsx
const Section = () => {
  const headerRef = useFadeInUp(0);
  const contentRef = useStaggeredGSAP({}, 0.1);
  
  return (
    <section>
      <h2 ref={headerRef.ref}>Section Title</h2>
      <div ref={contentRef.ref}>
        {/* Grid items animate with stagger */}
      </div>
    </section>
  );
};
```

### Pattern 2: Left/Right Split Content
```tsx
const SplitSection = () => {
  const leftRef = useSlideIn('left', 0);
  const rightRef = useSlideIn('right', 200);
  
  return (
    <section>
      <div ref={leftRef.ref}>Left Content</div>
      <div ref={rightRef.ref}>Right Content</div>
    </section>
  );
};
```

### Pattern 3: Background Parallax
```tsx
const SectionWithBackground = () => {
  const contentRef = useFadeInUp(0);
  const bgShapeRef = useParallax(0.3, 'up');
  
  return (
    <section>
      <div ref={bgShapeRef.ref} className="background-shape" />
      <div ref={contentRef.ref}>Content</div>
    </section>
  );
};
```

## Troubleshooting

### Animations not triggering?
- Check that elements are in the viewport
- Verify ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`
- Ensure elements have proper refs attached

### Performance issues?
- Reduce number of simultaneous animations
- Use `will-change` CSS property sparingly
- Consider using `once: true` to prevent re-animations

### Stagger not working?
- Ensure parent container has direct children (not nested)
- Check that children are actual DOM elements

## Next Steps

1. Add more animation variants as needed
2. Create animation presets for common patterns
3. Add intersection observer fallback for better performance
4. Implement animation preferences (respect prefers-reduced-motion)

