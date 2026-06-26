import { useReveal } from '../hooks/useReveal';
import { Link } from 'react-router-dom';
import { Shield, Clock, Target, Users, Award, CheckCircle, ArrowRight, Star, TrendingUp, User } from 'lucide-react';

const stats = [
  { v: '200+', l: 'Projects Delivered' },
  { v: '15+', l: 'Years Experience' },
  { v: '50+', l: 'Expert Engineers' },
  { v: '500+', l: 'Satisfied Clients' },
];

const values = [
  { icon: Shield, title: 'Quality & Safety', desc: 'Highest industry standards with zero-compromise HSE protocols.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Disciplined project management ensuring every milestone is met.' },
  { icon: Target, title: 'Client Focus', desc: 'Tailored solutions designed around your specific project needs.' },
  { icon: Users, title: 'Expert Team', desc: 'Licensed engineers, architects and skilled craftsmen delivering excellence.' },
];

const milestones = [
  { year: '2011', event: 'RBCC Engineering incorporated in Nigeria' },
  { year: '2015', event: 'Expanded operations to Northern Nigeria' },
  { year: '2018', event: 'ISO 9001:2015 Quality Management certification' },
  { year: '2022', event: 'Launched Solar Energy division' },
  { year: '2024', event: 'Opened second office in Kano State' },
  { year: '2026', event: '200+ projects milestone achieved' },
];

