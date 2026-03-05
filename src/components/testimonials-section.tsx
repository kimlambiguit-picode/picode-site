import { Quote } from 'lucide-react';
import { site, Testimonial } from '@/lib/site';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from '@/components/section';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative rounded-lg border border-border bg-card p-6">
      <Quote className="absolute -top-3 left-6 h-6 w-6 text-primary/20" />
      <blockquote className="text-foreground leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium">
          {testimonial.author
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <div className="text-sm font-medium">{testimonial.author}</div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>What Clients Say</SectionTitle>
        <SectionDescription>
          Don&apos;t take our word for it. Here&apos;s what our partners have to say.
        </SectionDescription>
      </SectionHeader>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {site.testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
}
