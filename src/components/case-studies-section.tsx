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
    <Link href={`/work/${study.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader className="pb-4">
          <Badge variant="secondary" className="mb-2 w-fit">
            {study.category}
          </Badge>
          <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">{study.title}</CardTitle>
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
                className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary"
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

          <p className="mt-4 flex items-center text-sm font-medium text-primary">
            Read case study
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export function CaseStudiesSection() {
  return (
    <Section className="bg-card/30">
      <SectionHeader>
        <SectionTitle>Selected Work</SectionTitle>
        <SectionDescription>
          Real projects we&apos;ve built and delivered—from evolving a product to commercial-ready to launching a polished marketing site.
        </SectionDescription>
      </SectionHeader>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {site.caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" asChild>
          <Link href="/work">
            View All Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
