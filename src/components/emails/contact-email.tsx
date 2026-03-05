import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  company?: string;
  type?: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  company,
  type,
  message,
}: ContactEmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px 20px',
        backgroundColor: '#f8fafc',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '32px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Header */}
        <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '24px', marginBottom: '24px' }}>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 600, color: '#0f172a' }}>
            New {type || 'Contact'} Request
          </h1>
          <p style={{ margin: '8px 0 0', fontSize: '14px', color: '#64748b' }}>
            Submitted via picode.com.au
          </p>
        </div>

        {/* Contact Details */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Contact Details
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', fontSize: '14px', color: '#64748b', width: '120px' }}>Name</td>
                <td style={{ padding: '8px 0', fontSize: '14px', color: '#0f172a', fontWeight: 500 }}>{name}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', fontSize: '14px', color: '#64748b' }}>Email</td>
                <td style={{ padding: '8px 0', fontSize: '14px', color: '#0f172a', fontWeight: 500 }}>
                  <a href={`mailto:${email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{email}</a>
                </td>
              </tr>
              {company && (
                <tr>
                  <td style={{ padding: '8px 0', fontSize: '14px', color: '#64748b' }}>Company</td>
                  <td style={{ padding: '8px 0', fontSize: '14px', color: '#0f172a', fontWeight: 500 }}>{company}</td>
                </tr>
              )}
              {type && (
                <tr>
                  <td style={{ padding: '8px 0', fontSize: '14px', color: '#64748b' }}>Request Type</td>
                  <td style={{ padding: '8px 0', fontSize: '14px', color: '#0f172a', fontWeight: 500 }}>{type}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Message */}
        <div>
          <h2 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Message
          </h2>
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '6px',
              padding: '16px',
              fontSize: '14px',
              color: '#334155',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
            }}
          >
            {message}
          </div>
        </div>

        {/* Reply Button */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <a
            href={`mailto:${email}?subject=Re: Your inquiry to PiCode`}
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 500,
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
            }}
          >
            Reply to {name}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>
          This email was sent from the contact form at picode.com.au
        </p>
      </div>
    </div>
  );
}
