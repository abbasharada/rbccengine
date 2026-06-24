import { useReveal } from '../hooks/useReveal';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

const preview = [
  {
    title: 'Multi-Storey Residential Complex',
    category: 'Construction',
    location: 'Abuja, FCT',
    img: '/images/IMG-20260530-WA0037.jpg',
    fallback: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Structural Foundation Works',
    category: 'Civil Engineering',
    location: 'Kano State',
    img: '/images/IMG-20260531-WA0130.jpg',
    fallback: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Multi-Unit Housing Development',
    category: 'Construction',
    location: 'Northern Nigeria',
    img: '/images/IMG-20260530-WA0015.jpg',
    fallback: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ProjectsPreview() {
  const ref = useReveal();

  return (
    <section id="projects-preview" className="py-12 md:py-14 bg-gray-50" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 reveal">
          <div>
            <span className="section-heading">Our Work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <Link to="/projects" className="btn-outline-navy self-start sm:flex-shrink-0 !py-2.5 !px-5 !text-[10px]">
            All Projects <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {preview.map(({ title, category, location, img, fallback }) => (
            <Link to="/projects" key={title} className="reveal group block bg-white border border-gray-100 hover:border-gold-500/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallback; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                <span className="absolute top-3 left-3 bg-gold-500 text-navy-900 font-heading font-bold text-[9px] uppercase tracking-widest px-2 py-1">
                  {category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-navy-900 text-sm mb-1.5 group-hover:text-gold-600 transition-colors leading-snug">{title}</h3>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <MapPin size={11} />
                  <span className="text-xs">{location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
