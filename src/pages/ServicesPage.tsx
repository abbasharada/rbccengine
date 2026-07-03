import { useReveal } from '../hooks/useReveal';
import { Link } from 'react-router-dom';
import { Building2, Wrench, Zap, Sun, Droplets, PaintBucket, Users, Home, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Engineering Design & Consultancy',
    desc: 'We provide innovative, cost-effective, and standards-compliant engineering design and consultancy services, delivering safe, functional, and sustainable solutions tailored to residential, commercial, and industrial projects.',
    benefits: ['Architectural Design','Structural Design','Electrical Design','AutoCAD Drafting','BIM Modeling (Revit)','Lighting Design (DIALux)'],
    img1: '/images/dilux.jpeg',
    img2: '/images/dilux1.jpeg',
    img3: '/images/solar.jpg', 
    img4: '/images/solar6.jpg',
    fallback: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    title: 'Electrical Engineering Services',
    desc: 'We deliver reliable electrical engineering solutions, from design and installation to testing, commissioning, maintenance, and troubleshooting, ensuring safety, efficiency, and compliance with industry standards.',
    benefits: ['Electrical Installations', 'Power Distribution Systems','Testing & Commissioning','Maintenance & Troubleshooting'],
    img1: '/images/elect.jpeg',
    img2: '/images/elect1.jpeg',
    img3: '/images/elect2.jpeg',
    img4: '/images/elect3.jpg',
    fallback: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Zap,
    title: 'Solar Energy Solutions',
    desc: 'We provide high-quality solar energy solutions that deliver clean, reliable, and cost-effective power through professional design, installation, and maintenance of solar photovoltaic and energy storage systems.',
    benefits: ['Solar PV System Design','Solar Installation', 'Solar Inverter Systems', 'Battery Storage Systems','Hybrid Power Systems', 'Operation & Maintenance'],
    img1: '/images/solar.jpg',
    img2: '/images/solar1.jpeg',
    img3: '/images/solar3.jpg',
    img4: '/images/penal.jpg',
    fallback: 'https://images.pexels.com/photos/2577362/pexels-photo-2577362.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sun,
    title: 'Building Construction',
    desc: 'We provide comprehensive building construction services, delivering high-quality residential, commercial, and renovation projects with a strong commitment to safety, quality, timely completion, and client satisfaction.',
    benefits: ['Residential Construction', 'Commercial Construction', 'Renovation Works', 'Site Supervision'],
    img1: '/images/build.jpeg',
    img2: '/images/build1.jpeg',
    img3: '/images/image4.jpg',
    img4: '/images/image2.jpg',
    fallback: 'https://images.pexels.com/photos/3577565/pexels-photo-3577565.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
   {
    icon: Sun,
    title: 'Archtecture Department',
    desc: 'Our Architectural Department Delivers Innovative, functional, and sustainable design Solutions for residential, commercial, industrial, and institutional projects. we transform ideas into practical designs that meet clients needs while complying with industry standard and building regulations',
    benefits: ['Architectural Design', 'Building Planning', '2D & 3D Building Designs', 'Interior & Exterior Design', 'Construction Drawings', 'Building Approval Documentation', 'Site Planning & Supervision', 'Architectural Consultation'],
    img1: '/images/art.jpeg',
    img2: '/images/art1.jpeg',
    img3: '/images/art2.png',
    img4: '/images/art3.jpg',
    fallback: 'https://images.pexels.com/photos/3577565/pexels-photo-3577565.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Droplets,
    title: 'Finishing Works',
    desc: 'We deliver premium finishing services that enhance the functionality, durability, and aesthetics of every project through skilled craftsmanship, quality materials, and attention to detail.',
    benefits: ['POP & Ceiling', 'Painting', 'Tiling', 'Interlocking', 'Screeding', 'Interior Finishing',],
    img1: '/images/finish.jpeg',
    img2: '/images/finish1.jpeg',
    img3: '/images/tiles.jpeg',
    img4: '/images/tiles1.jpeg',
    fallback: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: ShieldCheck,
    title: 'Technology Division (Coming Soon)',
    desc: 'Our Technology Division is coming soon. Stay tuned for innovative solutions and services.',
    benefits: ['Home automation', 'Security systems', 'Energy management', 'Smart controls'],
    img1: '/images/tech.jpg',
    img2: '/images/solar2.jpg',
    img3: '/images/soon.jpg',
    img4: '/images/tech1.jpg',
    fallback: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ServicesPage() {
  const heroRef = useReveal();
  const servicesRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      {/* Hero Banner - Clear Presentation without Gradients */}
      <section ref={heroRef as React.RefObject<HTMLElement>} className="relative pt-24 pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/IMG-20260530-WA0015.jpg" alt="RBCC Engineering services"
            className="w-full h-full object-cover object-center"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920'; }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 font-heading font-semibold text-[10px] uppercase tracking-[0.2em]">What We Offer</span>
          </div>
          <h1 className="font-heading font-black text-white text-3xl md:text-4xl lg:text-5xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Our<br />
            <span className="text-gold-400">Services</span>
          </h1>
          <p className="text-white text-sm mt-3 max-w-xl leading-relaxed font-semibold drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.9)]">
            Comprehensive engineering and construction services delivered with precision, quality, and professionalism.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef as React.RefObject<HTMLElement>} className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={service.title} className={`reveal grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* 4-Image Balanced Grid Layout (2x2) */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="grid grid-cols-2 gap-2 relative overflow-hidden rounded-sm">
                    <div className="relative">
                      <img src={service.img1} alt={`${service.title} 1`} className="w-full h-28 sm:h-36 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = service.fallback; }} />
                      <div className="absolute top-0 left-0 w-1 h-full bg-gold-500" />
                    </div>
                    <img src={service.img2} alt={`${service.title} 2`} className="w-full h-28 sm:h-36 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = service.fallback; }} />
                    <img src={service.img3} alt={`${service.title} 3`} className="w-full h-28 sm:h-36 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = service.fallback; }} />
                    <img src={service.img4} alt={`${service.title} 4`} className="w-full h-28 sm:h-36 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = service.fallback; }} />
                    {/* Changed navy-950 to blue-950 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Text Content Block */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    {/* Changed bg-navy-900 to bg-blue-600 */}
                    <div className="w-10 h-10 bg-blue-600 flex items-center justify-center">
                      <service.icon size={18} className="text-gold-400" />
                    </div>
                    {/* Changed text-navy-900 to text-blue-900 */}
                    <h3 className="font-heading font-bold text-blue-900 text-lg">{service.title}</h3>
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
      {/* Changed bg-navy-900 to bg-blue-600 */}
      <section ref={ctaRef as React.RefObject<HTMLElement>} className="py-12 md:py-14 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-black text-white text-2xl md:text-3xl">
                Ready to Start Your<br />
                <span className="text-gold-400">Project?</span>
              </h3>
              <p className="text-white/80 text-sm mt-2 max-w-md leading-relaxed">
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