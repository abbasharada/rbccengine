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
    img: '/images/dilu.jpeg',
    year: '2025',
  },
  {
    title: 'Structural Foundation Works',
    category: 'Civil Engineering',
    location: 'Kano State',
    desc: 'Precision concrete foundation and steel reinforcement for a large-scale residential development.',
    img: '/images/dilux.jpeg',
    year: '2026',
  },
  {
    title: 'Modern Residential Villa',
    category: 'Construction',
    location: 'Abuja, FCT',
    desc: 'Premium structural execution, interior masonry, and luxury finishing works.',
    img: '/images/solar5.jpg',
    year: '2026',
  },
  {
    title: 'Solar Power Installation',
    category: 'Electrical Engineering',
    location: 'Kano State',
    desc: 'Sustainable clean energy infrastructure development and system integration.',
    img: '/images/solar.jpg',
    year: '2026',
  },
];

const gallery = [
  { img: '/images/1.jpeg', cap: 'Multi-Storey Complex', span: 'col-span-2 row-span-2' },
  { img: '/images/2.jpeg', cap: 'Site Engineering Team', span: '' },
  { img: '/images/3.jpeg', cap: 'Foundation Works', span: '' },
  { img: '/images/4.jpeg', cap: 'Housing Development', span: '' },
  { img: '/images/5.jpeg', cap: 'Structural Works', span: '' },
  { img: '/images/6.jpeg', cap: 'Interior Finishing', span: '' },
  { img: '/images/7.jpeg', cap: 'Roofing Installation', span: '' },
  { img: '/images/8.jpeg', cap: 'Electrical Systems', span: 'col-span-2' },
  { img: '/images/nine.jpeg', cap: 'Solar Infrastructure', span: '' },
  { img: '/images/10.jpeg', cap: 'Drainage Systems', span: '' },
  { img: '/images/11.jpeg', cap: 'Plastering Works', span: '' },
  { img: '/images/12.jpeg', cap: 'Completed Project View', span: '' },
  { img: '/images/13.jpeg', cap: 'Completed Project View', span: '' },
  { img: '/images/14.jpeg', cap: 'Solar Infrastructure', span: '' },
  { img: '/images/15.jpeg', cap: 'Drainage Systems', span: '' },
  { img: '/images/16.jpeg', cap: 'Plastering Works', span: '' },
  { img: '/images/17.jpeg', cap: 'Completed Project View', span: '' },
  { img: '/images/18.jpeg', cap: 'Completed Project View', span: '' },
  { img: '/images/solar.jpg', cap: 'Plastering Works', span: '' },
  { img: '/images/solar6.jpg', cap: 'Completed Project View', span: '' },
  { img: '/images/solar4.jpg', cap: 'Completed Project View', span: '' },
];

// Added video playlist array below
const videos = [
  { src: '/videos/video.mp4', title: 'Finishing & Paving Works' },
  { src: '/videos/video1.mp4', title: 'On-Site Drainage Engineering' },
  { src: '/videos/video2.mp4', title: 'Structural Structural Build Phase' },
  { src: '/videos/video3.mp4', title: 'Finishing & Paving Works' },
  { src: '/videos/video4.mp4', title: 'On-Site Drainage Engineering' },
  { src: '/videos/video5.mp4', title: 'Structural Structural Build Phase' },
   { src: '/videos/video6.mp4', title: 'Finishing & Paving Works' },
  { src: '/videos/video7.mp4', title: 'On-Site Drainage Engineering' },
  { src: '/videos/video8.mp4', title: 'Structural Structural Build Phase' },
];

export default function Projects() {
  const introRef = useReveal();
  const featuredRef = useReveal();
  const videoRef = useReveal(); // Added video reveal ref
  const galleryRef = useReveal();
  const navigate = useNavigate();

  return (
    <>
      {/* Page Banner */}
      <section className="relative pt-24 pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/solar1.jpeg" alt="RBCC construction project"
            className="w-full h-full object-cover object-center"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK; }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 font-heading font-semibold text-[10px] uppercase tracking-[0.2em]">Our Portfolio</span>
          </div>
          <h1 className="font-heading font-black text-white text-3xl md:text-4xl lg:text-5xl">
            Projects That<br />
            <span className="text-white">Define Excellence</span>
          </h1>
          <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
            Showcasing engineering excellence through high-quality construction, structural integrity, and innovative project delivery across Nigeria.
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
                At RBCC Engineering & Global Services Ltd, every project reflects our commitment to quality, precision, safety, and timely delivery. From residential buildings to commercial developments and civil infrastructure, we consistently deliver engineering solutions that exceed client expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 reveal">
              {[
                { v: '50+', l: 'Projects Completed' },
                { v: '15+', l: 'Years of Excellence' },
                { v: '2', l: 'National Offices' },
                { v: '100%', l: 'Client Commitment' },
              ].map(({ v, l }) => (
                <div key={l} className="bg-blue-600 p-5 text-center">
                  <p className="font-heading font-black text-gold-400 text-2xl">{v}</p>
                  <p className="text-white/70 text-[9px] mt-1 uppercase tracking-wide">{l}</p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/55 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-gold-500 text-blue-950 font-heading font-bold text-[9px] uppercase tracking-widest px-2.5 py-1">{category}</span>
                    <span className="bg-blue-600/80 text-white text-[9px] font-medium px-2 py-1">{year}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/80">
                    <MapPin size={11} />
                    <span className="text-xs">{location}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-blue-900 text-sm mb-1.5 group-hover:text-gold-600 transition-colors leading-snug">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Videos Section (Added Below) */}
      <section ref={videoRef as React.RefObject<HTMLElement>} className="py-12 md:py-14 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 reveal">
            <span className="section-heading">Video Highlights</span>
            <h2 className="section-title">Operations In Action</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
            {videos.map(({ src, title }) => (
              <div key={title} className="bg-white border border-gray-200 p-2 shadow-sm flex flex-col justify-between">
                <div className="relative aspect-[9/16] sm:aspect-video lg:aspect-[9/16] bg-black overflow-hidden max-h-[480px] mx-auto w-full">
                  <video 
                    src={src} 
                    controls 
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white">
                  <h3 className="font-heading font-bold text-blue-950 text-xs tracking-wide">{title}</h3>
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
            <div className="col-span-2 row-span-2 relative overflow-hidden group">
              <img src={gallery[0].img} alt={gallery[0].cap}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK; }} />
              <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/30 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-blue-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-heading font-bold text-xs">{gallery[0].cap}</p>
              </div>
            </div>
            {gallery.slice(1).map(({ img, cap }) => (
              <div key={cap} className="relative overflow-hidden group">
                <img src={img} alt={cap}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK; }} />
                <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-heading font-bold text-[10px]">{cap}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-14 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-black text-white text-2xl md:text-3xl">
                Ready to Build Your<br />
                <span className="text-gold-400">Next Project?</span>
              </h3>
              <p className="text-white/80 text-sm mt-2 max-w-md leading-relaxed">
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