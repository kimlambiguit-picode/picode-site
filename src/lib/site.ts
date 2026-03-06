export const site = {
  name: 'PiCode Solutions',
  tagline: 'Enterprise-grade software. Built with precision.',
  description:
    'We design and build custom web applications and enterprise software using Azure, .NET, React, and Next.js. From complex integrations to scalable cloud architectures—delivered with precision.',
  url: 'https://picodesolutions.com',
  ogImage: '/og-image.png',
  
  contact: {
    email: 'info@picodesolutions.com',
    phone: '+63 917 301 6036',
    address: {
      street: 'Lower Sugod',
      city: 'Valencia City',
      state: 'Bukidnon',
      zip: '8709',
      country: 'Philippines',
    },
  },
  
  socials: {
    linkedin: 'https://www.linkedin.com/company/picode-solutions-philippines',
  },
  
  navigation: {
    main: [
      { name: 'Services', href: '/services' },
      { name: 'Work', href: '/work' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    footer: [
      {
        title: 'Company',
        links: [
          { name: 'About', href: '/about' },
          { name: 'Work', href: '/work' },
          { name: 'Blog', href: '/blog' },
          { name: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Services',
        links: [
          { name: 'Web Development', href: '/services#web-development' },
          { name: 'Cloud Solutions', href: '/services#cloud-solutions' },
          { name: 'Enterprise Software', href: '/services#enterprise-software' },
          { name: 'API Development', href: '/services#api-development' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '/privacy' },
          { name: 'Terms of Service', href: '/terms' },
        ],
      },
    ],
  },
  
  services: [
    {
      id: 'web-development',
      title: 'Web Application Development',
      description:
        'Modern, performant web applications built with React and Next.js. From complex dashboards to customer-facing platforms.',
      icon: 'Globe',
      features: [
        'Server-side rendering for optimal SEO and performance',
        'Real-time data synchronization and live updates',
        'Progressive Web App capabilities',
        'Comprehensive testing and quality assurance',
      ],
    },
    {
      id: 'cloud-solutions',
      title: 'Azure Cloud Solutions',
      description:
        'Scalable, secure cloud infrastructure designed for enterprise workloads. Migration, optimization, and managed services.',
      icon: 'Cloud',
      features: [
        'Cloud architecture design and planning',
        'Azure migration and modernization',
        'Auto-scaling and cost optimization',
        'Security hardening and compliance',
      ],
    },
    {
      id: 'enterprise-software',
      title: 'Enterprise Software Development',
      description:
        'Custom business applications built on .NET and SQL Server. Robust, maintainable solutions that scale with your organization.',
      icon: 'Building2',
      features: [
        'Custom ERP and CRM integrations',
        'Workflow automation systems',
        'Data analytics and reporting platforms',
        'Legacy system modernization',
      ],
    },
    {
      id: 'api-development',
      title: 'API Development & Integration',
      description:
        'RESTful and GraphQL APIs that connect your systems. Clean architecture, comprehensive documentation, and robust testing.',
      icon: 'Workflow',
      features: [
        'API design and documentation',
        'Third-party system integrations',
        'Authentication and authorization',
        'Rate limiting and caching strategies',
      ],
    },
  ],
  
  process: [
    {
      step: 1,
      title: 'Discovery',
      description:
        'We analyze your requirements, understand your business context, and define clear success metrics.',
    },
    {
      step: 2,
      title: 'Architecture',
      description:
        'We design scalable solutions with the right technology choices for your specific needs.',
    },
    {
      step: 3,
      title: 'Development',
      description:
        'Iterative development with regular demos, comprehensive testing, and continuous integration.',
    },
    {
      step: 4,
      title: 'Deployment',
      description:
        'Zero-downtime deployments, monitoring setup, and thorough documentation for your team.',
    },
  ],
  
  caseStudies: [
    {
      id: 'noorana',
      title: 'Noorana',
      client: 'Noorana',
      clientContact: 'Tina Patel',
      category: 'Web Application',
      thumbnail: '/work/noorana-thumb.jpg',
      projectUrl: 'https://noorana.app',
      challenge:
        'Noorana started as a very basic web app. The client needed to evolve it into a commercial-ready application—without rebuilding from scratch.',
      solution:
        'We took the existing foundation and, within a year, developed it into a production-grade application: improved architecture, new features, and a polished user experience—all while keeping the product live and iterating with the client.',
      stack: ['React', 'Next.js', 'TypeScript', 'Azure'],
      outcomes: [
        'Commercial-ready in under a year',
        'Ongoing partnership since 2023',
        'Evolved from MVP to full product',
      ],
      ongoing: true,
    },
    {
      id: 'ana-reisdorf',
      title: 'Ana Reisdorf | Health Writer',
      client: 'Ana Reisdorf',
      clientContact: 'Ana Reisdorf',
      category: 'Marketing Website',
      thumbnail: '/work/ana-reisdorf-thumb.jpg',
      projectUrl: 'https://www.anareisdorf.com/',
      challenge:
        'A health and wellness writer needed a professional online presence to attract brands and showcase her expertise—positioning “Healthcare to Headlines” for freelance health writers.',
      solution:
        'We designed and built a WordPress site that puts her authority front and center: clear messaging, a Get Started guide, blog, and lead capture—so she can connect with clients and grow her freelance writing business.',
      stack: ['WordPress', 'PHP', 'Custom theme', 'SEO'],
      outcomes: [
        'Professional, expert-led positioning',
        'Blog and lead-generation ready',
        'Project delivered and live',
      ],
      ongoing: false,
    },
  ],
  
  testimonials: [
    {
      quote:
        'We didn\'t start from scratch—we had a basic web app. PiCode took it and within a year turned it into something we could actually run as a business. They feel like part of the team.',
      author: 'Tina Patel',
      role: 'Owner',
      company: 'Noorana',
    },
    {
      quote:
        'I needed a site that looked professional and helped me attract the right clients. PiCode built exactly that—clear, on-brand, and easy for me to manage. Very happy with the result.',
      author: 'Ana Reisdorf',
      role: 'Health Writer',
      company: 'anareisdorf.com',
    },
  ],
  
  stats: [
    { value: '2', label: 'Projects Delivered' },
    { value: '99.9%', label: 'Uptime Average' },
    { value: '2+', label: 'Years in Production' },
    { value: 'Ongoing', label: 'Noorana Partnership' },
  ],
  
  faqs: [
    {
      question: 'What technologies do you specialize in?',
      answer:
        'We specialize in the Microsoft ecosystem (Azure, .NET, SQL Server) and modern JavaScript frameworks (React, Next.js, Node.js). This stack covers most enterprise needs while ensuring maintainability and scalability.',
    },
    {
      question: 'How do you handle project pricing?',
      answer:
        'We offer both fixed-price and time-and-materials engagements. After an initial discovery phase, we provide a detailed proposal with clear scope, timeline, and pricing. No surprises.',
    },
    {
      question: 'What does your typical engagement look like?',
      answer:
        'Most projects span 3-6 months, starting with a 2-week discovery phase. We work in 2-week sprints with regular demos and adjust priorities based on your feedback.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer:
        'Yes. We offer maintenance and support packages that include monitoring, security updates, bug fixes, and feature enhancements. Most clients continue with us post-launch.',
    },
    {
      question: 'Can you work with our existing team?',
      answer:
        'Absolutely. We frequently integrate with in-house teams, whether that means augmenting capacity, providing specialized expertise, or leading specific workstreams.',
    },
    {
      question: 'What industries do you serve?',
      answer:
        'We work across industries—from product companies (e.g. Noorana) to professional services and marketing sites (e.g. anareisdorf.com). We evaluate each opportunity based on technical fit and whether we can deliver real outcomes.',
    },
  ],
  
  about: {
    mission:
      'We exist to help ambitious companies build software that drives real business outcomes—not just code that checks boxes.',
    story:
      'PiCode Solutions focuses on turning ideas and early-stage products into commercial-ready software. We\'ve taken a basic web app and grown it into a production application (Noorana, ongoing since 2023), and delivered a polished WordPress presence for a health writer. We work in the Microsoft stack and modern web—Azure, .NET, React, Next.js—with precision and partnership.',
    values: [
      {
        title: 'Precision Over Speed',
        description:
          'We take the time to understand your problem deeply before writing a single line of code.',
      },
      {
        title: 'Clarity in Complexity',
        description:
          'We translate technical complexity into clear communication and well-architected solutions.',
      },
      {
        title: 'Partnership, Not Transactions',
        description:
          'We measure success by your outcomes, not our invoices. Long-term relationships are the goal.',
      },
    ],
  },
} as const;

export type Site = typeof site;
export type Service = (typeof site.services)[number];
export type CaseStudy = (typeof site.caseStudies)[number];
export type Testimonial = (typeof site.testimonials)[number];
export type FAQ = (typeof site.faqs)[number];
