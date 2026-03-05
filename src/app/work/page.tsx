import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { site, CaseStudy } from '@/lib/site';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from '@/components/section';
import { CTABanner } from '@/components/cta-banner';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies showcasing our software development projects and client success stories.',
};

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        {/* Placeholder for thumbnail */}
        <div className="aspect-video bg-secondary/50" />

        <CardHeader className="pb-3">
          <Badge variant="secondary" className="mb-2 w-fit">
            {study.category}
          </Badge>
          <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
            {study.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{study.client}</p>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {study.challenge}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.outcomes.map((outcome) => (
              <span
                key={outcome}
                className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary"
              >
                {outcome}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center text-sm font-medium text-primary">
            Read Case Study
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function WorkPage() {
  return (
    <>
      <Section className="section-lg">
        <SectionHeader>
          <SectionTitle>Our Work</SectionTitle>
          <SectionDescription>
            Real projects with measurable outcomes. Here are some of the
            solutions we&apos;ve built for our clients.
          </SectionDescription>
        </SectionHeader>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {site.caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </Section>

      <CTABanner
        title="Want results like these?"
        description="Let's discuss how we can help you achieve similar outcomes."
      />
    </>
  );
}
