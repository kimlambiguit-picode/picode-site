import type { Metadata } from 'next';
import { Globe, Cloud, Building2, Workflow, LucideIcon, Check } from 'lucide-react';
import { site, Service } from '@/lib/site';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from '@/components/section';
import { CTABanner } from '@/components/cta-banner';

// Collect unique technologies from all case studies
const technologies = Array.from(
  new Set(site.caseStudies.flatMap((study) => study.stack))
);

export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom software development services including web applications, cloud solutions, enterprise software, and API development.',
};

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Cloud,
  Building2,
  Workflow,
};

function ServiceDetail({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <div id={service.id} className="scroll-mt-24">
      <Card className="overflow-hidden">
        <CardHeader className="border-b border-border bg-card">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            What&apos;s Included
          </h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Section className="section-lg">
        <SectionHeader>
          <SectionTitle>Our Services</SectionTitle>
          <SectionDescription>
            End-to-end software development for companies that need reliability,
            scalability, and technical depth.
          </SectionDescription>
        </SectionHeader>

        <div className="mt-16 space-y-8">
          {site.services.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Technologies We Use</SectionTitle>
          <SectionDescription>
            The tools and frameworks we&apos;ve used to deliver real projects for our clients.
          </SectionDescription>
        </SectionHeader>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Have a project in mind?"
        description="Let's discuss how we can help you build the right solution."
      />
    </>
  );
}
