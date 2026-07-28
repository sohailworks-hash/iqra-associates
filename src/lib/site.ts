import {
  Calculator,
  FileText,
  BookOpen,
  Building2,
  ShieldCheck,
  TrendingUp,
  Receipt,
  Users,
  Clock,
  type LucideIcon,
} from 'lucide-react';

export const SITE = {
  name: 'IQRA ASSOCIATES',
  tagline: 'Smart Accounting & GST Solutions',
  phone: '+91 98250 12345',
  phoneHref: 'tel:+919825012345',
  whatsapp: '919825012345',
  email: 'contact@iqraassociates.in',
  address: 'IQRA ASSOCIATES, 2nd Floor, Commerce Plaza, C.G. Road, Navrangpura, Ahmedabad, Gujarat 380009',
  mapQuery: 'C.G. Road, Navrangpura, Ahmedabad, Gujarat 380009',
  hours: 'Mon–Sat · 10:00 AM – 7:00 PM',
  founded: 2014,
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export type ServiceSlug =
  | 'gst-filing'
  | 'income-tax-return'
  | 'tally-bookkeeping'
  | 'business-registration';

export interface ServiceItem {
  slug: ServiceSlug;
  title: string;
  short: string;
  icon: LucideIcon;
  description: string;
  outcomes: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'gst-filing',
    title: 'GST Filing',
    short: 'Monthly, quarterly & annual GST returns filed accurately and on time.',
    icon: Receipt,
    description:
      'End-to-end GST compliance for proprietors, partnerships and private limited companies — from return preparation and reconciliation to refund claims and departmental responses.',
    outcomes: [
      'GSTR-1, GSTR-3B & GSTR-9 filed before every deadline',
      'Input tax credit reconciliation with GSTR-2B',
      'Timely e-invoice and e-way bill compliance',
      'GST notice and demand-order responses handled',
      'Refund applications for exports and inverted duty',
    ],
    process: [
      { step: 'Data Collection', detail: 'You share sales, purchase and ITC data securely each cycle.' },
      { step: 'Reconciliation', detail: 'We reconcile with books and GSTR-2B to flag mismatches early.' },
      { step: 'Return Preparation', detail: 'Returns are prepared and reviewed by a senior consultant.' },
      { step: 'Filing & Confirmation', detail: 'We file on the portal and share the acknowledgement.' },
    ],
    faqs: [
      { q: 'What is the GST return filing due date?', a: 'GSTR-1 and GSTR-3B are typically due on the 11th and 20th of the following month. Annual returns (GSTR-9) are due by 31st December of the next financial year.' },
      { q: 'What happens if I miss a GST filing deadline?', a: 'Late filing attracts a late fee of ₹50/day (₹20/day for nil return) plus 18% p.a. interest on unpaid tax. We track every deadline so you never miss one.' },
      { q: 'Can you take over my GST compliance mid-year?', a: 'Yes. We reconcile prior periods, verify ITC carry-forward, and ensure a clean transition with no disruption to your filings.' },
    ],
  },
  {
    slug: 'income-tax-return',
    title: 'Income Tax Return',
    short: 'ITR filing for individuals, businesses and companies with tax planning.',
    icon: FileText,
    description:
      'Accurate income tax return filing backed by proactive tax planning — maximising legitimate deductions, computing advance tax, and handling scrutiny notices with confidence.',
    outcomes: [
      'ITR-1 to ITR-6 prepared and e-filed correctly',
      'Tax deduction optimisation under 80C, 80D & more',
      'Advance tax and self-assessment tax computation',
      'Capital gains reporting for shares and property',
      'Income tax notice and rectification support',
    ],
    process: [
      { step: 'Document Review', detail: 'You share Form 16, AIS, and investment proofs securely.' },
      { step: 'Tax Computation', detail: 'We compute taxable income and apply every eligible deduction.' },
      { step: 'Return Drafting', detail: 'The correct ITR form is prepared and reviewed with you.' },
      { step: 'E-Filing', detail: 'We e-file and share the ITR-V acknowledgement promptly.' },
    ],
    faqs: [
      { q: 'Which ITR form should I file?', a: 'Salaried individuals use ITR-1, those with capital gains or multiple house property use ITR-2, business owners use ITR-3, and companies use ITR-6. We select the right form for you.' },
      { q: 'What is the last date to file my income tax return?', a: 'For individuals and non-audit cases, the usual due date is 31st July. For audit cases and companies it is 31st October. We track due dates and send timely reminders.' },
      { q: 'Do you help with income tax notices?', a: 'Yes. We handle scrutiny notices (143(2), 142(1)), rectification requests, and appeals before the CIT(A) with full documentation support.' },
    ],
  },
  {
    slug: 'tally-bookkeeping',
    title: 'Tally Bookkeeping',
    short: 'Complete Tally setup, data entry, and bookkeeping on a monthly retainer.',
    icon: BookOpen,
    description:
      'Professional Tally bookkeeping that keeps your books audit-ready — from initial setup and GST configuration to monthly entries, bank reconciliation, and MIS reporting.',
    outcomes: [
      'Tally Prime setup with GST and e-invoice configured',
      'Day-to-day vouchers, sales and purchase entries',
      'Monthly bank and ledger reconciliation',
      'GST-ready books that match filed returns',
      'Custom MIS reports for cash flow and receivables',
    ],
    process: [
      { step: 'Setup & Migration', detail: 'We set up Tally Prime and migrate your existing data cleanly.' },
      { step: 'Monthly Bookkeeping', detail: 'Vouchers, sales and purchase entries are recorded regularly.' },
      { step: 'Reconciliation', detail: 'Bank, GST and ledger reconciliation closes every month.' },
      { step: 'Reporting', detail: 'You receive MIS reports — P&L, balance sheet, receivables.' },
    ],
    faqs: [
      { q: 'Do you work on our Tally or your own?', a: 'Either. We can maintain books on your Tally installation, or host Tally Prime on a secure server and share reports with you.' },
      { q: 'How often do you update the books?', a: 'Most clients choose monthly bookkeeping. We also offer weekly cycles for high-volume businesses to keep data current.' },
      { q: 'Can you fix messy or backdated books?', a: 'Yes. We specialise in cleaning up backdated entries, reconciling old bank statements, and bringing books up to GST-ready standards.' },
    ],
  },
  {
    slug: 'business-registration',
    title: 'Business Registration',
    short: 'Company, LLP, GST & trademark registrations done right the first time.',
    icon: Building2,
    description:
      'From choosing the right structure to filing with MCA and GST portals — we make business registration fast, compliant and stress-free for founders across Gujarat.',
    outcomes: [
      'Private Limited Company & LLP incorporation',
      'GST and Professional Tax registration',
      'Trademark application and follow-up',
      'MSME / Udyam and Startup India registration',
      'PAN, TAN and statutory registrations',
    ],
    process: [
      { step: 'Structure Advisory', detail: 'We advise the right structure — proprietor, LLP or company.' },
      { step: 'Document Drafting', detail: 'We prepare MoA, AoA, partnership deeds and applications.' },
      { step: 'MCA Filing', detail: 'Incorporation forms are filed with the Ministry of Corporate Affairs.' },
      { step: 'Tax Registrations', detail: 'We complete PAN, TAN, GST and other registrations.' },
    ],
    faqs: [
      { q: 'How long does company incorporation take?', a: 'A private limited company is typically incorporated within 7–12 working days once all documents and DSCs are in place.' },
      { q: 'Which business structure should I choose?', a: 'It depends on liability, taxation and funding needs. We advise proprietors for simplicity, LLP for partnerships, and private limited for startups seeking investment.' },
      { q: 'Is GST registration mandatory for a new business?', a: 'GST registration is mandatory once turnover crosses ₹40 lakh (₹20 lakh for services). Some businesses must register regardless of turnover — we confirm this for you.' },
    ],
  },
];

