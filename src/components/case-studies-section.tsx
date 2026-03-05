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

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Card className="group overflow-hidden transition-colors hover:border-primary/50">
      <CardHeader className="pb-4">
        <Badge variant="secondary" className="mb-2 w-fit">
          {study.category}
        </Badge>
        <CardTitle className="text-xl leading-snug">{study.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{study.client}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {study.challenge}
        </p>

        {/* Outcomes */}
        <div className="mt-4 flex flex-wrap gap-2">
          {study.outcomes.slice(0, 2).map((outcome) => (
            <span
              key={outcome}
              className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground"
            >
              {outcome}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.stack.slice(0, 4).map((tech, index, arr) => (
            <span
              key={tech}
              className="text-xs text-muted-foreground"
            >
              {tech}
              {index < arr.length - 1 && (
                <span className="ml-1.5">·</span>
              )}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function CaseStudiesSection() {
  return (
    <Section className="bg-card/30">
      <SectionHeader>
        <SectionTitle>Selected Work</SectionTitle>
        <SectionDescription>
          Real projects with measurable outcomes. Here&apos;s what we&apos;ve built for
          our clients.
        </SectionDescription>
      </SectionHeader>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {site.caseStudies.slice(0, 4).map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" asChild>
          <Link href="/work">
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
