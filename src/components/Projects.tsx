import { useReveal } from '../hooks/useReveal';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FALLBACK = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800';

const featured = [
  {
    title: 'Multi-Storey Residential Complex',
    category: 'Construction',
    location: 'Abuja, FCT',
    desc: 'Full structural construction from foundation to roofing, plastering and finishing works on a multi-storey residential complex.',
    img: '/images/IMG-20260530-WA0037.jpg',
    year: '2025',
  },
  {
    title: 'Structural Foundation Works',
    category: 'Civil Engineering',
    location: 'Kano State',
    desc: 'Precision concrete foundation and steel reinforcement for a large-scale residential development.',
    img: '/images/IMG-20260531-WA0130.jpg',
    year: '2026',
  },
  {
    title: 'Site Supervision & Engineering',
    category: 'Project Management',
    location: 'Northern Nigeria',
    desc: 'RBCC engineers and foremen overseeing reinforced concrete slab works, quality inspection and monitoring.',
    img: '/images/IMG-20260602-WA0007.jpg',
    year: '2026',
  },
  {
    title: 'Multi-Unit Housing Development',
    category: 'Construction',
    location: 'Abuja, FCT',
    desc: 'Large-scale housing estate featuring multiple residential blocks with drainage, road network and MEP installations.',
    img: '/images/IMG-20260530-WA0015.jpg',
    year: '2026',
  },
];

const gallery = [
  { img: '/images/IMG-20260530-WA0037.jpg', cap: 'Multi-Storey Complex', span: 'col-span-2 row-span-2' },
  { img: '/images/IMG-20260602-WA0007.jpg', cap: 'Site Engineering Team', span: '' },
  { img: '/images/IMG-20260531-WA0130.jpg', cap: 'Foundation Works', span: '' },
  { img: '/images/IMG-20260530-WA0015.jpg', cap: 'Housing Development', span: '' },
  { img: '/images/IMG-20260530-WA0037.jpg', cap: 'Structural Works', span: '' },
];

export default function Projects() {
  const introRef = useReveal();
  const featuredRef = useReveal();
  const galleryRef = useReveal();
  const navigate = useNavigate();

  return (
    <>
      {/* Page Banner */}
      <section className="relative pt-24 pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/IMG-20260530-WA0037.jpg" alt="RBCC construction project"
            className="w-full h-full object-cover object-center"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/50 to-navy-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 font-heading font-semibold text-[10px] uppercase tracking-[0.2em]">Our Portfolio</span>
          </div>
          <h1 className="font-heading font-black text-white text-3xl md:text-4xl lg:text-5xl">
            Projects That<br />
            <span className="text-gold-400">Define Excellence</span>
          </h1>
          <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
            A portfolio of engineering precision, structural integrity and construction quality delivered across Nigeria.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section ref={introRef as React.RefObject<HTMLElement>} className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <span className="section-heading">Our Commitment</span>
              <h2 className="section-title mb-4">
                Engineering Excellence<br />
                <span className="text-gold-600">Across Every Project</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every project we undertake reflects RBCC Engineering's commitment to structural quality, precision
                and professional site management. From residential housing to commercial complexes and civil
                infrastructure — we deliver to the highest standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 reveal">
              {[
                { v: '200+', l: 'Projects Completed' },
                { v: '15+', l: 'Years of Excellence' },
                { v: '2', l: 'National Offices' },
                { v: '100%', l: 'Client Commitment' },
              ].map(({ v, l }) => (
                <div key={l} className="bg-navy-900 p-5 text-center">
                  <p className="font-heading font-black text-gold-400 text-2xl">{v}</p>
                  <p className="text-white/55 text-[9px] mt-1 uppercase tracking-wide">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={featuredRef as React.RefObject<HTMLElement>} className="py-12 md:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 reveal">
            <span className="section-heading">Featured Work</span>
            <h2 className="section-title">Landmark Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map(({ title, category, location, desc, img, year }) => (
              <div key={title} className="reveal group bg-white border border-gray-100 hover:border-gold-500/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-56 relative overflow-hidden">
                  <img src={img} alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-gold-500 text-navy-900 font-heading font-bold text-[9px] uppercase tracking-widest px-2.5 py-1">{category}</span>
                    <span className="bg-navy-900/80 text-white text-[9px] font-medium px-2 py-1">{year}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/80">
                    <MapPin size={11} />
                    <span className="text-xs">{location}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-navy-900 text-sm mb-1.5 group-hover:text-gold-600 transition-colors leading-snug">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={galleryRef as React.RefObject<HTMLElement>} className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 reveal">
            <span className="section-heading">Photo Gallery</span>
            <h2 className="section-title">On-Site Excellence</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal" style={{ gridTemplateRows: 'repeat(2, 160px)' }}>
            {/* Large featured */}
            <div className="col-span-2 row-span-2 relative overflow-hidden group">
              <img src={gallery[0].img} alt={gallery[0].cap}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK; }} />
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-heading font-bold text-xs">{gallery[0].cap}</p>
              </div>
            </div>
            {/* Smaller */}
            {gallery.slice(1).map(({ img, cap }) => (
              <div key={cap} className="relative overflow-hidden group">
                <img src={img} alt={cap}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK; }} />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-navy-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-heading font-bold text-[10px]">{cap}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-14 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-black text-white text-2xl md:text-3xl">
                Ready to Build Your<br />
                <span className="text-gold-400">Next Project?</span>
              </h3>
              <p className="text-white/55 text-sm mt-2 max-w-md leading-relaxed">
                Whether residential, commercial or infrastructure — our team is ready to deliver.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => navigate('/#contact')} className="btn-primary">
                Request a Quote <ArrowRight size={14} />
              </button>
              <a href="tel:+2348032570597" className="btn-outline">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
