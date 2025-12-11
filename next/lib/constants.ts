export const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
] as const

export const SERVICES = [
  {
    id: 'ai-ml',
    title: 'AI & ML Services',
    description: 'Transform your business with our cutting-edge AI and machine learning solutions.',
    icon: '🤖',
    link: '/services/ai-ml',
  },
  {
    id: 'cloud-consulting',
    title: 'Cloud Consulting',
    description: 'Expert guidance for your cloud migration and optimization strategies.',
    icon: '☁️',
    link: '/services/cloud-consulting',
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure for your business needs.',
    icon: '📊',
    link: '/services/data-engineering',
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile Development',
    description: 'Custom web and mobile applications built with the latest technologies.',
    icon: '📱',
    link: '/services/web-mobile',
  },
] as const

export const COMPANY_INFO = {
  name: 'ValuStrat',
  email: 'contact@valuestrat.com',
  phone: '+1 (555) 123-4567',
} as const

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/valuestrat',
  twitter: 'https://twitter.com/valuestrat',
  github: 'https://github.com/valuestrat',
} as const

