'use client';

import * as React from 'react';
import { PopupButton } from 'react-calendly';

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
}

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/kim-c89v/picode-consultation';

export function CalendlyButton({
  url = CALENDLY_URL,
  text = 'Schedule a Consultation',
  className,
}: CalendlyButtonProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 ${className || ''}`}
      >
        {text}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>
    );
  }

  return (
    <PopupButton
      url={url}
      rootElement={document.body}
      text={text}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 ${className || ''}`}
      pageSettings={{
        backgroundColor: '0a0a0b',
        textColor: 'ffffff',
        primaryColor: '3b82f6',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
      }}
    />
  );
}
