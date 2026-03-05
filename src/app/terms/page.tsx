import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PiCode Solutions terms of service and conditions of use.',
};

export default function TermsPage() {
  return (
    <Section className="section-lg">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: March 1, 2024
        </p>

        <div className="prose prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground max-w-none mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold">1. Agreement to Terms</h2>
            <p className="mt-4 text-muted-foreground">
              By accessing or using the services provided by {site.name}, you
              agree to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Services</h2>
            <p className="mt-4 text-muted-foreground">
              {site.name} provides custom software development, web application
              development, cloud solutions, and related consulting services. The
              specific services, deliverables, and terms will be defined in
              individual project agreements or statements of work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Client Responsibilities</h2>
            <p className="mt-4 text-muted-foreground">
              Clients agree to provide timely feedback, accurate information, and
              necessary access to systems or resources required to perform the
              services. Delays caused by client non-responsiveness may impact
              project timelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
            <p className="mt-4 text-muted-foreground">
              Unless otherwise specified in a project agreement, upon full payment,
              clients receive ownership of custom code developed specifically for
              their project. We retain rights to pre-existing code, frameworks,
              and general methodologies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Payment Terms</h2>
            <p className="mt-4 text-muted-foreground">
              Payment terms, including rates, schedules, and methods, will be
              specified in individual project agreements. Late payments may incur
              additional fees and may result in suspension of services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Confidentiality</h2>
            <p className="mt-4 text-muted-foreground">
              Both parties agree to maintain confidentiality of proprietary
              information shared during the engagement. This obligation survives
              the termination of the business relationship.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
            <p className="mt-4 text-muted-foreground">
              To the maximum extent permitted by law, {site.name} shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Termination</h2>
            <p className="mt-4 text-muted-foreground">
              Either party may terminate services as specified in the project
              agreement. Upon termination, clients remain responsible for payment
              of all work completed up to the termination date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
            <p className="mt-4 text-muted-foreground">
              We reserve the right to modify these terms at any time. Continued
              use of our services after changes constitutes acceptance of the
              modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">10. Contact</h2>
            <p className="mt-4 text-muted-foreground">
              For questions about these Terms of Service, please contact us at{' '}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-primary hover:underline"
              >
                {site.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