const boardMembers = [
  { name: 'Engr. Abdullahi Kabir', title: 'Executive Director, Technical Services' },
  { name: 'Arc. Naimah Ahmad', title: 'Head of Architecture & Design' },
  { name: 'Musa Musa Kabir', title: 'Director of Global Projects & Strategy' },
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
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-400 font-heading font-bold text-[11px] uppercase tracking-[0.2em]">Who We Are</span>
          </div>
          <h1 className="font-heading font-black text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide">
            About<br />
            <span className="text-amber-400">RBCC Engineering</span>
          </h1>
          <p className="text-white/85 text-sm mt-3 max-w-xl font-medium leading-relaxed">
            A multidisciplinary engineering and construction firm delivering excellence across Nigeria since 2011.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section ref={introRef as React.RefObject<HTMLElement>} className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="font-heading font-bold text-amber-500 text-[11px] uppercase tracking-widest block mb-2">Our Story</span>
              <h2 className="font-heading font-black text-navy-900 text-2xl md:text-3xl uppercase tracking-tight mb-5">
                Engineering Excellence<br />
                <span className="text-amber-500">Since 2011</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  <strong className="text-navy-900 font-bold">RBCC Engineering and Global Services Ltd</strong> is a Nigerian engineering and construction company committed to delivering high-quality, reliable, and innovative solutions across various sectors of the construction and engineering industry.
The company provides a wide range of services, including building construction, electrical engineering services, plumbing, painting, POP installation, plastering, screeding, block work, tiling, interlocking, carpentry, project supervision, and general construction works.
At RBCC Engineering, we are dedicated to excellence, professionalism, safety, integrity, and customer satisfaction. Our goal is to deliver projects that meet the highest standards of quality while creating lasting value for our clients and communities.
Through skilled workmanship, technical expertise, and a commitment to continuous improvement, RBCC Engineering strives to be a trusted partner in engineering and construction, contributing to sustainable development and infrastructure growth across Nigeria.
                </p>
                <p>
                  Headquartered in Abuja with a regional office in Kano State, we have successfully delivered over 200 projects
                  across Nigeria — ranging from residential complexes and commercial buildings to civil infrastructure and
                  renewable energy installations.
                </p>
                <p>
                  Our team of licensed engineers, project managers, and skilled craftsmen brings technical excellence and
                  disciplined project management to every engagement — ensuring quality, safety, and on-time delivery.
                </p>
              </div>
            </div>
            <div className="reveal-right relative">
              <img src="/images/IMG-20260602-WA0007.jpg" alt="RBCC Engineering team"
                className="w-full h-80 object-cover rounded shadow-lg"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'; }} />
              <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
              <div className="absolute -bottom-4 -right-4 bg-navy-900 border border-white/10 p-4 hidden md:block rounded shadow-xl">
                <Award className="text-amber-400 mb-1" size={24} />
                <p className="font-heading font-bold text-white text-[10px] uppercase tracking-wide">ISO Certified</p>
                <p className="text-white/60 text-[9px] mt-0.5 font-medium">Quality Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - MOVED HERE UNDER OUR STORY */}
      <section className="py-14 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-100 p-6 md:p-8 rounded reveal">
              <div className="w-10 h-10 bg-navy-900 flex items-center justify-center mb-4">
                <Target size={18} className="text-amber-400" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 text-base uppercase tracking-wide mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To become a leading engineering and construction company recognized for excellence, innovation, quality, and integrity in Nigeria and beyond.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-6 md:p-8 rounded reveal">
              <div className="w-10 h-10 bg-navy-900 flex items-center justify-center mb-4">
                <TrendingUp size={18} className="text-amber-400" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 text-base uppercase tracking-wide mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide professional engineering and construction services that deliver value, exceed client expectations, and contribute to sustainable development through quality workmanship, technical expertise, and exceptional service.
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
            <h2 className="font-heading font-black text-navy-900 text-2xl md:text-3xl uppercase tracking-tight">
              Board of Directors
            </h2>
          </div>

          {/* CEO & Managing Director Feature Row */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 bg-white border border-gray-200/60 p-6 md:p-10 rounded-xl shadow-sm reveal">
            <div className="lg:col-span-5 relative group">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-lg relative border border-gray-200">
                <img 
                  src="/images/C.E.O.jpeg" 
                  alt="CEO / Managing Director"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800'; }}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-navy-950 shadow-md">
                <User size={20} />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded inline-block mb-3">
                Managing Director / CEO Message
              </span>
              <h3 className="font-heading font-black text-navy-900 text-xl md:text-2xl uppercase tracking-wide">
                Engr. Rabiu Lawan Muhammad
              </h3>
              <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mt-0.5 mb-5">
                Managing Director & CEO, RBCC Engineering
              </p>
              
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed border-l-2 border-amber-500 pl-5 italic font-medium">
                <p>
                  "Founder and Managing Director of RBCC Engineering and Global Services Ltd. He holds a Bachelor's Degree in Electrical and Electronics Engineering and has practical experience in engineering, construction, project management, technical design, and business development.
He has earned various professional certifications and completed specialized training in engineering, construction, and technical disciplines. He is proficient in industry-standard software used for engineering design, lighting design, drafting, project planning, analysis, and documentation.
Driven by excellence, integrity, and professionalism, he founded RBCC Engineering with a vision to provide reliable engineering and construction solutions that create lasting value for clients, communities, and stakeholders."
                </p>
                <p>
                  "We remain dedicated to raising industry standards through innovation, integrity, and an unwavering
                  focus on engineering excellence. When you partner with RBCC, you're choosing a team that treats every
                  project as our own."
                </p>
              </div>
            </div>
          </div>

          {/* Other 3 Members - Clean Name Only Layout Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, i) => (
              <div key={i} className="bg-white border border-gray-200/60 p-5 rounded-lg shadow-sm hover:border-amber-500/40 transition-all group reveal">
                <div className="aspect-[4/4] bg-gray-50 rounded mb-4 overflow-hidden relative border border-gray-100">
                  <div className="absolute inset-0 bg-navy-950/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={`/images/member-${i+1}.jpg`} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400'; }}
                  />
                </div>
                <h4 className="font-heading font-bold text-navy-900 text-base group-hover:text-amber-500 transition-colors uppercase tracking-wide">
                  {member.name}
                </h4>
                <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider mt-0.5">
                  {member.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef as React.RefObject<HTMLElement>} className="py-14 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 reveal">
            <span className="font-heading font-bold text-amber-500 text-[11px] uppercase tracking-widest block mb-2">What Drives Us</span>
            <h2 className="font-heading font-black text-navy-900 text-2xl md:text-3xl uppercase tracking-tight">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal text-center p-6 bg-gray-50 border border-gray-100 hover:border-amber-500/40 transition-all rounded">
                <div className="w-12 h-12 bg-navy-900 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <h3 className="font-heading font-bold text-navy-900 text-sm uppercase tracking-wider mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ v, l }) => (
              <div key={l} className="text-center">
                <p className="font-heading font-black text-amber-400 text-3xl md:text-4xl tracking-tight">{v}</p>
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 reveal">
            <span className="font-heading font-bold text-amber-500 text-[11px] uppercase tracking-widest block mb-2">Our Journey</span>
            <h2 className="font-heading font-black text-navy-900 text-2xl md:text-3xl uppercase tracking-tight">Milestones</h2>
          </div>
          <div className="relative reveal">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />
            <div className="space-y-6">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`relative flex items-center gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    <p className="text-gray-600 text-sm font-medium">{event}</p>
                  </div>
                  <div className="relative z-10 w-8 h-8 bg-navy-900 border-4 border-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={12} className="text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-navy-900 text-sm tracking-wide">{year}</p>
                    <p className="text-gray-600 text-sm mt-0.5 md:hidden font-medium">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RBCC */}
      <section ref={whyRef as React.RefObject<HTMLElement>} className="py-14 md:py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="font-heading font-bold text-amber-400 uppercase tracking-widest text-[10px] mb-3 block">Why Choose Us</span>
              <h2 className="font-heading font-black text-white text-2xl md:text-3xl uppercase tracking-tight mb-5">
                The RBCC<br />
                <span className="text-amber-400">Advantage</span>
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                We combine technical expertise with proven construction methodologies to deliver
                results that exceed expectations — on time and within budget.
              </p>
              <ul className="space-y-3">
                {['ISO 9001:2015 Certified Quality Management', 'Two operational offices serving Nigeria', 'End-to-end project delivery', 'Licensed engineers and skilled craftsmen'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-amber-400 flex-shrink-0" />
                    <span className="text-white/85 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary !bg-amber-500 hover:!bg-amber-600 text-navy-950 px-6 py-3 rounded font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 mt-7 transition-colors shadow-lg">
                Start Your Project <ArrowRight size={14} />
              </Link>
            </div>
            <div className="reveal-right">
              <img src="/images/IMG-20260531-WA0130.jpg" alt="RBCC Engineering quality"
                className="w-full h-72 object-cover rounded shadow-md"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-black text-navy-900 text-xl uppercase tracking-wide mb-3">Ready to Build Your Next Project?</h3>
          <p className="text-gray-600 text-sm mb-6 font-medium">Contact us today to discuss your engineering and construction needs.</p>
          <div className="flex justify-center gap-3">
            <Link to="/contact" className="btn-primary !bg-amber-500 hover:!bg-amber-600 text-navy-950 px-5 py-2.5 rounded font-bold text-xs uppercase tracking-wider transition-colors shadow-md">
              Contact Us <ArrowRight size={14} />
            </Link>
            <Link to="/projects" className="border-2 border-navy-950 hover:bg-navy-950 hover:text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-all">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}