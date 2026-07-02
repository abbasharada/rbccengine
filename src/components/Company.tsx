import { useReveal } from '../hooks/useReveal';
import { CheckCircle, ArrowRight } from 'lucide-react';

const highlights = [
  'Construction, renovation & civil infrastructure',
  'Electrical engineering & solar power systems',
  'Plumbing, drainage & finishing works',
  'End-to-end project management',
];

export default function Company() {
  const ref = useReveal();

  return (
    <section id="company" className="py-12 md:py-14 bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          <div className="reveal">
            <span className="section-heading">Who We Are</span>
            <h2 className="section-title mb-5">
              Engineering Solutions<br />
              <span className="text-gold-600">Built on Integrity</span>
            </h2>
            <div className="space-y-3.5 text-gray-600 text-sm leading-relaxed">
              <p>
                <strong className="text-navy-900">RBCC Engineering and Global Services Ltd</strong> Welcome to RBCC Engineering and Global Services Ltd  a forward-thinking multidisciplinary engineering, construction, and technology company committed to delivering world-class solutions that drive sustainable development and create lasting value. We integrate engineering excellence, innovation, and modern technology to provide comprehensive services throughout the entire project lifecycle—from planning and design to execution, commissioning, and long-term support.
With an unwavering commitment to quality, safety, integrity, and professionalism, RBCC delivers reliable, cost-effective, and innovative solutions tailored to the needs of clients across the residential, commercial, industrial, and public sectors. Our goal is not only to execute projects but to build enduring relationships founded on trust, excellence, and measurable results.
As we continue to expand, RBCC is actively open to strategic investors, business partners, and organizations that share our vision of building a globally respected engineering and technology enterprise. Through collaboration, investment, and innovation, we seek to develop transformative solutions, expand into new markets, and contribute meaningfully to infrastructure development, technological advancement, and economic growth.
Guided by excellence and driven by innovation, RBCC Engineering and Global Services Ltd is building today with the vision of engineering a better tomorrow.
              </p>
              <p>
                With an unwavering focus on quality, safety, and client satisfaction, every project we deliver
                meets the highest industry standards — completed on time, within budget, and built to last.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="font-heading font-bold text-navy-900 text-sm mb-4">
                Building a Stronger Future Through Engineering.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Start Your Project <ArrowRight size={13} />
              </button>
            </div>
          </div>

          <div className="reveal-right space-y-4">
            <div className="relative">
              <img
                src="/images/IMG-20260530-WA0015.jpg"
                alt="RBCC Engineering site operations"
                className="w-full h-56 object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
              <div className="absolute top-0 left-0 w-1 h-full bg-gold-500" />
            </div>
            <div className="bg-blue-600 p-5">
              <p className="font-heading font-bold text-gold-400 text-[10px] uppercase tracking-widest mb-3">Our Capabilities</p>
              <ul className="space-y-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={13} className="text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
