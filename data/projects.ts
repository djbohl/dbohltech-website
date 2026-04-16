export type Project = {
  slug: string
  title: string
  type: string
  featured: boolean
  blurb: string
  description: string
  tags: string[]
  thumbVariant: 'blue' | 'purple' | 'green'
  thumbEmoji: string
  thumbText: string
  year?: number
  liveUrl?: string
  githubUrl?: string
  thumbImage?: string
}

export const projects: Project[] = [
  {
    slug: 'lynxonboard',
    title: 'LynxOnboard',
    type: 'Featured · Full-Stack SaaS',
    featured: true,
    blurb:
      'Full-stack SaaS platform connecting talent with venues. Web app, mobile app, backend API, and database — built solo from architecture to deployment.',
    description: `LynxOnboard is a comprehensive SaaS platform designed to bridge the gap between talent and venues. The application connects performers and artists with event venues, enabling seamless booking, scheduling, and collaboration.

Built entirely as a solo full-stack project, LynxOnboard includes a production-grade web application, cross-platform mobile app (iOS & Android), robust backend API, and scalable database architecture. The platform features real-time data synchronization, custom dashboards, role-based access control, and third-party integrations.

Tech stack: Next.js (web frontend), React Native (mobile), Node.js (backend API), Supabase (authentication & database), TypeScript throughout. The architecture prioritizes performance, reliability, and user experience across all platforms.`,
    tags: ['Next.js', 'React Native', 'Node.js', 'Supabase', 'TypeScript', 'SaaS'],
    thumbVariant: 'blue',
    thumbEmoji: '⚡',
    thumbText: 'APP',
    year: 2024,
    thumbImage: '/projects/lynxonboard-app.PNG',
  },
  {
    slug: 'aquifer-monitor',
    title: 'Aquifer Crisis Monitor',
    type: 'Data Visualization · Dashboard',
    featured: true,
    blurb: 'Interactive map-based dashboard monitoring aquifer stress in major data-center regions with live USGS groundwater readings and depletion modeling.',
    description: `Aquifer Crisis Monitor is an interactive dashboard that visualizes groundwater stress across major data-center regions. The application combines geospatial data, live USGS monitoring data, and predictive depletion modeling.

Features include region-based filtering, interactive maps with depletion/recharge zones, existing and planned data centers, dynamic modeling with scenario toggles (Current/AI Surge/Managed growth), and live groundwater level readings plotted from USGS monitoring wells. The backend uses an Express proxy to securely fetch USGS API data and avoid browser CORS restrictions.

Built with React and Vite for a responsive frontend, MapLibre GL JS for interactive mapping, and Node.js/Express for the backend proxy. The application supports machine-generated data ingestion and enables users to export model state reports.`,
    tags: ['React', 'Vite', 'MapLibre GL JS', 'Express', 'USGS API', 'Data Visualization'],
    thumbVariant: 'blue',
    thumbEmoji: '💧',
    thumbText: 'DATA',
    year: 2025,
    liveUrl: 'https://aquifer-monitor.vercel.app',
    githubUrl: 'https://github.com/djbohl/aquifer-monitor',
  },
  {
    slug: 'data-automation',
    title: 'Data Automation & Kubernetes Infrastructure',
    type: 'Backend · Data Engineering',
    featured: true,
    blurb: 'Python-based data automation pipeline with Kubernetes orchestration, device asset management, and distributed backup systems.',
    description: `Built a comprehensive data automation solution for device asset management using Python, Pandas, and Jupyter Notebooks.

The system scraped and cleaned device data from Microsoft 365 to enable data analysis and visualization. Developed an automated backup solution that leveraged Python and Cron Jobs to manage containerized backups across distributed systems.

Kubernetes was utilized for orchestration and management, ensuring scalability and reliability across the infrastructure. Automation pipelines streamlined the entire process, with Rclone handling efficient data storage and transfer.`,
    tags: ['Python', 'Kubernetes', 'Jupyter', 'Pandas', 'Scripting'],
    thumbVariant: 'blue',
    thumbEmoji: '⚙️',
    thumbText: 'DATA',
    year: 2025,
  },
  {
    slug: 'social-b2b-website',
    title: 'Social B2B Book Launch Website',
    type: 'Web Design · Brand',
    featured: false,
    blurb: 'Custom Wix website for book launch with integrated marketing campaign and cohesive brand identity across platforms.',
    description: `Designed and built a custom Wix website for the launch of Social B2B, a book focused on modern B2B marketing strategies.

The site highlights the book's key value propositions, author information, and purchasing options in a clean, engaging, and mobile-friendly format. Created a supporting LinkedIn banner for the promotional campaign, ensuring cohesive visual identity and messaging across all platforms.`,
    tags: ['Wix', 'Web Design', 'Banner Design', 'Branding'],
    thumbVariant: 'purple',
    thumbEmoji: '📚',
    thumbText: 'WEB',
    year: 2025,
    liveUrl: 'https://thesocialb2borganization.com',
    thumbImage: '/projects/socialb2b-website.png',
  },
  {
    slug: 'central-florida-packaging',
    title: 'Central Florida Packaging B2B Website & Logo Redesign',
    type: 'Web Design · Branding',
    featured: false,
    blurb: 'B2B website redesign and logo refresh for aerospace/defense packaging company with Wix Velo customization, SEO optimization, and business integration.',
    description: `Developed and optimized a comprehensive B2B website for Central Florida Packaging, a custom packaging solutions provider serving aerospace, military defense, medical, industrial, automotive, and commercial sectors.

Built using Wix Velo with custom features including enhanced online chat for customer interaction, Google Business profile setup and management, DNS configuration for proper domain functionality, and comprehensive SEO implementation to drive organic traffic and search visibility.

The redesigned website now serves as a professional digital storefront for their industrial packaging solutions, improving online presence and customer engagement across multiple industry verticals.`,
    tags: ['Wix', 'Wix Velo', 'Web Design', 'SEO', 'Branding'],
    thumbVariant: 'green',
    thumbEmoji: '📦',
    thumbText: 'B2B',
    year: 2025,
    liveUrl: 'https://cflpkg.com',
    thumbImage: '/projects/cfp-website.png',
  },
  {
    slug: 'titan-grill-cleaner',
    title: 'Titan Grill & Oven Cleaner Logo & Label Design',
    type: 'Brand Design · Packaging',
    featured: false,
    blurb: 'Logo vectorization and product label design: transformed low-res reference into clean, hand-drawn SVG with refined balance, legibility, and print-ready label.',
    description: `Transformed the Titan Grill & Oven Cleaner logo from a low-resolution JPG reference into a clean, professional hand-drawn SVG. During the vectorization process, refined the design to improve balance, legibility, and overall suitability as a brand logo.

Following the logo finalization, designed a professional, print-ready product label that integrates the new logo with comprehensive branding and product information. The label design ensures consistency with brand identity while meeting packaging requirements for retail presentation.`,
    tags: ['Logo Design', 'Vector Art', 'Label Design', 'Branding', 'Adobe'],
    thumbVariant: 'blue',
    thumbEmoji: '🧪',
    thumbText: 'LOGO',
    year: 2024,
    thumbImage: '/projects/titan-logo.png',
  },
  {
    slug: 'brand-design-sports',
    title: 'Next Level Sports Training Brand Identity',
    type: 'Brand Design',
    featured: false,
    blurb: 'Complete brand identity system for startup: logo design, color systems, business cards, and marketing materials.',
    description: `Created a complete brand design system for Next Level Sports Training, a startup providing specialized athletic training and private lessons.

Deliverables included logo design with multiple usage variations, comprehensive color style guide, professional business cards, and supporting marketing materials. The design system provides a cohesive visual identity for all print and digital applications.`,
    tags: ['Logo Design', 'Branding', 'Print Design', 'Adobe Photoshop'],
    thumbVariant: 'green',
    thumbEmoji: '🎨',
    thumbText: 'BRAND',
    year: 2024,
  },
  {
    slug: 'wix-ecommerce-integration',
    title: 'Wix Velo E-Commerce Integration',
    type: 'Custom Development',
    featured: false,
    blurb: 'Built custom Wix Velo integration connecting Instagram shop directly to Wix checkout with live URL functionality.',
    description: `Developed a custom Wix Velo integration for an e-commerce client, enabling direct Instagram shop-to-Wix checkout flow with functioning checkout URLs.

Solved complex integration challenges with rapid problem-solving and clear communication. The solution streamlined their sales process and received a 5.0/5 rating with client praise for expertise, technical problem-solving, and responsiveness.`,
    tags: ['Wix Velo', 'JavaScript', 'E-Commerce', 'Integrations'],
    thumbVariant: 'purple',
    thumbEmoji: '🛍️',
    thumbText: 'INT',
    year: 2025,
  },
]