export const VALUE_PROPS = [
  { icon: ShieldCheck, title: 'Compliance You Can Trust', text: 'Every filing is reviewed by a senior consultant before submission.' },
  { icon: Clock, title: 'Always On Time', text: 'We track every statutory deadline so you never pay a late fee.' },
  { icon: TrendingUp, title: 'Proactive Tax Planning', text: 'We plan through the year to legally minimise your tax outgo.' },
  { icon: Users, title: 'Dedicated Advisor', text: 'A single point of contact who understands your business.' },
];

export const STATS = [
  { value: '10+', label: 'Years of Practice' },
  { value: '850+', label: 'Returns Filed' },
  { value: '320+', label: 'Businesses Served' },
  { value: '99.9%', label: 'On-Time Filing' },
];

export const TESTIMONIALS = [
  {
    name: 'Rahul Mehta',
    role: 'Director, Mehta Traders Pvt. Ltd.',
    quote:
      'IQRA ASSOCIATES took over our GST and Tally compliance and the difference is night and day. Filings are always on time and the books finally match the returns.',
    rating: 5,
  },
  {
    name: 'Priya Shah',
    role: 'Founder, Shah Boutique',
    quote:
      'They handled my income tax return and found deductions my previous consultant missed. Professional, responsive and genuinely helpful.',
    rating: 5,
  },
  {
    name: 'Imran Patel',
    role: 'Partner, Crescent Exports',
    quote:
      'From GST refunds to export documentation, the team handles everything end-to-end. I no longer worry about compliance at all.',
    rating: 5,
  },
  {
    name: 'Sneha Desai',
    role: 'Proprietor, Desai Consulting',
    quote:
      'They registered my proprietorship and got my GST number within days. Clear communication and fair pricing throughout.',
    rating: 5,
  },
  {
    name: 'Ketan Joshi',
    role: 'MD, Joshi Infotech LLP',
    quote:
      'Their Tally bookkeeping keeps our books audit-ready every month. The MIS reports have genuinely improved our cash flow decisions.',
    rating: 5,
  },
  {
    name: 'Farhana Ansari',
    role: 'Owner, Elegant Interiors',
    quote:
      'I trust IQRA ASSOCIATES with all my tax work. They explain everything in plain language and never miss a deadline.',
    rating: 5,
  },
];

