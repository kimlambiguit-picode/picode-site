import { site } from '@/lib/site';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from '@/components/section';

export function ProcessSection() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>How We Work</SectionTitle>
        <SectionDescription>
          A proven process refined over 50+ successful engagements.
        </SectionDescription>
      </SectionHeader>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {site.process.map((item, index) => (
          <div key={item.step} className="relative">
            {/* Connector line */}
            {index < site.process.length - 1 && (
              <div className="absolute left-[2.25rem] top-14 hidden h-[calc(100%-3rem)] w-px bg-border lg:left-1/2 lg:top-10 lg:h-px lg:w-[calc(100%+2rem)] lg:block" />
            )}

            <div className="flex flex-col items-center text-center">
              {/* Step number */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background text-lg font-semibold text-primary">
                {item.step}
              </div>

              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
