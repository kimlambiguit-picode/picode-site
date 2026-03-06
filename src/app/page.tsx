import { Hero } from '@/components/hero';
import { ServicesSection } from '@/components/services-section';
import { ProcessSection } from '@/components/process-section';
import { CaseStudiesSection } from '@/components/case-studies-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FAQSection } from '@/components/faq-section';
import { CTABanner } from '@/components/cta-banner';
import { ScrollAnimate } from '@/components/scroll-animate';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollAnimate>
        <ServicesSection />
      </ScrollAnimate>
      <ScrollAnimate>
        <ProcessSection />
      </ScrollAnimate>
      <ScrollAnimate>
        <CaseStudiesSection />
      </ScrollAnimate>
      <ScrollAnimate>
        <TestimonialsSection />
      </ScrollAnimate>
      <ScrollAnimate>
        <FAQSection />
      </ScrollAnimate>
      <ScrollAnimate>
        <CTABanner />
      </ScrollAnimate>
    </>
  );
}
