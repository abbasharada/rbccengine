import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const slides = [
  {
    image: '/images/IMG-20260530-WA0037.jpg',
    fallback: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920',
    service: 'Building Construction',
    slogan: 'Building a Stronger Future Through Engineering',
  },
  {
    image: '/images/IMG-20260602-WA0007.jpg',
    fallback: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920',
    service: 'Mechanical & Electrical Services',
    slogan: 'Building a Stronger Future Through Engineering',
  },
  {
    image: '/images/IMG-20260531-WA0130.jpg',
    fallback: 'https://images.pexels.com/photos/2577362/pexels-photo-2577362.jpeg?auto=compress&cs=tinysrgb&w=1920',
    service: 'Electrical Engineering',
    slogan: 'Building a Stronger Future Through Engineering',
  },
  {
    image: '/images/IMG-20260530-WA0015.jpg',
    fallback: 'https://images.pexels.com/photos/3577565/pexels-photo-3577565.jpeg?auto=compress&cs=tinysrgb&w=1920',
    service: 'Solar Energy Solutions',
    slogan: 'Building a Stronger Future Through Engineering',
  },
  {
    image: '/images/IMG-20260530-WA0037.jpg',
    fallback: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920',
    service: 'Smart Home Automation',
    slogan: 'Building a Stronger Future Through Engineering',
  },
];

const stats = [
  { v: '200+', l: 'Projects' },
  { v: '15+', l: 'Years' },
  { v: '2', l: 'Offices' },
  { v: '500+', l: 'Clients' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(slides.map(() => false));

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500); // Transitions smoothly every 2.5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const handleImageLoad = (index: number) => {
    setLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <>
      {/* Fixed Sticky Marquee Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 bg-navy-950 text-white overflow-hidden py-2.5 z-[60] border-b border-amber-500/30 shadow-md">
        <div className="whitespace-nowrap flex" style={{ minWidth: '100%' }}>
          <div className="animate-marquee flex gap-8 shrink-0 items-center" style={{ animationDuration: '12s' }}>
            <span className="inline-block text-[11px] font-bold tracking-wide uppercase text-white">
              Welcome to RBCC Engineering & Global Services Ltd – A Multidisciplinary Firm Specializing in Building Construction, Mechanical & Electrical (M&E) Services, Solar Energy Solutions, and Smart Home Automation.
            </span>
            <span className="inline-block text-[11px] font-bold tracking-wide uppercase text-amber-400">
              ★
            </span>
          </div>
          <div className="animate-marquee flex gap-8 shrink-0 items-center" style={{ animationDuration: '12s' }} aria-hidden="true">
            <span className="inline-block text-[11px] font-bold tracking-wide uppercase text-white">
              Welcome to RBCC Engineering & Global Services Ltd – A Multidisciplinary Firm Specializing in Building Construction, Mechanical & Electrical (M&E) Services, Solar Energy Solutions, and Smart Home Automation.
            </span>
            <span className="inline-block text-[11px] font-bold tracking-wide uppercase text-amber-400">
              ★
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[580px] max-h-[860px] flex flex-col justify-end overflow-hidden pt-12">
        {/* Background Slides - Clean & Filterless Visual Presentation */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.image}
                alt={slide.service}
                className="w-full h-full object-cover object-center"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = slide.fallback; }}
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
          {/* subtle natural overlay layout to ensure typography readability on lighter images */}
          <div className="absolute inset-0 bg-navy-950/20 backdrop-blur-[0.5px]" />
        </div>

        {/* Service Dots Indicator */}
        <div className="absolute top-1/2 right-6 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`group flex items-center gap-3 transition-all duration-300 ${index === current ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
            >
              <span className={`font-heading font-bold text-[10px] uppercase tracking-widest transition-all duration-300 ${index === current ? 'text-amber-400 font-extrabold' : 'text-white'}`}>
                {slide.service.split(' ')[0]}
              </span>
              <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === current ? 'bg-amber-400 scale-125 shadow-md' : 'bg-white/80'}`} />
            </button>
          ))}
        </div>

        {/* Content Panel Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 w-full">
          <div className="max-w-2xl bg-navy-950/70 p-6 md:p-8 rounded-lg backdrop-blur-md border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-amber-500" />
              <span className="text-amber-400 font-heading font-bold text-[11px] uppercase tracking-[0.2em]">
                {slides[current].service}
              </span>
            </div>
            <h1 className="font-heading font-black text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              Building a Stronger<br />
              Future Through<br />
              <span className="text-amber-400">Engineering</span>
            </h1>
            <p className="mt-4 text-white/90 text-sm md:text-base font-medium leading-relaxed max-w-lg">
              Premium construction, civil engineering, and infrastructure solutions across Nigeria — delivered with precision and professionalism.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link to="/projects" className="btn-primary !bg-amber-500 hover:!bg-amber-600 text-navy-950 px-6 py-3 rounded font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors shadow-lg">
                Our Projects <ArrowRight size={14} />
              </Link>
              <button onClick={() => scrollTo('contact')} className="btn-outline border-2 border-white hover:border-amber-400 hover:text-amber-400 text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-wider transition-all bg-transparent backdrop-blur-sm">
                Request a Quote
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 bg-navy-950 border-t border-white/10 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 divide-x divide-white/10">
              {stats.map(({ v, l }) => (
                <div key={l} className="py-5 text-center">
                  <p className="font-heading font-black text-amber-400 text-xl md:text-3xl tracking-tight">{v}</p>
                  <p className="text-white/70 text-[10px] md:text-[11px] font-bold uppercase tracking-widest mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button onClick={() => scrollTo('company')}
          className="absolute bottom-28 right-8 z-10 flex flex-col items-center gap-1.5 text-white/60 hover:text-amber-400 transition-colors group">
          <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Scroll</span>
          <ChevronDown size={18} className="animate-bounce text-amber-400" />
        </button>
      </section>
    </>
  );
}