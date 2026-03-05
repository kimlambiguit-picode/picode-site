import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTABanner({
  title = 'Ready to build something great?',
  description = "Let's discuss your project and see how we can help you achieve your goals.",
  primaryCTA = { text: 'Schedule a Consultation', href: '/contact' },
  secondaryCTA = { text: 'Request a Quote', href: '/contact?type=quote' },
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden border-t border-border">
      {/* Subtle gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,hsl(221,83%,53%,0.1),transparent)]" />

      <div className="container py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
