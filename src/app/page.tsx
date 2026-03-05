import { Hero } from '@/components/hero';
import { ServicesSection } from '@/components/services-section';
import { ProcessSection } from '@/components/process-section';
import { CaseStudiesSection } from '@/components/case-studies-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FAQSection } from '@/components/faq-section';
import { CTABanner } from '@/components/cta-banner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
