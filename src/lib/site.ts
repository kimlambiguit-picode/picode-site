export const site = {
  name: 'PiCode Solutions',
  tagline: 'Enterprise-grade software. Built with precision.',
  description:
    'We design and build custom web applications and enterprise software using Azure, .NET, React, and Next.js. From complex integrations to scalable cloud architectures—delivered with precision.',
  url: 'https://picodesolutions.com',
  ogImage: '/og-image.png',
  
  contact: {
    email: 'hello@picodesolutions.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Innovation Drive',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      country: 'United States',
    },
  },
  
  socials: {
    linkedin: 'https://linkedin.com/company/picode-solutions',
    github: 'https://github.com/picode-solutions',
    twitter: 'https://twitter.com/picodesolutions',
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
      id: 'fintech-dashboard',
      title: 'Real-Time Trading Dashboard',
      client: 'QuantEdge Capital',
      category: 'Financial Services',
      thumbnail: '/work/fintech-thumb.jpg',
      challenge:
        'A quantitative trading firm needed a real-time dashboard to monitor portfolio positions, risk metrics, and market data across multiple asset classes.',
      solution:
        'We built a high-performance React dashboard with WebSocket integration, handling 10,000+ data points per second with sub-100ms latency.',
      stack: ['React', 'Next.js', 'Azure SignalR', 'SQL Server', 'Redis'],
      outcomes: [
        '60% faster decision-making',
        '99.99% uptime',
        '10,000+ events/second',
      ],
    },
    {
      id: 'healthcare-platform',
      title: 'Patient Management Platform',
      client: 'MedConnect Health',
      category: 'Healthcare',
      thumbnail: '/work/healthcare-thumb.jpg',
      challenge:
        'A healthcare network needed a HIPAA-compliant platform to manage patient records, appointments, and telehealth consultations across 50+ clinics.',
      solution:
        'We delivered a secure, Azure-hosted platform with role-based access, audit logging, and seamless EHR integration.',
      stack: ['.NET Core', 'Azure App Service', 'Azure SQL', 'React', 'Twilio'],
      outcomes: [
        '40% reduction in admin time',
        'HIPAA/SOC2 compliant',
        '50+ clinics onboarded',
      ],
    },
    {
      id: 'logistics-optimization',
      title: 'Fleet Optimization System',
      client: 'SwiftRoute Logistics',
      category: 'Logistics',
      thumbnail: '/work/logistics-thumb.jpg',
      challenge:
        'A logistics company needed to optimize routing for 500+ vehicles while accounting for real-time traffic, delivery windows, and driver schedules.',
      solution:
        'We built an intelligent routing engine using Azure Functions and machine learning models, with a driver mobile app and dispatch dashboard.',
      stack: ['Azure Functions', '.NET', 'Azure Maps', 'React Native', 'PostgreSQL'],
      outcomes: [
        '25% fuel cost reduction',
        '18% more deliveries/day',
        '500+ vehicles optimized',
      ],
    },
    {
      id: 'saas-platform',
      title: 'Multi-Tenant SaaS Platform',
      client: 'DataSync Pro',
      category: 'Technology',
      thumbnail: '/work/saas-thumb.jpg',
      challenge:
        'A startup needed to launch a B2B data integration platform supporting hundreds of tenants with isolated data, custom workflows, and usage-based billing.',
      solution:
        'We architected a multi-tenant platform on Azure with tenant isolation, a visual workflow builder, and Stripe integration for metered billing.',
      stack: ['Next.js', '.NET Core', 'Azure Cosmos DB', 'Stripe', 'Azure AD B2C'],
      outcomes: [
        '200+ enterprise customers',
        '$2M ARR in year one',
        '99.95% platform uptime',
      ],
    },
  ],
  
  testimonials: [
    {
      quote:
        'PiCode delivered exactly what we needed—on time and on budget. Their technical depth and communication made them feel like an extension of our team.',
      author: 'Sarah Chen',
      role: 'CTO',
      company: 'QuantEdge Capital',
    },
    {
      quote:
        'The platform they built has transformed how we operate. Patient satisfaction scores are up 35% since launch.',
      author: 'Dr. Michael Torres',
      role: 'Chief Medical Officer',
      company: 'MedConnect Health',
    },
    {
      quote:
        'We evaluated several agencies, but PiCode stood out with their Azure expertise and enterprise mindset. They genuinely understood our scale.',
      author: 'Jennifer Park',
      role: 'VP of Engineering',
      company: 'DataSync Pro',
    },
  ],
  
  stats: [
    { value: '50+', label: 'Projects Delivered' },
    { value: '99.9%', label: 'Uptime Average' },
    { value: '8+', label: 'Years Experience' },
    { value: '4.9/5', label: 'Client Rating' },
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
        'We have deep experience in financial services, healthcare, logistics, and B2B SaaS. That said, we evaluate every opportunity based on technical fit and alignment with our expertise.',
    },
  ],
  
  about: {
    mission:
      'We exist to help ambitious companies build software that drives real business outcomes—not just code that checks boxes.',
    story:
      'Founded in 2016, PiCode Solutions started with a simple thesis: enterprise-grade software shouldn\'t require enterprise-grade budgets or timelines. We\'ve since partnered with 50+ organizations, from funded startups to Fortune 500 companies, delivering solutions that scale.',
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
