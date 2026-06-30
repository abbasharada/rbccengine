import { useState } from 'react';
import { Bell, Search, Calendar, Tag, ChevronRight, Download } from 'lucide-react';
import { getAllNoticesSorted, formatNoticeDate, categoryColors, type Notice, type NoticeCategory } from '../data/notices';

const categories: NoticeCategory[] = ['Tender', 'Procurement', 'Announcement', 'Construction Update', 'Official Communication'];

type FilterCategory = NoticeCategory | 'All';
const allFilterCategories: FilterCategory[] = ['All', ...categories];

export default function Notifications() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [search, setSearch] = useState('');

  const notices = getAllNoticesSorted();

  const filtered = notices.filter((n: Notice) => {
    const matchCat = activeCategory === 'All' || n.category === activeCategory;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.summary.toLowerCase().includes(search.toLowerCase()) ||
      n.ref.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Page Banner */}
      <section className="bg-blue-950 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 font-heading font-semibold text-[10px] uppercase tracking-[0.2em]">Official Communications</span>
          </div>
          <h1 className="font-heading font-black text-white text-3xl md:text-4xl">
            Public Notifications
          </h1>
          <p className="text-white/60 text-sm mt-3 max-w-xl leading-relaxed">
            Official announcements, procurement notices, tender invitations and construction updates from RBCC Engineering.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 py-3">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 text-sm focus:outline-none focus:border-blue-900 transition-colors"
              />
            </div>
            {/* Category Tabs */}
            <div className="flex gap-1.5 overflow-x-auto pb-0.5 sm:pb-0">
              {allFilterCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-3 py-1.5 font-heading font-bold text-[10px] uppercase tracking-widest transition-colors border ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-gold-400 border-blue-600'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-blue-900 hover:text-blue-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Bell size={32} className="text-gray-300 mx-auto mb-3" />
              <p className="font-heading font-bold text-gray-500 text-sm">No notices found</p>
              <p className="text-gray-400 text-xs mt-1">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((notice: Notice) => (
                <div key={notice.id} className={`bg-white border ${notice.urgent ? 'border-amber-300' : 'border-gray-100'} p-5 hover:shadow-md transition-shadow`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1 text-[9px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 border ${categoryColors[notice.category]}`}>
                          <Tag size={9} /> {notice.category}
                        </span>
                        {notice.urgent && (
                          <span className="text-[9px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 bg-red-50 text-red-600 border border-red-200">
                            Urgent
                          </span>
                        )}
                        <span className="text-gray-400 text-[10px]">Ref: {notice.ref}</span>
                      </div>
                      <h3 className="font-heading font-bold text-blue-900 text-sm md:text-base mb-1.5 leading-snug">{notice.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{notice.summary}</p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Calendar size={12} />
                        <span className="text-[11px] whitespace-nowrap">{formatNoticeDate(notice.date)}</span>
                      </div>
                      <div className="flex gap-2">
                        {notice.hasDoc && (
                          <button className="flex items-center gap-1.5 text-blue-900 border border-blue-900/20 hover:bg-blue-600 hover:text-white px-3 py-1.5 text-[10px] font-heading font-bold uppercase tracking-wide transition-colors">
                            <Download size={11} /> PDF
                          </button>
                        )}
                        <button className="flex items-center gap-1 text-gold-600 hover:text-gold-700 font-heading font-bold text-[10px] uppercase tracking-wide transition-colors">
                          Details <ChevronRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer note */}
          <div className="mt-8 p-4 bg-blue-600/5 border border-blue-600/10 text-center">
            <p className="text-gray-500 text-xs">
              For official correspondence regarding any notice, contact{' '}
              <a href="mailto:Rbccengineering@gmail.com" className="text-blue-900 font-semibold hover:text-gold-600 transition-colors">
                Rbccengineering@gmail.com
              </a>{' '}
              or call <a href="tel:+2348032570597" className="text-blue-900 font-semibold hover:text-gold-600 transition-colors">0803 257 0597</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}