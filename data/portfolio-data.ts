import { Project, Skill, Service, CVExperience, CVEducation } from '@/types/portfolio';

export const DEVELOPER_INFO = {
  name: 'DevPortfolio',
  role: 'Full-Stack Freelance Developer',
  tagline: 'Building refined digital experiences.',
  bio: 'Full-stack developer specializing in high-performance web applications and premium digital interfaces.',
  story: 'I help brands and startups translate complex ideas into intuitive, scalable digital products. My approach combines technical rigor with a keen eye for minimalist design, ensuring that every pixel serves a purpose.',
  yearsExperience: '8+',
  projectsCompleted: '45+',
  countriesServed: '12',
  email: 'hello@devportfolio.com',
  location: 'London, UK / Remote',
  availability: 'Available for projects',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4aO0HQKolz_p95klNjxG3FhHko7OEcX4Jla452cl6Lstn0j_2eS7IeIfv7VY6XY3qrXIfz0FTy0Q82aNIFwJptJ9Xgb7L_SHRez62s6ShyMN_Xdpqgc4TINR3JnKIkb6X3bxBLPKQE55zmDBN9Mjmlt56bgrK0kzku9Ongjco2xxW61n5q1z4JBh5GfY3m3-2hV9vIYmoHXoVVaCGqzdpAtXb1vFK6v7yKK1mvUMSPtd7G0tLX-XG',
};

