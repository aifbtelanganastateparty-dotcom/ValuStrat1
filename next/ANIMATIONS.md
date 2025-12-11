# Modern Animations Guide

This document outlines all the modern animations and animation components available in the ValuStrat Next.js application.

## 🎨 Animation Components

### 1. **ScrollProgress**
- **Location**: `components/ScrollProgress`
- **Description**: Displays a progress bar at the top of the page that shows scroll progress
- **Usage**: Automatically included in the root layout
- **Features**: Smooth spring animation, gradient styling

### 2. **CursorFollower**
- **Location**: `components/CursorFollower`
- **Description**: Custom cursor that follows mouse movement with magnetic effect
- **Usage**: Automatically included in the root layout (desktop only)
- **Features**: 
  - Smooth spring physics
  - Expands on hover over interactive elements
  - Blend mode for visual effect

### 3. **AnimatedSection**
- **Location**: `components/AnimatedSection`
- **Description**: Wrapper component that animates children on scroll
- **Props**:
  - `delay`: Animation delay in seconds
  - `direction`: 'up' | 'down' | 'left' | 'right' | 'fade'
  - `className`: Additional CSS classes
- **Usage**:
```tsx
<AnimatedSection direction="up" delay={0.2}>
  <YourContent />
</AnimatedSection>
```

### 4. **TextReveal**
- **Location**: `components/TextReveal`
- **Description**: Reveals text with fade and slide animation on scroll
- **Props**:
  - `delay`: Animation delay
  - `className`: Additional CSS classes
- **Usage**:
```tsx
<TextReveal delay={0.3}>
  <h2>Your Text</h2>
</TextReveal>
```

### 5. **AnimatedText**
- **Location**: `components/AnimatedText`
- **Description**: Animates text character-by-character or word-by-word
- **Props**:
  - `text`: Text to animate
  - `splitBy`: 'words' | 'chars' | 'none'
  - `delay`: Animation delay
- **Usage**:
```tsx
<AnimatedText 
  text="Your animated text" 
  splitBy="words" 
  delay={0.2}
/>
```

### 6. **ParallaxImage**
- **Location**: `components/ParallaxImage`
- **Description**: Creates parallax scrolling effect for images
- **Props**:
  - `speed`: Parallax speed (default: 0.5)
  - `className`: Additional CSS classes
- **Usage**:
```tsx
<ParallaxImage speed={0.5}>
  <img src="..." alt="..." />
</ParallaxImage>
```

### 7. **MagneticButton**
- **Location**: `components/MagneticButton`
- **Description**: Button with magnetic hover effect that follows cursor
- **Props**:
  - `href`: Link URL (optional)
  - `onClick`: Click handler (optional)
  - `className`: Additional CSS classes
- **Usage**:
```tsx
<MagneticButton href="/contact">
  Click Me
</MagneticButton>
```

### 8. **TiltCard**
- **Location**: `components/TiltCard`
- **Description**: 3D tilt effect on mouse movement
- **Props**:
  - `intensity`: Tilt intensity (default: 15)
  - `className`: Additional CSS classes
- **Usage**:
```tsx
<TiltCard intensity={20}>
  <YourCardContent />
</TiltCard>
```

### 9. **StaggerContainer**
- **Location**: `components/StaggerContainer`
- **Description**: Animates children with staggered timing
- **Props**:
  - `staggerDelay`: Delay between children (default: 0.1)
  - `direction`: Animation direction
- **Usage**:
```tsx
<StaggerContainer staggerDelay={0.15} direction="up">
  {items.map(item => <Item key={item.id} />)}
</StaggerContainer>
```

### 10. **FloatingElements**
- **Location**: `components/FloatingElements`
- **Description**: Continuous floating animation
- **Props**:
  - `duration`: Animation duration (default: 3)
  - `delay`: Animation delay
- **Usage**:
```tsx
<FloatingElements duration={4}>
  <YourElement />
</FloatingElements>
```

### 11. **GlowEffect**
- **Location**: `components/GlowEffect`
- **Description**: Adds glow effect on hover
- **Props**:
  - `intensity`: 'low' | 'medium' | 'high'
