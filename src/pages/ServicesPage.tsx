import { useReveal } from '../hooks/useReveal';
import { Link } from 'react-router-dom';
import { Building2, Wrench, Zap, Sun, Droplets, PaintBucket, Users, Home, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Building Construction',
    desc: 'Complete building construction services including residential, commercial, and industrial developments. From foundation to finishing, we deliver structures built to last.',
    benefits: ['Residential complexes', 'Commercial buildings', 'Industrial facilities', 'Structural engineering'],
    img: '/images/IMG-20260530-WA0037.jpg',
    fallback: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    title: 'Renovation',
    desc: 'Complete building renovation and structural upgrades. Modernization, retrofitting, and transformation of existing structures to meet contemporary standards.',
    benefits: ['Structural upgrades', 'Building modernization', 'Facade renovation', 'Interior remodelling'],
    img: '/images/IMG-20260531-WA0130.jpg',
    fallback: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Zap,
    title: 'Electrical Engineering',
    desc: 'Comprehensive electrical engineering services covering power distribution, industrial wiring, lighting systems, and electrical installations.',
    benefits: ['Power distribution', 'Industrial wiring', 'Panel installation', 'Lighting design'],
    img: '/images/IMG-20260602-WA0007.jpg',
    fallback: 'https://images.pexels.com/photos/2577362/pexels-photo-2577362.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sun,
    title: 'Solar Energy Solutions',
    desc: 'Clean, renewable energy solutions including solar PV installation, hybrid systems, off-grid solutions, and commercial solar infrastructure.',
    benefits: ['Solar PV systems', 'Hybrid installations', 'Off-grid solutions', 'Commercial solar'],
    img: '/images/IMG-20260530-WA0015.jpg',
    fallback: 'https://images.pexels.com/photos/3577565/pexels-photo-3577565.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Droplets,
    title: 'Plumbing Services',
    desc: 'Professional plumbing installation and services including water supply systems, drainage networks, water treatment, and sanitary systems.',
    benefits: ['Water supply systems', 'Drainage networks', 'Water treatment', 'Sanitary installations'],
    img: '/images/IMG-20260530-WA0037.jpg',
    fallback: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: PaintBucket,
    title: 'Finishing Works',
    desc: 'Premium interior and exterior finishing work including tiling, plastering, painting, ceiling works, and decorative finishes.',
    benefits: ['Tiling & flooring', 'Plastering', 'Painting finishes', 'Ceiling systems'],
    img: '/images/IMG-20260531-WA0130.jpg',
    fallback: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Users,
    title: 'Infrastructure Development',
    desc: 'Large-scale infrastructure development including roads, drainage systems, site development, and civil engineering works.',
    benefits: ['Road construction', 'Drainage systems', 'Site development', 'Civil structures'],
    img: '/images/IMG-20260602-WA0007.jpg',
    fallback: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Home,
    title: 'Mechanical & Electrical (M&E)',
    desc: 'Integrated M&E services combining HVAC systems, fire protection, mechanical ventilation, and comprehensive building services engineering.',
    benefits: ['HVAC systems', 'Fire protection', 'Mechanical ventilation', 'Building services'],
    img: '/images/IMG-20260530-WA0015.jpg',
    fallback: 'https://images.pexels.com/photos/2577362/pexels-photo-2577362.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: ShieldCheck,
    title: 'Smart Home Automation',
    desc: 'Modern smart home solutions including home automation, security integration, energy management, and intelligent building control systems.',
    benefits: ['Home automation', 'Security systems', 'Energy management', 'Smart controls'],
    img: '/images/IMG-20260530-WA0037.jpg',
    fallback: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ServicesPage() {
  const heroRef = useReveal();
  const servicesRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      {/* Hero Banner */}
      <section ref={heroRef as React.RefObject<HTMLElement>} className="relative pt-24 pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/IMG-20260530-WA0015.jpg" alt="RBCC Engineering services"
            className="w-full h-full object-cover object-center"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-navy-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 font-heading font-semibold text-[10px] uppercase tracking-[0.2em]">What We Offer</span>
          </div>
          <h1 className="font-heading font-black text-white text-3xl md:text-4xl lg:text-5xl">
            Our<br />
            <span className="text-gold-400">Services</span>
          </h1>
          <p className="text-white/65 text-sm mt-3 max-w-xl leading-relaxed">
            Comprehensive engineering and construction services delivered with precision, quality, and professionalism.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef as React.RefObject<HTMLElement>} className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={service.title} className={`reveal grid lg:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden">
                    <img src={service.img} alt={service.title}
                      className="w-full h-56 object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = service.fallback; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
                    <div className="absolute top-0 left-0 w-1 h-full bg-gold-500" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-navy-900 flex items-center justify-center">
                      <service.icon size={18} className="text-gold-400" />
                    </div>
                    <h3 className="font-heading font-bold text-navy-900 text-lg">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {service.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-gold-500 flex-shrink-0" />
                        <span className="text-gray-700 text-xs">{b}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-gold-600 hover:text-gold-700 font-heading font-bold text-[10px] uppercase tracking-wide transition-colors">
                    Request Quote <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef as React.RefObject<HTMLElement>} className="py-12 md:py-14 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-black text-white text-2xl md:text-3xl">
                Ready to Start Your<br />
                <span className="text-gold-400">Project?</span>
              </h3>
              <p className="text-white/55 text-sm mt-2 max-w-md leading-relaxed">
                Contact us today to discuss your engineering and construction needs. Our team is ready to deliver.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Quote <ArrowRight size={14} />
              </Link>
              <a href="tel:+2348032570597" className="btn-outline">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
