import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/section';
import { CTABanner } from '@/components/cta-banner';

interface Props {
  params: { slug: string };
}

// Blog post data - would come from MDX in production
const posts: Record<
  string,
  {
    title: string;
    description: string;
    date: string;
    category: string;
    readTime: string;
    content: string;
  }
> = {
  'building-scalable-azure-architectures': {
    title: 'Building Scalable Architectures on Azure',
    description:
      'A practical guide to designing cloud-native applications that scale efficiently and cost-effectively.',
    date: '2024-03-15',
    category: 'Cloud',
    readTime: '8 min read',
    content: `
## Introduction

Designing for scale on Azure requires a thoughtful approach to architecture from day one. In this post, we'll share patterns we've refined across dozens of enterprise deployments.

## Key Principles

### 1. Design for Failure

Every component will fail eventually. Build redundancy into your architecture:

- Use Azure Availability Zones for regional redundancy
- Implement circuit breakers for external dependencies
- Design idempotent operations for retry scenarios

### 2. Scale Horizontally

Vertical scaling hits limits quickly. Design services that scale out:

- Stateless application tiers
- Distributed caching with Azure Redis
- Event-driven architectures with Azure Service Bus

### 3. Optimize for Cost

Cloud spend can spiral without governance:

- Right-size VMs using Azure Advisor recommendations
- Implement auto-scaling policies
- Use reserved instances for predictable workloads

## Architecture Patterns

### The Event-Driven Pattern

For systems with variable load, event-driven architectures provide natural elasticity. Azure Functions combined with Service Bus queues can handle traffic spikes without over-provisioning.

### The CQRS Pattern

For read-heavy applications, separating command and query responsibilities allows independent scaling. Azure Cosmos DB's change feed makes this pattern particularly elegant.

## Conclusion

Scalability isn't an afterthought—it's a design decision. The patterns above have served us well across financial services, healthcare, and SaaS platforms. The key is choosing the right patterns for your specific requirements.
    `,
  },
  'nextjs-app-router-best-practices': {
    title: 'Next.js App Router: Production Best Practices',
    description:
      'Lessons learned from deploying Next.js 14 applications at scale.',
    date: '2024-03-08',
    category: 'Development',
    readTime: '6 min read',
    content: `
## Introduction

After deploying several Next.js 14 applications to production, we've compiled our lessons learned into this guide.

## Server Components by Default

The App Router makes Server Components the default—embrace this:

- Fetch data directly in components
- Reduce client-side JavaScript
- Leverage streaming for better perceived performance

## Caching Strategies

Next.js 14's caching is powerful but requires understanding:

### Request Memoization

Within a single render, identical fetch calls are automatically deduplicated.

### Data Cache

Persistent cache for fetch results. Use \`revalidate\` to control freshness.

### Full Route Cache

Pre-rendered routes are cached at build time. Dynamic segments opt out automatically.

## Performance Optimizations

### Image Optimization

Always use \`next/image\` with appropriate sizing:

- Define explicit width and height
- Use responsive sizes for different viewports
- Leverage blur placeholders

### Bundle Size

Monitor your bundle with \`@next/bundle-analyzer\`:

- Identify large dependencies
- Use dynamic imports for heavy components
- Prefer smaller alternatives when possible

## Deployment Considerations

### Edge Runtime

Consider Edge Runtime for latency-sensitive routes. Works well for:

- Personalization
- A/B testing
- Geolocation-based content

### Vercel vs. Self-Hosted

Vercel provides the smoothest experience, but self-hosting on Azure works well with Docker deployments.

## Conclusion

The App Router represents a paradigm shift in React development. Embrace Server Components, understand the caching layers, and monitor performance continuously.
    `,
  },
  'api-design-lessons-enterprise': {
    title: 'API Design Lessons from Enterprise Projects',
    description:
      "Key patterns and anti-patterns we've encountered.",
    date: '2024-02-28',
    category: 'Architecture',
    readTime: '10 min read',
    content: `
## Introduction

After building APIs for organizations of all sizes, certain patterns emerge repeatedly. Here are the lessons we've learned.

## Versioning Done Right

API versioning is inevitable. Plan for it:

- Use URL versioning (\`/v1/\`, \`/v2/\`) for simplicity
- Maintain backwards compatibility within major versions
- Document deprecation timelines clearly

## Error Handling

Consistent error responses save debugging time:

### Standard Format

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": [
      { "field": "email", "message": "Invalid format" }
    ]
  }
}
\`\`\`

### HTTP Status Codes

Use them correctly:

- 400 for client errors
- 401 for authentication issues
- 403 for authorization issues
- 404 for not found
- 500 for server errors

## Rate Limiting

Protect your API from abuse:

- Implement per-client limits
- Return \`429 Too Many Requests\` with \`Retry-After\` header
- Consider tiered limits for different client types

## Documentation

Good documentation is a competitive advantage:

- Use OpenAPI/Swagger specifications
- Provide working examples
- Include authentication details
- Document rate limits and quotas

## Security Considerations

### Authentication

- Use OAuth 2.0 / OpenID Connect
- Implement proper token validation
- Support refresh tokens for long sessions

### Authorization

- Implement scope-based access control
- Validate permissions on every request
- Log access attempts for audit

## Conclusion

Well-designed APIs are the foundation of modern software. Invest in getting the fundamentals right, and your integrations will be smoother for years to come.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug];

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section className="section-lg">
        <div className="mx-auto max-w-3xl">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Article content */}
          <article className="prose prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-card prose-pre:border prose-pre:border-border max-w-none mt-10">
            {post.content.split('\n').map((paragraph, index) =>
              paragraph.startsWith('## ') ? (
                <h2 key={index}>{paragraph.replace('## ', '')}</h2>
              ) : paragraph.startsWith('### ') ? (
                <h3 key={index}>{paragraph.replace('### ', '')}</h3>
              ) : paragraph.startsWith('- ') ? (
                <ul key={index}>
                  <li>{paragraph.replace('- ', '')}</li>
                </ul>
              ) : paragraph.trim() ? (
                <p key={index}>{paragraph}</p>
              ) : null
            )}
          </article>
        </div>
      </Section>

      <CTABanner
        title="Need help with your architecture?"
        description="We'd love to discuss your technical challenges."
      />
    </>
  );
}
