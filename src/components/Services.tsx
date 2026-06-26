import { useReveal } from '../hooks/useReveal';
import { Building2, Wrench, Zap, Sun, Droplets, PaintBucket, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  { icon: Building2, title: 'Engineering Design', desc: 'Residential, commercial & industrial building works' },
  { icon: Wrench, title: 'Electrical Engineering', desc: 'Structural upgrades and complete remodelling' },
  { icon: Zap, title: 'Solar Energy Solution', desc: 'Power distribution and industrial wiring' },
  { icon: Sun, title: 'Building Construction', desc: 'On-grid, off-grid and hybrid solar systems' },
  { icon: Droplets, title: 'Technology', desc: 'Water supply, drainage and sanitation' },
  { icon: PaintBucket, title: 'Finishing Works', desc: 'Tiling, plastering, painting and interiors' },
];

export default function Services() {
  const ref = useReveal();
  const navigate = useNavigate();

  return (
    <section id="services" className="py-12 md:py-14 bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 reveal">
          <div>
            <span className="section-heading">What We Do</span>
            <h2 className="section-title">Core Services</h2>
          </div>
          <button onClick={() => navigate('/#contact')} className="btn-outline-navy self-start sm:flex-shrink-0 !py-2.5 !px-5 !text-[10px]">
            Request a Quote <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="reveal group p-5 bg-gray-50 border border-gray-100 hover:bg-navy-900 hover:border-navy-900 transition-all duration-300">
              <div className="w-10 h-10 bg-gold-500/10 group-hover:bg-gold-500 flex items-center justify-center mb-3.5 transition-colors">
                <Icon size={18} className="text-gold-600 group-hover:text-navy-900 transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 group-hover:text-white text-sm mb-1.5 transition-colors">{title}</h3>
              <p className="text-gray-600 group-hover:text-white/65 text-sm transition-colors leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}