export const PROJECTS: Project[] = [
  {
    id: 'nexustream-dashboard',
    title: 'NEXUSTREAM DASHBOARD',
    subtitle: 'NEXT.JS / REDUX / TAILWIND',
    techStack: ['Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Recharts', 'TypeScript'],
    category: 'Web App',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBlxZOAopfj7Om36UREwut7sayXtlSfQ1GrgrtUtj-Rqun26NBAn8T7ulT0iY6eFbdHhYPe7QrS81PfxyUlgbd5kGkUm729p7Z875HGNwbL_r_negd3wULliIziQvuU86ljjukjMA51bnUrrTYEalbAwbjwH97uKd0T4J80P94tllwvjtUIpjkN1VDlO-SQQRhgReF-q6_qVm2MUvp2SDKw4eyUpVqck6aVZU-5yQafL8K52-oQcdQ',
    description: 'An enterprise real-time analytics platform handling streaming metric visualizations, financial command centers, and sub-second updates for cloud infrastructures.',
    featured: true,
    year: '2024',
    client: 'NexuStream Systems Inc.',
    liveUrl: 'https://nexustream-demo.example.com',
    githubUrl: 'https://github.com/example/nexustream-dashboard',
    highlights: [
      'Sub-50ms data streaming with WebSocket multiplexing',
      'Custom Recharts financial visualizer with sub-pixel rendering',
      'Dark mode executive dashboard with modular grid widgets'
    ],
    challenge: 'Handling real-time ingestion of 10,000+ metric data points per second without triggering main thread jank or canvas frame drops.',
    solution: 'Implemented Web Workers for telemetry message parsing and virtualized canvas charts using custom WebGL render buffers.',
    metrics: [
      { label: 'Latency Improvement', value: '-65%' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Active Users', value: '45,000+' }
    ]
  },
  {
    id: 'aura-luxe-ecom',
    title: 'AURA LUXE E-COM',
    subtitle: 'COMMERCEJS / REACT / STYLED',
    techStack: ['CommerceJS', 'React', 'Styled Components', 'Stripe', 'Framer Motion'],
    category: 'E-commerce',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB-5FgRzEAWdaB6R6cQAU_zjRuYza7UFxBjsr8TrN06HAbtOZ-Dj9h8I5GESvRXfh1UIE61uRe-L0AtCkuoahLrv9F4dDNAQXwTxvyiyEUOJ-xn8GVCrG_DUEEVbOQ_31iUS7WvqwIdGKS0r1-2lAJ8o2Odjtq5AVet2S9DrepmZ9uIJydfL_wLtqYFQfO680XbK-CoauGF7z4UkUIYw30rVgwvwhyuyUV0jSbcH738S1V2u4rhnlw',
    description: 'Headless luxury e-commerce experience crafted for a Swiss timepiece brand, featuring interactive 360-degree product customizers and seamless checkout.',
    featured: true,
    year: '2024',
    client: 'Aura Luxe Watchmakers Geneva',
    liveUrl: 'https://auraluxe-demo.example.com',
    githubUrl: 'https://github.com/example/aura-luxe-ecom',
    highlights: [
      'Headless CommerceJS API integration with dynamic localized currencies',
      '3D precision model previewer with customizable bezels and straps',
      'Stripe Elements custom dark theme payment integration'
    ],
    challenge: 'Combining ultra-high-resolution luxury product imagery with dynamic customizer state without compromising instant mobile initial load.',
    solution: 'Designed an adaptive progressive image loading pipeline with Next.js Image optimization and dynamic WebP variant delivery.',
    metrics: [
      { label: 'Conversion Lift', value: '+34%' },
      { label: 'Cart Abandonment', value: '-22%' },
      { label: 'Page Load', value: '0.8s' }
    ]
  },
  {
    id: 'cipher-crypt-app',
    title: 'CIPHER CRYPT APP',
    subtitle: 'TYPESCRIPT / FRAMER MOTION',
    techStack: ['TypeScript', 'React', 'Framer Motion', 'Ethers.js', 'Tailwind CSS'],
    category: 'Mobile / Crypto',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNqhvGJqMydRsWVpwQDh75k_He4LcI-QUClCWDVrI0XJrTUVrlzwSR9Yzh38meH3UcX2p_qXPcEglvozkjLbRCjuYJadRu9DzmpRAZrWPVVtxvxiqBm1IVe49CX79c9ksg6k2x0Fh4NYwVzpvNP-YoFCN6zaOeiYffqpb1Pft8F8EtqPCN09seduWcyBxl-rveOKPOYY96JaU2SQfgobb7O55s4aJ8jDbbujE8BkYZQYWK7bHzM8uZ',
    description: 'Zero-knowledge biometric crypt security suite and digital asset management console built with client-side key generation and state transition physics.',
    featured: true,
    year: '2023',
    client: 'Cipher Protocol Labs',
    liveUrl: 'https://cipher-demo.example.com',
    githubUrl: 'https://github.com/example/cipher-crypt-app',
    highlights: [
      'Client-side zero-knowledge encryption with WebCrypto API',
      'Hardware wallet connectivity via WebHID and WalletConnect v2',
      'Fluid gesture-driven UI animations powered by Framer Motion'
    ],
    challenge: 'Creating a mathematically bulletproof security protocol wrapped in an ultra-smooth, accessible interface for non-technical crypto holders.',
    solution: 'Architected local state machine isolation with worker-based cryptographic hashing and clear visual feedback for multi-step signing.',
    metrics: [
      { label: 'Assets Secured', value: '$120M+' },
      { label: 'User Satisfaction', value: '4.9/5' },
      { label: 'Audit Result', value: '0 Critical Flaws' }
    ]
  },
  {
    id: 'vertex-arch-studio',
    title: 'VERTEX ARCH STUDIO',
    subtitle: 'PHP / GSAP / CUSTOM CMS',
    techStack: ['PHP 8.2', 'GSAP', 'Barba.js', 'Tailwind CSS', 'Custom Headless CMS'],
    category: 'Web Design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbY3_G0dOIAmjMO5yiUB85xk8AqLbVur-NQDQMSX7iVcl9VrpNvm7B2OzKdltzN0rJJFlLrm_TsrSknlF4uw1UL20u9SBiKdW0OqabxTNLgT_xs3GjodHZtdnOTPwECaK3LV7CNSl6GDSb5oJc8h9DjtnNGMwbGdWA4Raj7HylEQMha7sQ4ZD-cswpuj4QJmJ5dlUiPgAL0GEqCj5f5s5Y1i1zZDlJqfruOQwBUB77WD7g2O2PqEtD',
    description: 'Architectural portfolio and editorial showcase featuring smooth page transitions, webGL depth effects, and a tailored headless content engine.',
    featured: true,
    year: '2023',
    client: 'Vertex Architectural Collective London',
    liveUrl: 'https://vertex-arch.example.com',
    githubUrl: 'https://github.com/example/vertex-arch',
    highlights: [
      'Seamless AJAX page transitions powered by Barba.js & GSAP',
      'Monochrome typography system with custom Swiss grid positioning',
      'Tailored high-performance headless CMS back-end'
    ],
    challenge: 'Combining cinematic image reveals and un-cropped architectural photos while ensuring 100% Core Web Vitals optimization.',
    solution: 'Built custom fluid CSS grid containers with smart lazy-loading image boundaries and WebGL displacement hover effects.',
    metrics: [
      { label: 'Bounce Rate', value: '18%' },
      { label: 'Avg Session', value: '4m 20s' },
      { label: 'Awwwards', value: 'Site of the Day' }
    ]
  },
  {
    id: 'strata-fintech',
    title: 'STRATA GLOBAL BANKING',
    subtitle: 'NEXT.JS / TYPESCRIPT / TAILWIND',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    category: 'Web App',
    image: 'https://picsum.photos/seed/strata/1200/800',
    description: 'B2B cross-border payment gateway portal offering instant multi-currency treasury settlement and transaction auditing.',
    featured: false,
    year: '2023',
    client: 'Strata Financial Corp',
    highlights: ['Multi-tenant portal', 'Real-time exchange rate tables', 'Automated PDF statement generator'],
    challenge: 'Consolidating multi-currency ledgers into unified transaction feeds with strict audit requirements.',
    solution: 'Engineered an event-driven queue consumer in Node.js connected to an optimized PostgreSQL database.',
    metrics: [{ label: 'Transactions Processed', value: '$2.4B+' }]
  },
  {
    id: 'orbit-saas-landing',
    title: 'ORBIT CLOUD ENGINE',
    subtitle: 'REACT / THREE.JS / TAILWIND',
    techStack: ['React', 'Three.js', 'Tailwind CSS', 'Vercel'],
    category: 'Web Design',
    image: 'https://picsum.photos/seed/orbit/1200/800',
    description: '3D interactive landing experience for a distributed cloud infrastructure startup with custom shader particle fields.',
    featured: false,
    year: '2022',
    client: 'Orbit Compute Inc.',
    highlights: ['Interactive 3D particle globe', 'High-converting pricing matrix', 'Fluid scroll-linked triggers'],
    challenge: 'Running 60fps Three.js canvas shaders on mobile browsers without battery drain.',
    solution: 'Optimized vertex shaders and implemented adaptive pixel ratio scaling based on device GPU tier.',
    metrics: [{ label: 'Sign-up Rate', value: '14.2%' }]
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML5', category: 'Frontend', level: 'Expert', featured: true },
  { name: 'CSS3', category: 'Frontend', level: 'Expert', featured: true },
  { name: 'Javascript', category: 'Frontend', level: 'Expert', featured: true },
  { name: 'TypeScript', category: 'Frontend', level: 'Expert', featured: true },
  { name: 'React', category: 'Frontend', level: 'Expert', featured: true },
  { name: 'Next.js', category: 'Frontend', level: 'Expert', featured: true },
  { name: 'Tailwind', category: 'Frontend', level: 'Expert', featured: true },
  { name: 'ASP.NET Core', category: 'Backend', level: 'Advanced', featured: true },
  { name: 'PHP', category: 'Backend', level: 'Advanced', featured: true },
  { name: 'WordPress', category: 'Design & CMS', level: 'Expert', featured: true },
  { name: 'Git', category: 'DevOps & Tools', level: 'Expert', featured: true },
  { name: 'Vercel', category: 'DevOps & Tools', level: 'Expert', featured: true },
  { name: 'Node.js', category: 'Backend', level: 'Expert', featured: false },
  { name: 'PostgreSQL', category: 'Backend', level: 'Advanced', featured: false },
  { name: 'GraphQL', category: 'Backend', level: 'Advanced', featured: false },
  { name: 'Docker', category: 'DevOps & Tools', level: 'Proficient', featured: false },
  { name: 'Figma', category: 'Design & CMS', level: 'Expert', featured: false }
];

export const SERVICES: Service[] = [
  {
    id: 'website-design',
    title: 'WEBSITE DESIGN',
    description: 'Creating high-fidelity prototypes and UI layouts that emphasize clarity and brand identity.',
    deliverables: [
      'Design System & Component Library',
      'Figma Interactive Prototypes',
      'Mobile-First Responsive Wireframes',
      'Micro-interaction & Animation Guidelines'
    ],
    process: ['Discovery & Research', 'UX Wireframing', 'UI Visual Design', 'Handoff Specifications'],
    duration: '2-3 Weeks',
    iconName: 'Layout'
  },
  {
    id: 'frontend-dev',
    title: 'FRONTEND DEV',
    description: 'Responsive, accessible, and fast interfaces built with the latest React and Next.js frameworks.',
    deliverables: [
      'Pixel-perfect Next.js / React Architecture',
      'Tailwind CSS v4 Utility Styling',
      'State Management & API Integration',
      'Accessibility (WCAG AA) Compliance'
    ],
    process: ['Architecture Planning', 'Component Slicing', 'API Integration', 'Cross-Browser Verification'],
    duration: '3-5 Weeks',
    iconName: 'Code2'
  },
  {
    id: 'corporate-sites',
    title: 'CORPORATE SITES',
    description: 'Custom business solutions and portfolios designed to convert visitors into loyal clients.',
    deliverables: [
      'Headless CMS Content Management',
      'Multi-language & Internationalization',
      'Analytics & Conversion Tracking',
      'Custom Form & CRM Pipeline Integration'
    ],
    process: ['Business Goal Mapping', 'Custom CMS Modeling', 'Production Build', 'Deploy & Training'],
    duration: '4-6 Weeks',
    iconName: 'Building2'
  },
  {
    id: 'optimization',
    title: 'OPTIMIZATION',
    description: 'Improving Core Web Vitals, SEO performance, and accessibility standards for existing sites.',
    deliverables: [
      'Core Web Vitals Audit & Remediation',
      'JavaScript Bundle Size Reduction',
      'Technical SEO & OpenGraph Schema',
      'Server-Side Caching & CDN Optimization'
    ],
    process: ['Diagnostic Profiling', 'Bottleneck Elimination', 'Performance Tuning', 'Verification Report'],
    duration: '1-2 Weeks',
    iconName: 'Zap'
  }
];

export const WORK_EXPERIENCE: CVExperience[] = [
  {
    id: 'exp-1',
    period: '2021 - PRESENT',
    role: 'Lead Full-Stack Freelance Engineer',
    company: 'DevPortfolio Digital Studio',
    location: 'London, UK (Remote)',
    description: 'Architecting bespoke digital products, SaaS dashboards, and high-conversion web applications for international clients across Europe and North America.',
    keyAchievements: [
      'Delivered 45+ web applications with a 100% client satisfaction rating',
      'Reduced average client bounce rate by 35% through custom UX and speed optimizations',
      'Pioneered headless Next.js e-commerce integrations generating over $5M in combined client revenue'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Vercel']
  },
  {
    id: 'exp-2',
    period: '2019 - 2021',
    role: 'Senior Frontend Engineer',
    company: 'Apex Digital Systems',
    location: 'London, UK',
    description: 'Led a team of 6 frontend developers in building enterprise data analytics platforms and design systems for fintech clients.',
    keyAchievements: [
      'Engineered real-time canvas charting components handling 50k+ data points per second',
      'Standardized company-wide React component library cutting new feature build time by 40%'
    ],
    technologies: ['React', 'Redux', 'TypeScript', 'ASP.NET Core', 'Jest', 'Webpack']
  },
  {
    id: 'exp-3',
    period: '2016 - 2019',
    role: 'Full-Stack Developer',
    company: 'Vanguard Media House',
    location: 'Manchester, UK',
    description: 'Developed custom WordPress themes, PHP backends, and responsive interactive marketing sites for high-profile publishing brands.',
    keyAchievements: [
      'Built custom headless WordPress backends supporting 1M+ monthly pageviews',
      'Improved Google Lighthouse Performance scores from 45 to 98 across 12 flagship publications'
    ],
    technologies: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'WordPress', 'MySQL', 'Git']
  }
];

export const EDUCATION: CVEducation[] = [
  {
    degree: 'B.Sc. in Computer Science (First Class Honors)',
    institution: 'University of London',
    year: '2012 - 2016',
    details: 'Specialized in Software Engineering, Web Algorithms, and Human-Computer Interaction.'
  }
];
