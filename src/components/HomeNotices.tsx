import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { Bell, Calendar, ArrowRight, Tag } from 'lucide-react';
import { getHomepageNotices, formatNoticeDate, categoryColors, type NoticeCategory } from '../data/notices';

export default function HomeNotices() {
  const ref = useReveal();
  const notices = getHomepageNotices(14); // Last 14 days only

  if (notices.length === 0) return null;

  return (
    <section className="py-12 md:py-14 bg-white border-t border-gray-100" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-7 reveal">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <Bell size={14} className="text-gold-500" />
              <span className="section-heading !mb-0">Latest Notices</span>
            </div>
            <p className="text-gray-500 text-sm">Recent announcements and opportunities from RBCC Engineering.</p>
          </div>
          <Link to="/notifications" className="btn-outline-blue self-end flex-shrink-0 !py-2.5 !px-5 !text-[10px]">
            View All Notices <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notices.slice(0, 3).map((notice) => (
            <div key={notice.id} className="reveal bg-gray-50 border border-gray-100 p-5 hover:border-gold-500/40 hover:shadow-md transition-all group">
              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-flex items-center gap-1 text-[9px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 border ${categoryColors[notice.category as NoticeCategory]}`}>
                  <Tag size={9} /> {notice.category}
                </span>
                {notice.urgent && (
                  <span className="text-[9px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 bg-red-50 text-red-600 border border-red-200">Urgent</span>
                )}
              </div>
              <h3 className="font-heading font-bold text-blue-900 text-sm mb-2 group-hover:text-gold-600 transition-colors leading-snug">{notice.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{notice.summary}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Calendar size={11} />
                  <span className="text-[11px]">{formatNoticeDate(notice.date)}</span>
                </div>
                <Link to="/notifications" className="flex items-center gap-1 text-gold-600 hover:text-gold-700 font-heading font-bold text-[10px] uppercase tracking-wide transition-colors">
                  Read More <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}