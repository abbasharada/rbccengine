import { useReveal } from '../hooks/useReveal';
import { Medal, Users, Clock, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

const reasons = [
  { icon: Medal, title: 'Quality Workmanship', desc: 'Premium materials, proven methods' },
  { icon: Users, title: 'Expert Team', desc: 'Licensed engineers & craftsmen' },
  { icon: Clock, title: 'Timely Delivery', desc: 'On schedule, every time' },
  { icon: ShieldCheck, title: 'Safety Standards', desc: 'Zero-compromise HSE protocols' },
  { icon: CheckCircle, title: 'Proven Track Record', desc: '200+ successful projects' },
  { icon: ArrowRight, title: 'End-to-End Service', desc: 'Concept to completion' },
];

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section id="why-us" className="relative py-12 md:py-14 bg-blue-800 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h20v20H20zM0 0h20v20H0z' fill='%23fff' fill-opacity='0.4'/%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <span className="font-heading font-bold text-gold-400 uppercase tracking-widest text-[10px] mb-3 block">Why RBCC</span>
            <h2 className="section-title-white mb-4">
              The RBCC <span className="text-gold-400">Advantage</span>
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              We combine technical excellence with proven construction methodologies to deliver
              results that exceed expectations — on time and within budget.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Start Your Project <ArrowRight size={13} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 reveal">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-4 border border-white/10 hover:border-gold-500/40 hover:bg-white/5 transition-all duration-300">
                <Icon className="text-gold-400 mb-2.5" size={17} />
                <h3 className="font-heading font-bold text-white text-xs mb-1">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
