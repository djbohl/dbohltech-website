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
}

export const projects: Project[] = [
  {
    slug: 'lynxonboard',
    title: 'LynxOnboard',
    type: 'Featured · Web Application',
    featured: true,
    blurb:
      'Full-stack web app, backend and cross-platform mobile app with real-time data, custom dashboard, and third-party integrations.',
    description: `LynxOnboard is a full-stack web application and cross-platform mobile app built for onboarding and operations management.

The platform features real-time data dashboards, role-based access control, third-party integrations, and a custom notification system — all tied together with a clean, opinionated UI built from scratch.

Built with Next.js on the frontend, Node.js on the backend, and Supabase for auth and the database layer. The mobile companion app was built in React Native and shares business logic with the web client.`,
    tags: ['Next.js', 'Node.js', 'Supabase', 'React Native', 'TypeScript'],
    thumbVariant: 'blue',
    thumbEmoji: '⚡',
    thumbText: 'APP',
    year: 2024,
  },
  {
    slug: 'onlyfunds',
    title: 'OnlyFunds',
    type: 'Browser Extension',
    featured: false,
    blurb: 'Chrome extension with 500+ users. OF scheduling and management automation tool.',
    description: `OnlyFunds is a Chrome extension used by 500+ creators on the OnlyFans platform.

It automates scheduling, bulk messaging, and content management workflows — saving creators hours of manual work each week. The extension hooks into the platform's existing UI and adds a layer of automation without requiring any account credentials to be stored externally.

Built with vanilla JavaScript, a custom background service worker, and a lightweight popup UI.`,
    tags: ['Chrome Extension', 'JavaScript', 'Web APIs', 'Automation'],
    thumbVariant: 'purple',
    thumbEmoji: '🧩',
    thumbText: 'EXT',
    year: 2024,
  },
  {
    slug: 'mobile-project',
    title: 'Mobile Project',
    type: 'Mobile App',
    featured: false,
    blurb: 'iOS & Android app. Cross-platform mobile app built with React Native.',
    description: `A cross-platform mobile application built for iOS and Android using React Native.

Details coming soon — update this description in data/projects.ts.`,
    tags: ['React Native', 'iOS', 'Android', 'Expo'],
    thumbVariant: 'green',
    thumbEmoji: '📱',
    thumbText: 'MOB',
    year: 2024,
  },
]
