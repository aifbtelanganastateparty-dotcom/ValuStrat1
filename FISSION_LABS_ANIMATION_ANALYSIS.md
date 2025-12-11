# Fission Labs Animation & Rendering Analysis

## Overview
Fission Labs website (www.fissionlabs.com) uses a combination of **GSAP (GreenSock Animation Platform)** with **ScrollTrigger**, **Webflow interactions**, and custom JavaScript for smooth, professional animations.

## Key Animation Libraries & Technologies

### 1. **GSAP (GreenSock Animation Platform)**
- **Version**: 3.11.4
- **CDN**: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js`
- **ScrollTrigger Plugin**: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js`
- **Purpose**: High-performance animations with scroll-triggered effects

### 2. **Webflow Interactions**
- Uses `data-w-id` attributes for Webflow's built-in animation system
- Example: `data-w-id="bedc400e-ca69-8cb7-ddb1-ba1a73f75777"`
- Initial states set via inline styles with transforms and opacity

### 3. **jQuery**
- Used for DOM manipulation and event handling
- Version: 3.5.1

## Animation Patterns Identified

### 1. **Scroll-Triggered Fade-In Animations**
**Location**: Case study sections, service cards, testimonials

**Implementation Pattern**:
```javascript
// Initial state (inline styles)
style="transform: translate3d(0, 30px, 0) scale3d(1, 1, 1); opacity: 0"

// Animation triggers on scroll
ScrollTrigger.create({
  trigger: element,
  start: "top 80%", // or "top center"
  onEnter: () => {
    // Animate to visible state
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  }
});
```

**Characteristics**:
- Elements start with `opacity: 0` and `translateY: 30px`
- Fade in and slide up when scrolled into view
- Smooth easing: `power2.out`
- Duration: ~0.8s

### 2. **Staggered Grid Animations**
**Location**: Service grid cards, footer columns

**Implementation Pattern**:
```javascript
// Staggered animation for multiple elements
gsap.to(elements, {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.1 // 0.1s delay between each element
});
```

**Characteristics**:
- Elements animate sequentially with small delays
- Creates a cascading effect
- Used for card grids and list items

### 3. **Scroll-Based Active State Switching**
**Location**: Strategy section with cards

**Implementation Pattern**:
```javascript
$(".strat_wrapper").each(function (index) {
  let childTriggers = $(this).find(".strat_cards_wrapper");
  let childTargets = $(this).find(".strat_card_left");
  
  function makeItemActive(index) {
    childTriggers.removeClass("is-active");
    childTargets.removeClass("is-active");
    childTriggers.eq(index).addClass("is-active");
    childTargets.eq(index).addClass("is-active");
  }
  
  childTriggers.each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top center",
      end: "bottom center",
      onToggle: (isActive) => {
        if (isActive) {
          makeItemActive(index);
        }
      }
    });
  });
});
```

**Characteristics**:
- Active state changes based on scroll position
- Smooth transitions between sections
- Used for interactive content sections

### 4. **Transform-Based Animations**
**Location**: Hero sections, abstract shapes

**Transform Properties Used**:
- `translate3d(x, y, z)` - 3D translations
- `scale3d(x, y, z)` - Scaling
- `rotateX/Y/Z` - 3D rotations
- `skew(x, y)` - Skewing

**Example**:
```css
transform: translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
```

### 5. **Slider/Carousel Animations**
**Location**: Testimonials, case studies, service sliders

**Implementation**:
- Webflow's built-in slider component
- Custom JavaScript for auto-advancing tabs
- Smooth transitions with easing

### 6. **Navbar Scroll Effects**
**Location**: Navigation bar

**Implementation**:
```javascript
$(document).scroll(function () {
  var $nav = $(".navbar");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
```

**Characteristics**:
- Navbar changes appearance on scroll
- Background color/opacity changes
- Smooth class toggling

## Rendering Styles & Visual Effects

### 1. **Color Scheme**
- **Primary Orange**: Used for accents and CTAs
- **Dark Backgrounds**: For hero sections
- **White/Light**: For content sections
- **High Contrast**: For readability

### 2. **Typography Animations**
- Text fades in with slight upward movement
- Staggered text reveals
- Orange accent text for highlights

### 3. **Abstract Shapes & Backgrounds**
- SVG abstract shapes with parallax-like effects
- Layered elements creating depth
- Smooth position changes on scroll

### 4. **Card Hover Effects**
- Subtle scale/transform on hover
- Smooth transitions
- Shadow/elevation changes

## Performance Optimizations

1. **Hardware Acceleration**: Uses `translate3d` instead of `translate` for GPU acceleration
2. **Will-change**: Likely used for animated properties
3. **RequestAnimationFrame**: GSAP uses RAF for smooth animations
4. **Lazy Loading**: Images use `loading="lazy"` attribute

## Animation Timing & Easing

- **Duration**: Typically 0.6-0.8 seconds
- **Easing**: `power2.out`, `ease`, `ease-in-out`
- **Stagger Delay**: 0.1-0.2 seconds between elements
- **Scroll Trigger Start**: Usually "top 80%" or "top center"

## Recommendations for Your React App

1. **Use GSAP with ScrollTrigger** (already implemented ✅)
2. **Implement fade-in-up animations** for sections
3. **Add staggered animations** for grid items
4. **Create scroll-based active states** for interactive sections
5. **Use transform3d** for better performance
6. **Add navbar scroll effects**
7. **Implement smooth hover effects** on cards

## Next Steps

The existing `useGSAPScrollAnimation.ts` hook is a good foundation. We should:
1. Enhance it with more animation variants
2. Add stagger support (already partially there)
3. Create reusable animation components
4. Add scroll-based state management
5. Implement parallax effects for background elements

