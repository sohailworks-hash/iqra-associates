import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2, User, Mail, Phone, MessageSquare } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success';

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate async submission (no backend wired for this demo form)
    setTimeout(() => setStatus('success'), 1100);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-brand-100 bg-brand-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-lg font-bold text-ink-950">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          Your message has been received. Our team will get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary mt-6 !py-2.5 text-xs"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8 ${compact ? '' : 'sm:p-8'}`}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field icon={User} label="Full Name" name="name" placeholder="Your name" required />
        <Field icon={Phone} label="Phone" name="phone" type="tel" placeholder="+91 ..." required />
      </div>
      <div className="mt-4">
        <Field icon={Mail} label="Email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
          Service Interested In
        </label>
        <select
          name="service"
          className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          defaultValue=""
        >
          <option value="" disabled>Select a service</option>
          <option>GST Filing</option>
          <option>Income Tax Return</option>
          <option>Tally Bookkeeping</option>
          <option>Business Registration</option>
          <option>Other / General Enquiry</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
          Message
        </label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-ink-400" />
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Tell us a little about what you need..."
            className="w-full resize-none rounded-xl border border-ink-200 bg-white py-3 pl-10 pr-4 text-sm text-ink-800 outline-none transition-colors placeholder:text-ink-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
      </div>
      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-5 w-full">
        {status === 'submitting' ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
        ) : (
          <>Send Message <Send className="h-4 w-4" /></>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-ink-400">
        We typically respond within one business day.
      </p>
    </form>
  );
}

function Field({
  icon: Icon,
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-10 pr-4 text-sm text-ink-800 outline-none transition-colors placeholder:text-ink-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
    </div>
  );
}
