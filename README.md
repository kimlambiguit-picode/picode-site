# PiCode Solutions Website

Premium marketing website for PiCode Solutions built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Blog**: MDX

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/        # Marketing pages group
│   ├── api/                # API routes
│   └── layout.tsx          # Root layout
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   └── ...                 # Feature components
├── lib/
│   ├── site.ts             # Site configuration (edit content here)
│   └── utils.ts            # Utility functions
└── content/
    └── blog/               # MDX blog posts
```

## Content Management

All site content is centralized in `src/lib/site.ts`. Edit this file to update:

- Company information
- Services
- Case studies
- Testimonials
- FAQs
- Contact details
- Social links

## Design System

- **Dark mode by default** with deep tech blue accent
- Consistent spacing using Tailwind's spacing scale
- Typography: Inter font with clear hierarchy
- Components follow shadcn/ui patterns

## Pages

1. **Home** - Premium agency landing page
2. **Services** - Detailed service offerings
3. **Work** - Case study showcase
4. **About** - Company story
5. **Blog** - MDX-powered articles
6. **Contact** - Contact form
7. **Legal** - Privacy Policy & Terms

## License

MIT
