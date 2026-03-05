'use client';

import * as React from 'react';
import { Calendar, FileText, Mail, MapPin, Phone, Send } from 'lucide-react';
import { site } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/section';
import { CalendlyButton } from '@/components/calendly-button';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Quote Request' }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <Section className="section-lg">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Send className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold">Quote Request Received</h1>
          <p className="mt-4 text-muted-foreground">
            Thank you for reaching out. We&apos;ll review your project details and get back to you with a quote within 1-2 business days.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section with Two CTAs */}
      <Section className="section">
        <SectionHeader>
          <SectionTitle>Get in Touch</SectionTitle>
          <SectionDescription>
            Ready to start your project? Choose how you&apos;d like to connect with us.
          </SectionDescription>
        </SectionHeader>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {/* Schedule Consultation Card */}
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <CardHeader className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-6 w-6" />
              </div>
              <CardTitle className="mt-4">Schedule a Consultation</CardTitle>
              <CardDescription>
                Book a free 30-minute call to discuss your project goals and see how we can help.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <CalendlyButton text="Book a Call" className="w-full" />
            </CardContent>
          </Card>

          {/* Request Quote Card */}
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-transparent" />
            <CardHeader className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                <FileText className="h-6 w-6" />
              </div>
              <CardTitle className="mt-4">Request a Quote</CardTitle>
              <CardDescription>
                Tell us about your project and we&apos;ll send you a detailed proposal.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <Button variant="outline" className="w-full" asChild>
                <a href="#quote-form">Get a Quote</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Info Section */}
      <Section className="border-t border-border">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold">Contact Information</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {site.contact.email}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`tel:${site.contact.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {site.contact.phone}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {site.contact.address.city}, {site.contact.address.state}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Quote Form Section */}
      <Section id="quote-form" className="border-t border-border section-lg">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Request a Quote</h2>
            <p className="mt-3 text-muted-foreground">
              Tell us about your project and we&apos;ll get back to you with a detailed proposal.
            </p>
          </div>

          <Card className="mt-10">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-md border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                        errors.name ? 'border-destructive' : 'border-input'
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-md border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                        errors.email ? 'border-destructive' : 'border-input'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full resize-none rounded-md border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                      errors.message ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
