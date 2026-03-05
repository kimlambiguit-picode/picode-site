import type { Metadata } from 'next';
import { site } from '@/lib/site';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABanner } from '@/components/cta-banner';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about PiCode Solutions, our mission, values, and the team behind enterprise-grade software development.',
};

export default function AboutPage() {
  return (
    <>
      <Section className="section-lg">
        <SectionHeader>
          <SectionTitle>About Us</SectionTitle>
          <SectionDescription>{site.about.mission}</SectionDescription>
        </SectionHeader>

        <div className="mx-auto mt-16 max-w-3xl">
          {/* Story */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {site.about.story}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 rounded-lg border border-border bg-card p-8 sm:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold">Our Values</h2>
            <div className="mt-8 grid gap-6">
              {site.about.values.map((value) => (
                <Card key={value.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Let's work together"
        description="We'd love to learn about your project and see if we're a good fit."
      />
    </>
  );
}
