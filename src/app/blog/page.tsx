import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from '@/components/section';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on software development, cloud architecture, and technology best practices.',
};

// Blog post metadata - in a real app this would come from MDX files
const posts = [
  {
    slug: 'building-scalable-azure-architectures',
    title: 'Building Scalable Architectures on Azure',
    description:
      'A practical guide to designing cloud-native applications that scale efficiently and cost-effectively.',
    date: '2024-03-15',
    category: 'Cloud',
    readTime: '8 min read',
  },
  {
    slug: 'nextjs-app-router-best-practices',
    title: 'Next.js App Router: Production Best Practices',
    description:
      'Lessons learned from deploying Next.js 14 applications at scale, including caching strategies and performance optimization.',
    date: '2024-03-08',
    category: 'Development',
    readTime: '6 min read',
  },
  {
    slug: 'api-design-lessons-enterprise',
    title: 'API Design Lessons from Enterprise Projects',
    description:
      'Key patterns and anti-patterns we\'ve encountered while building APIs for Fortune 500 clients.',
    date: '2024-02-28',
    category: 'Architecture',
    readTime: '10 min read',
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <Section className="section-lg">
      <SectionHeader>
        <SectionTitle>Blog</SectionTitle>
        <SectionDescription>
          Insights on software development, cloud architecture, and technology
          best practices.
        </SectionDescription>
      </SectionHeader>

      <div className="mx-auto mt-16 max-w-3xl space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <Card className="transition-all hover:border-primary/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Read Article
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
