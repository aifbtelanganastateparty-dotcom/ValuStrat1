# Scroll Animation Hooks

Custom React hooks for Webflow-like scroll-triggered animations without external dependencies.

## useScrollAnimation

Basic hook for animating a single element on scroll.

```tsx
import { useScrollAnimation } from './hooks/useScrollAnimation';

const MyComponent = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    delay: 200, // milliseconds
  });

  return (
    <div
      ref={ref}
      className={`my-element ${isVisible ? 'animate-in' : ''}`}
    >
      Content
    </div>
  );
};
```

### Options

- `threshold`: Intersection ratio (0-1) to trigger animation (default: 0.1)
- `rootMargin`: Margin around root for intersection calculation (default: '0px 0px -50px 0px')
- `triggerOnce`: Only animate once (default: true)
- `delay`: Delay before animation starts in milliseconds (default: 0)

## useStaggeredScrollAnimation

Hook for animating multiple elements with staggered delays.

```tsx
import { useStaggeredScrollAnimation } from './hooks/useScrollAnimation';

const MyComponent = () => {
  const { ref, isVisible } = useStaggeredScrollAnimation(5, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <div ref={ref}>
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className={`item ${isVisible(index) ? 'animate-in' : ''}`}
        >
          Item {index}
        </div>
      ))}
    </div>
  );
};
```

## CSS Example

```css
.my-element {
  transform: translate3d(0, 30px, 0);
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.my-element.animate-in {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
```

