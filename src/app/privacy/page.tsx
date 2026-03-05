import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PiCode Solutions privacy policy and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <Section className="section-lg">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: March 1, 2024
        </p>

        <div className="prose prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground max-w-none mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="mt-4 text-muted-foreground">
              {site.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or engage
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Information We Collect</h2>
            <p className="mt-4 text-muted-foreground">
              We may collect information about you in various ways, including:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Personal Data:</strong> Name,
                email address, phone number, company name, and other contact
                information you provide when filling out forms or contacting us.
              </li>
              <li>
                <strong className="text-foreground">Usage Data:</strong> Information
                about how you access and use our website, including your IP
                address, browser type, pages visited, and time spent on pages.
              </li>
              <li>
                <strong className="text-foreground">Cookies:</strong> We use cookies
                and similar tracking technologies to enhance your experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
            <p className="mt-4 text-muted-foreground">
              We may use the information we collect for purposes including:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Responding to your inquiries and providing services</li>
              <li>Sending you relevant information about our services</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Information Sharing</h2>
            <p className="mt-4 text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              necessary to provide our services or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Data Security</h2>
            <p className="mt-4 text-muted-foreground">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Your Rights</h2>
            <p className="mt-4 text-muted-foreground">
              Depending on your location, you may have rights regarding your
              personal data, including the right to access, correct, delete, or
              restrict processing of your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Contact Us</h2>
            <p className="mt-4 text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us
              at{' '}
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
