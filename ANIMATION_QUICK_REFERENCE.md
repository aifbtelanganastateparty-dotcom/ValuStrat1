# Animation Quick Reference

## 🚀 Quick Start

### 1. Import the hook you need
```tsx
import { useFadeInUp, useSlideIn, useStaggeredGSAP } from '../../hooks/useGSAPScrollAnimation';
```

### 2. Use the hook in your component
```tsx
const MyComponent = () => {
  const elementRef = useFadeInUp(0);
  
  return <div ref={elementRef.ref}>Animated Content</div>;
};
```

## 📋 All Available Hooks

| Hook | Purpose | Delay Parameter | Example Use Case |
|------|---------|----------------|-------------------|
| `useFadeInUp` | Fade in + slide up | Yes (ms) | Section headers, titles |
| `useSlideIn` | Slide from direction | Yes (ms) | Split content, side elements |
| `useStaggeredGSAP` | Animate children with stagger | Yes (seconds) | Service grids, card lists |
| `useParallax` | Parallax background effect | No | Background shapes, decorative elements |
| `useScaleOnScroll` | Scale/zoom on scroll | No | Hero images, featured content |
| `useTextReveal` | Word-by-word reveal | Yes (seconds) | Headlines, important text |
| `useScrollActiveState` | Active state on scroll | No | Tab sections, strategy cards |
| `useNavbarScroll` | Navbar scroll effect | No | Navigation bar |

## 🎯 Common Patterns

### Pattern 1: Section with Header + Content
```tsx
const Section = () => {
  const headerRef = useFadeInUp(0);
  const contentRef = useStaggeredGSAP({}, 0.1);
  
  return (
    <section>
      <h2 ref={headerRef.ref}>Title</h2>
      <div ref={contentRef.ref}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
    </section>
  );
};
```

### Pattern 2: Left/Right Split
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

### Pattern 3: Hero Section
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
      <div ref={ctaRef.ref}>Buttons</div>
      <div ref={imageRef.ref}>Image</div>
    </section>
  );
};
```

## ⚡ Performance Tips

1. **Use `will-change` sparingly** - Only on elements that will animate
2. **Stagger delays** - Use 100-200ms between related elements
3. **Scroll triggers** - Most animations trigger at `top 80%`
4. **GPU acceleration** - Already handled by GSAP (uses `translate3d`)

## 🎨 CSS Additions

### For animated elements:
```css
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU acceleration */
}
```

### For navbar scroll:
```css
.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
```

## 🔧 Troubleshooting

**Animation not triggering?**
- Check element is in viewport
- Verify ref is attached: `ref={elementRef.ref}`
- Ensure ScrollTrigger is registered

**Stagger not working?**
- Parent must have direct children (not nested)
- Children must be actual DOM elements

**Performance issues?**
- Reduce number of simultaneous animations
- Use `once: true` to prevent re-animations
- Check `will-change` usage

## 📚 Full Documentation

See `ANIMATION_IMPLEMENTATION_GUIDE.md` for detailed documentation and examples.

