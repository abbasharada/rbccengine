import { useReveal } from '../hooks/useReveal';
import { Shield, Clock, Target, Award } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '15+', label: 'Years' },
  { value: '20+', label: 'Engineers' },
  { value: '100+', label: 'Clients' },
];

const values = [
  { icon: Shield, title: 'Quality & Safety', desc: 'Highest standards' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Every milestone met' },
  { icon: Target, title: 'Client Focus', desc: 'Tailored solutions' },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-12 md:py-14 bg-gray-50" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="relative reveal-left">
            <img
              src="/images/IMG-20260602-WA0007.jpg"
              alt="RBCC Engineering team on site"
              className="w-full h-[280px] md:h-[340px] object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800';
              }}
            />
            <div className="absolute -bottom-3 -right-3 bg-navy-900 p-4 hidden md:flex items-start gap-2.5">
              <Award className="text-gold-400 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-white/50 text-[10px] mt-0.5">Quality Management</p>
              </div>
            </div>
          </div>

          <div className="reveal">
            <span className="section-heading">Our Expertise</span>
            <h2 className="section-title mb-4">
              Delivering Excellence<br />
              <span className="text-gold-600">In Every Project</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              From residential complexes to large-scale civil infrastructure, RBCC Engineering combines
              technical expertise with disciplined project management to deliver results that stand the test of time.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-gray-100 p-3 text-center">
                  <Icon className="text-gold-500 mx-auto mb-1.5" size={17} />
                  <p className="font-heading font-bold text-navy-900 text-[9px] uppercase tracking-wide">{title}</p>
                  <p className="text-gray-500 text-[9px] mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-3 pt-5 border-t border-gray-200">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-heading font-black text-navy-900 text-lg">{value}</p>
                  <p className="text-gray-500 text-[9px] uppercase tracking-wide mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