export const FAQS = [
  {
    q: 'What services does IQRA ASSOCIATES offer?',
    a: 'We provide GST filing, income tax return filing, Tally bookkeeping, and business registration services for individuals, proprietors, partnerships, LLPs and companies across Ahmedabad and Gujarat.',
  },
  {
    q: 'Where is IQRA ASSOCIATES located?',
    a: 'Our office is on C.G. Road, Navrangpura, Ahmedabad. We serve clients across Gujarat and also work remotely with businesses throughout India.',
  },
  {
    q: 'How do I get started with your services?',
    a: 'Simply call or WhatsApp us using the buttons on this page. We will schedule a free consultation, understand your requirements, and share a clear engagement proposal.',
  },
  {
    q: 'Do you offer monthly compliance packages?',
    a: 'Yes. Most clients choose a monthly retainer that covers GST returns, Tally bookkeeping, and ongoing advisory. Packages are tailored to your transaction volume and business structure.',
  },
  {
    q: 'Can you handle notices from the GST or Income Tax department?',
    a: 'Absolutely. We draft responses to show-cause notices, handle scrutiny assessments, file rectifications, and represent clients before appellate authorities when needed.',
  },
  {
    q: 'Are my documents and financial data kept confidential?',
    a: 'Yes. We follow strict confidentiality protocols and use secure, access-controlled systems. Your data is never shared with any third party.',
  },
];

export const NAV_LINKS: { label: string; path: string }[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'GST Filing', path: '/services/gst-filing' },
  { label: 'Income Tax Return', path: '/services/income-tax-return' },
  { label: 'Tally Bookkeeping', path: '/services/tally-bookkeeping' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICE_ICONS = { Calculator, FileText, BookOpen, Building2, ShieldCheck, TrendingUp, Receipt, Users, Clock };
