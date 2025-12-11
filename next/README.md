# ValuStrat - Next.js Website

A modern, responsive website built with Next.js 15, React 19, TypeScript, and Framer Motion.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Modern UI** with smooth animations and blur effects
- 📱 **Fully Responsive** design
- ♿ **Accessible** components with ARIA labels
- 🎭 **Framer Motion** for smooth animations
- 🔒 **Error Boundaries** for error handling
- 📊 **SEO Optimized** with metadata
- 🎯 **TypeScript** for type safety

## Tech Stack

- **Framework**: Next.js 15
- **React**: 19.0.0
- **TypeScript**: 5.0.0
- **Animations**: Framer Motion 11.0.0
- **Styling**: CSS Modules
- **Fonts**: Poppins, DM Sans (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd next
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (optional):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
next/
├── app/                    # Next.js App Router
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── services/         # Services page
│   └── ...               # Other pages
├── components/           # React components
│   ├── Navbar/          # Navigation component
│   ├── Hero/            # Hero section
│   ├── Services/        # Services section
│   ├── Footer/          # Footer component
│   └── ErrorBoundary/   # Error boundary
├── lib/                 # Utilities and constants
│   └── constants.ts     # App constants
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Features

### Components

- **Navbar**: Responsive navigation with mobile menu
- **Hero**: Animated hero section with parallax effects
- **Services**: Service cards with hover animations
- **Footer**: Footer with company info and links
- **ErrorBoundary**: Error handling component

### Pages

- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Contact (`/contact`)
- Industries (`/industries`)
- Case Studies (`/case-studies`)
- Blog (`/blog`)
- Careers (`/careers`)
- 404 (`/not-found`)

## Styling

The project uses CSS Modules for component-scoped styling. Global styles and CSS variables are defined in `app/globals.css`.

### CSS Variables

- Colors: `--orange-red`, `--black`, `--white`, `--grey`, etc.
- Fonts: `--poppins`, `--dm-sans`
- Spacing: `--spacing-xs` through `--spacing-3xl`
- Shadows: `--shadow-sm` through `--shadow-xl`

## Environment Variables

See `.env.example` for available environment variables.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms

```bash
npm run build
npm run start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

All Rights Reserved - ValuStrat © 2025
