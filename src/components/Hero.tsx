import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: '/images/img2.jpg',
    fallback: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920',
    service: 'Mechanical & Electrical Services',
    slogan: 'Building a Stronger Future Through Engineering',
  },
  {
    image: '/images/img1.jpg',
    fallback: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920',
    service: 'Building Construction',
    slogan: 'Building a Stronger Future Through Engineering',
  },
  {
    image: '/images/img3.jpg',
    fallback: 'https://images.pexels.com/photos/2577362/pexels-photo-2577362.jpeg?auto=compress&cs=tinysrgb&w=1920',
    service: 'Electrical Engineering',
    slogan: 'Building a Stronger Future Through Engineering',
  },
  {
    image: '/images/img.jpg',
    fallback: 'https://images.pexels.com/photos/3577565/pexels-photo-3577565.jpeg?auto=compress&cs=tinysrgb&w=1920',
    service: 'Smart Home Automation',
    slogan: 'Building a Stronger Future Through Engineering',
  },
  {
    image: '/images/img4.jpg',
    fallback: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920',
    service: 'Solar Energy Solutions',
    slogan: 'Building a Stronger Future Through Engineering',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(slides.map(() => false));

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500); 
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
    <section id="home" className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:h-[520px] lg:h-[600px] flex flex-col justify-center overflow-hidden z-10">
      {/* Background Slides */}
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
        <div className="absolute inset-0 bg-slate-950/50" />
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        <div className="max-w-2xl drop-shadow-lg">
          <h1 className="font-heading font-black text-white leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Building a Stronger<br />
            Future Through<br />
            <span className="text-amber-400">Engineering</span>
          </h1>
          <p className="mt-3 text-white/95 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Premium construction, civil engineering, and infrastructure solutions across Nigeria — delivered with precision and professionalism.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-5">
            <Link to="/projects" className="btn-primary !bg-amber-500 hover:!bg-amber-600 text-navy-950 px-5 py-2.5 rounded font-bold text-[11px] uppercase tracking-wider inline-flex items-center gap-2 transition-colors shadow-lg">
              Our Projects <ArrowRight size={13} />
            </Link>
            <button onClick={() => scrollTo('contact')} className="btn-outline border-2 border-white hover:border-amber-400 hover:text-amber-400 text-white px-5 py-2.5 rounded font-bold text-[11px] uppercase tracking-wider transition-all bg-transparent backdrop-blur-sm">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}