- **Usage**:
```tsx
<GlowEffect intensity="high">
  <YourElement />
</GlowEffect>
```

### 12. **RevealOnScroll**
- **Location**: `components/RevealOnScroll`
- **Description**: Reveals content when scrolled into view
- **Props**:
  - `direction`: Animation direction
  - `delay`: Animation delay
- **Usage**:
```tsx
<RevealOnScroll direction="up" delay={0.2}>
  <YourContent />
</RevealOnScroll>
```

### 13. **PageTransition**
- **Location**: `components/PageTransition`
- **Description**: Smooth page transitions
- **Usage**: Wrap page content
```tsx
<PageTransition>
  <YourPageContent />
</PageTransition>
```

### 14. **BackgroundParticles**
- **Location**: `components/BackgroundParticles`
- **Description**: Animated particle background
- **Props**:
  - `count`: Number of particles (default: 20)
- **Usage**:
```tsx
<BackgroundParticles count={30} />
```

## 🎣 Custom Hooks

### 1. **useIntersectionObserver**
- **Location**: `hooks/useIntersectionObserver.ts`
- **Description**: Hook for detecting element visibility
- **Returns**: `{ elementRef, isIntersecting, hasIntersected }`
- **Usage**:
```tsx
const { elementRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.1,
  triggerOnce: true,
})
```

### 2. **useParallax**
- **Location**: `hooks/useParallax.ts`
- **Description**: Hook for parallax scrolling
- **Returns**: `offsetY` value
- **Usage**:
```tsx
const offsetY = useParallax({ speed: 0.5, offset: 0 })
```

### 3. **useScrollPosition**
- **Location**: `hooks/useScrollPosition.ts`
- **Description**: Hook for tracking scroll position
- **Returns**: Current scroll position
- **Usage**:
```tsx
const scrollPosition = useScrollPosition()
```

## 🎭 CSS Animation Utilities

Available in `globals.css`:

- `.animate-fade-in-up` - Fade in with upward motion
- `.animate-fade-in` - Simple fade in
- `.animate-blur-in` - Blur to focus animation
- `.animate-blur-out` - Focus to blur animation
- `.animate-slide-in-left` - Slide in from left
- `.animate-slide-in-right` - Slide in from right
- `.animate-scale-in` - Scale up animation
- `.animate-rotate-in` - Rotate in animation
- `.animate-shimmer` - Shimmer effect
- `.animate-pulse` - Pulsing animation
- `.animate-float` - Floating animation
- `.animate-gradient` - Animated gradient background

## 🚀 Component-Specific Animations

### Navbar
- Slide down on mount
- Blur backdrop on scroll
- Staggered menu items
- Gradient text on hover
- Magnetic logo effect

### Hero Section
- Parallax scrolling
- Staggered text reveal
- Blur-to-focus image animation
- Animated background gradient
- Scroll indicator bounce

### Services Section
- Scroll-triggered card reveals
- 3D tilt on hover
- Icon rotation animation
- Staggered grid animation
- Drop shadow on hover

### Footer
- Fade in on scroll
- Staggered column animations
- Hover effects on links
- Button animations

## 🎨 Animation Principles

1. **Performance**: All animations use GPU-accelerated properties (transform, opacity)
2. **Accessibility**: Respects `prefers-reduced-motion` (can be added)
3. **Smoothness**: Uses spring physics for natural motion
4. **Timing**: Consistent easing functions across components
5. **Progressive Enhancement**: Animations enhance but don't break functionality

## 📝 Best Practices

1. Use `viewport={{ once: true }}` for scroll animations to prevent re-triggering
2. Set appropriate `threshold` values for intersection observers
3. Use `delay` for staggered animations
4. Prefer `whileInView` over `animate` for scroll-triggered animations
5. Use `transition` prop for custom timing functions

## 🔧 Customization

All animations can be customized through:
- Component props
- CSS variables in `globals.css`
- Framer Motion variants
- Custom easing functions

## 📚 Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [CSS Animation Best Practices](https://web.dev/animations/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

