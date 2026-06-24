export type NoticeCategory = 'Tender' | 'Procurement' | 'Announcement' | 'Construction Update' | 'Official Communication';

export interface Notice {
  id: number;
  category: NoticeCategory;
  title: string;
  date: string; // ISO format: YYYY-MM-DD
  ref: string;
  summary: string;
  hasDoc: boolean;
  urgent: boolean;
}

// Parse ISO date to Date object
const parseDate = (iso: string): Date => new Date(iso);

// Check if notice is within last N days from today
export const isWithinDays = (noticeDate: string, days: number): boolean => {
  const date = parseDate(noticeDate);
  const now = new Date();
  const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  return date >= cutoff;
};

// All notices - permanent archive for Public Notices page
export const allNotices: Notice[] = [
  {
    id: 1,
    category: 'Tender',
    title: 'Invitation to Tender — Residential Estate Phase II',
    date: '2026-06-10',
    ref: 'RBCC/TND/2026/003',
    summary: 'RBCC Engineering invites qualified contractors to submit tenders for MEP works at Residential Estate Phase II, Abuja.',
    hasDoc: true,
    urgent: false,
  },
  {
    id: 2,
    category: 'Procurement',
    title: 'Pre-Qualification Notice — Civil Works Subcontractors',
    date: '2026-06-05',
    ref: 'RBCC/PQ/2026/011',
    summary: 'Expressions of interest invited from qualified civil works subcontractors for pre-qualification.',
    hasDoc: true,
    urgent: false,
  },
  {
    id: 3,
    category: 'Announcement',
    title: 'RBCC Engineering Expands Operations to Kano State',
    date: '2026-06-01',
    ref: 'RBCC/ANN/2026/007',
    summary: 'Formal establishment of RBCC Engineering\'s second operational office in Kano State to serve Northern Nigeria.',
    hasDoc: false,
    urgent: false,
  },
  {
    id: 4,
    category: 'Construction Update',
    title: 'Project Progress Update — Katampe Residential Development',
    date: '2026-05-28',
    ref: 'RBCC/UPD/2026/015',
    summary: 'Structural works at Katampe Residential Development are at 65% completion. Roofing scheduled for Q3 2026.',
    hasDoc: false,
    urgent: false,
  },
  {
    id: 5,
    category: 'Tender',
    title: 'Request for Quotation — Building Materials Supply',
    date: '2026-05-20',
    ref: 'RBCC/RFQ/2026/018',
    summary: 'Competitive quotations solicited from approved suppliers for bulk supply of cement, reinforcement steel, and aggregate.',
    hasDoc: true,
    urgent: true,
  },
  {
    id: 6,
    category: 'Announcement',
    title: 'ISO Quality Management Certification Renewal',
    date: '2026-05-15',
    ref: 'RBCC/ANN/2026/005',
    summary: 'RBCC Engineering has successfully renewed ISO 9001:2015 Quality Management System certification.',
    hasDoc: false,
    urgent: false,
  },
  {
    id: 7,
    category: 'Official Communication',
    title: 'Board Statement — Company Growth Strategy 2026',
    date: '2026-05-01',
    ref: 'RBCC/COM/2026/002',
    summary: 'RBCC Engineering outlines strategic expansion plans for Northern and Central Nigeria operations.',
    hasDoc: true,
    urgent: false,
  },
  {
    id: 8,
    category: 'Procurement',
    title: 'Vendor Registration — Open Enrollment 2026',
    date: '2026-04-15',
    ref: 'RBCC/VR/2026/001',
    summary: 'RBCC Engineering is updating its approved vendor list. Interested suppliers and contractors are invited to register.',
    hasDoc: true,
    urgent: false,
  },
];

// Get notices visible on home page (within last 14 days)
export const getHomepageNotices = (maxDays: number = 14): Notice[] => {
  return allNotices
    .filter(n => isWithinDays(n.date, maxDays))
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
};

// Get all notices sorted by date (newest first)
export const getAllNoticesSorted = (): Notice[] => {
  return [...allNotices].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
};

// Format date for display
export const formatNoticeDate = (iso: string): string => {
  const d = parseDate(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
};

// Category display colors
export const categoryColors: Record<NoticeCategory, string> = {
  'Tender': 'bg-amber-50 text-amber-700 border-amber-200',
  'Announcement': 'bg-blue-50 text-blue-700 border-blue-200',
  'Construction Update': 'bg-green-50 text-green-700 border-green-200',
  'Procurement': 'bg-purple-50 text-purple-700 border-purple-200',
  'Official Communication': 'bg-slate-50 text-slate-700 border-slate-200',
};
