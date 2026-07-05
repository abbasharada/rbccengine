import { useReveal } from '../hooks/useReveal';
import { Link } from 'react-router-dom';
import { Shield, Clock, Target, Users, Award, CheckCircle, ArrowRight, Star, TrendingUp, User } from 'lucide-react';

const stats = [
  { v: '50+', l: 'Projects Delivered' },
  { v: '15+', l: 'Years Experience' },
  { v: '20+', l: 'Engineers' },
  { v: '50+', l: 'Clients' },
];

const values = [
  { icon: Shield, title: 'Quality & Safety', desc: 'Highest industry standards with zero-compromise HSE protocols.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Disciplined project management ensuring every milestone is met.' },
  { icon: Target, title: 'Client Focus', desc: 'Tailored solutions designed around your specific project needs.' },
  { icon: Users, title: 'Expert Team', desc: 'Licensed engineers, architects and skilled craftsmen delivering excellence.' },
];

const milestones = [
  { year: '2025', event: 'RBCC Engineering incorporated in Nigeria' },
  { year: '2025', event: 'Expanded operations to Northern Nigeria' },
  { year: '2025', event: 'Launched Solar Energy division' },
  { year: '2026', event: '100+ projects milestone achieved' },
];

const boardMembers = [
  { 
    name: 'Engr. Noah Toyin ajekiigbe', 
    title: 'Structural Engineer, COREN | Head of Civil Engineering Department',
    img: '/images/noah.jpg'
  },
  { 
    name: 'Arct. Ismail Sadiq', 
    title: 'Head of Architectural Department',
    img: '/images/arch.jpg'
  },
  { 
    name: 'Aliyu Muhammad Hussain', 
    title: 'Head, Finishing Services Department',
    img: '/images/las.jpg'
  },
];

export default function AboutPage() {
  const introRef = useReveal();
  const valuesRef = useReveal();
  const leadershipRef = useReveal();
  const whyRef = useReveal();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/IMG-20260530-WA0015.jpg" alt="RBCC Engineering"
            className="w-full h-full object-cover object-center"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920'; }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-400 font-heading font-bold text-[11px] uppercase tracking-[0.2em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Who We Are</span>
          </div>
          <h1 className="font-heading font-black text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            About<br />
            <span className="text-amber-400">RBCC</span>
          </h1>
          <p className="text-white text-sm mt-3 max-w-xl font-semibold leading-relaxed drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.9)]">
            A multidisciplinary engineering and construction firm delivering excellence across Nigeria since 2011.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section ref={introRef as React.RefObject<HTMLElement>} className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="font-heading font-bold text-gold-500 text-[11px] uppercase tracking-widest block mb-5">Company Overview</span>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  <strong className="text-blue-900 font-bold">RBCC Engineering and Global Services Ltd</strong> is a Nigerian engineering and construction company committed to delivering high-quality, reliable, and innovative solutions across various sectors of the construction and engineering industry.
                </p>
                <p>
                  Headquartered in Abuja with a regional office in Kano State, we have successfully delivered over 200 projects
                  across Nigeria — ranging from residential complexes and commercial buildings to civil infrastructure and
                  renewable energy installations.
                </p>
                <p>
                  Our team of licensed engineers, project managers, and skilled craftsmen brings technical excellence and
                  disciplined project management to every engagement.
                </p>
              </div>
            </div>
            <div className="reveal-right relative">
              <img src="/images/IMG-20260602-WA0007.jpg" alt="RBCC Engineering team"
                className="w-full h-80 object-cover rounded shadow-lg"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'; }} />
              <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-14 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-900 border border-blue-950/20 p-6 md:p-8 rounded shadow-md reveal">
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center mb-4 rounded">
                <Target size={18} className="text-amber-400" />
              </div>
              <h3 className="font-heading font-bold text-amber-400 text-base uppercase tracking-wide mb-3">Our Vision</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                To become a leading engineering and construction company recognized for excellence, innovation, quality, and integrity in Nigeria and beyond.
              </p>
            </div>
            <div className="bg-blue-900 border border-blue-950/20 p-6 md:p-8 rounded shadow-md reveal">
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center mb-4 rounded">
                <TrendingUp size={18} className="text-amber-400" />
              </div>
              <h3 className="font-heading font-bold text-amber-400 text-base uppercase tracking-wide mb-3">Our Mission</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                To provide professional engineering and construction services that deliver value, exceed client expectations, and contribute to sustainable development through quality workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Leadership Section */}
      <section ref={leadershipRef as React.RefObject<HTMLElement>} className="py-14 md:py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10 reveal">
            <span className="font-heading font-bold text-amber-500 text-[11px] uppercase tracking-widest block mb-2">Executive Leadership</span>
            <h2 className="font-heading font-black text-blue-900 text-2xl md:text-3xl uppercase tracking-tight">Leadership</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 bg-white border border-gray-200/60 p-6 md:p-10 rounded-xl shadow-sm reveal">
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-lg relative border border-gray-200">
                  <img src="/images/C.E.1.jpg" alt="Engr. Rabiu Lawan Muhammad" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-5">
                <h3 className="font-heading font-black text-blue-900 text-xl md:text-2xl uppercase tracking-wide">Engr. Rabiu Lawan Muhammad</h3>
                <p className="text-blue-900 text-[11px] font-black uppercase tracking-wider">Founder / CEO, RBCC</p>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed border-l-2 border-amber-500 pl-5 italic font-medium">
                  <p>"Founder and Managing Director of RBCC Engineering and Global Services Ltd. He holds a Bachelor's Degree in Electrical and Electronics Engineering and has practical experience in engineering, construction, project management, technical design, and business development.

