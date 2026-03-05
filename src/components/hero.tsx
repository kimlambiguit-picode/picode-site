import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(221,83%,53%,0.15),transparent)]" />

      <div className="container py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
            Azure & .NET Experts
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {site.tagline.split('.')[0]}.
            <br />
            <span className="text-muted-foreground">
              {site.tagline.split('.')[1]?.trim() || 'Built with precision.'}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {site.description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/work">View Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
