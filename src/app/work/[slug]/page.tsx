import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { site } from '@/lib/site';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { CTABanner } from '@/components/cta-banner';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return site.caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = site.caseStudies.find((s) => s.id === params.slug);

  if (!study) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: study.title,
    description: study.challenge,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = site.caseStudies.find((s) => s.id === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Section className="section-lg">
        <div className="mx-auto max-w-3xl">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Link>
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{study.category}</Badge>
            {study.ongoing && (
              <Badge variant="outline" className="border-primary/50 text-primary">
                Ongoing project
              </Badge>
            )}
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {study.title}
          </h1>

          <p className="mt-2 text-lg text-muted-foreground">{study.client}</p>

          {study.projectUrl && (
            <Button variant="outline" size="sm" className="mt-4" asChild>
              <a href={study.projectUrl} target="_blank" rel="noopener noreferrer">
                Visit live site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}

          {/* Outcomes */}
          <div className="mt-8 grid gap-4 rounded-lg border border-border bg-card p-6 sm:grid-cols-3">
            {study.outcomes.map((outcome) => (
              <div key={outcome} className="text-center">
                <div className="text-xl font-semibold text-primary">
                  {outcome}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold">The Challenge</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Our Solution</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Technology Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Ready to achieve similar results?"
        description="Let's discuss your project and see how we can help."
      />
    </>
  );
}