He has earned various professional certifications and completed specialized training in engineering, construction, and technical disciplines. He is proficient in industry-standard software used for engineering design, lighting design, drafting, project planning, analysis, and documentation.

Driven by excellence, integrity, and professionalism, he founded RBCC Engineering with a vision to provide reliable engineering and construction solutions that create lasting value for clients, communities, and stakeholders."</p>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 space-y-3">
                <p className="font-semibold text-blue-900 text-sm">Welcome to RBCC Engineering and Global Services Ltd.</p>
                <p className="text-gray-600 text-xs leading-relaxed">
Thank you for visiting our website. We are committed to delivering professional engineering, construction, and technical services with excellence, integrity, and dedication. Our goal is to provide innovative and dependable solutions that exceed expectations while maintaining the highest standards of quality, safety, and professionalism.
We value the trust our clients place in us and look forward to building lasting relationships through exceptional service and successful project delivery.
Thank you for choosing RBCC Engineering and Global Services Ltd.</p>
                <div className="pt-2 border-t border-gray-200">
                  <div className="text-[10px] font-bold text-blue-950 uppercase tracking-wide">
                    Thank you for choosing RBCC<br />
                    <span className="text-blue-900 font-heading text-xs block mt-1">Engr. Rabiu Lawan Muhammad</span>
                    <span className="text-blue-900 font-sans text-[9px] block font-black">Founder / C.E.O</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Board Members Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, i) => (
              <div key={i} className="bg-white border border-gray-200/60 p-5 rounded-lg shadow-sm hover:border-amber-500/40 group reveal">
                <div className="aspect-[4/4] bg-gray-50 rounded mb-4 overflow-hidden relative border border-gray-100">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-heading font-bold text-blue-900 text-base group-hover:text-amber-500 uppercase">{member.name}</h4>
                <p className="text-blue-900 group-hover:text-amber-500 text-[11px] font-black uppercase mt-0.5">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef as React.RefObject<HTMLElement>} className="py-14 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 reveal">
            <h2 className="font-heading font-black text-blue-900 text-2xl md:text-3xl uppercase tracking-tight">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal text-center p-6 bg-gray-50 border border-gray-100 rounded">
                <div className="w-12 h-12 bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <h3 className="font-heading font-bold text-blue-900 text-sm uppercase mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 reveal">
            <h2 className="font-heading font-black text-blue-900 text-2xl md:text-3xl uppercase tracking-tight">Milestones</h2>
          </div>
          <div className="relative reveal">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />
            <div className="space-y-6">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`relative flex items-center gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    <p className="text-gray-600 text-sm font-medium">{event}</p>
                  </div>
                  <div className="relative z-10 w-8 h-8 bg-blue-900 border-4 border-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={12} className="text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-blue-900 text-sm tracking-wide">{year}</p>
                    <p className="text-gray-600 text-sm mt-0.5 md:hidden font-medium">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}