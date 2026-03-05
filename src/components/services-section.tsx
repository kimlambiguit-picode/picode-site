import { Globe, Cloud, Building2, Workflow, LucideIcon } from 'lucide-react';
import { site, Service } from '@/lib/site';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from '@/components/section';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Cloud,
  Building2,
  Workflow,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <Card className="group relative overflow-hidden transition-colors hover:border-primary/50">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{service.description}</p>
        <ul className="mt-4 space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function ServicesSection() {
  return (
    <Section className="bg-card/30">
      <SectionHeader>
        <SectionTitle>What We Build</SectionTitle>
        <SectionDescription>
          End-to-end software development services for companies that need
          reliability, scalability, and technical depth.
        </SectionDescription>
      </SectionHeader>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {site.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
