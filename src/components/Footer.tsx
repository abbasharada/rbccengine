import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/rbccconstructioncompanyltd?igsh=MWJiOW1qMjl5dWlrbA==' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rbcc-engineering-and-global-services-ltd-5a5a9030a' },
  { icon: Twitter, href: 'https://x.com/Rbccengineering' },
  { icon: Facebook, href: 'https://www.facebook.com/61573990281781/' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/images/IMG-20260529-WA0453.jpg"
                alt="RBCC Logo"
                className="h-11 w-11 rounded-full object-cover border-2 border-gold-500/40"
                onError={(e) => { e.currentTarget.src = '/logo.svg'; e.currentTarget.className = 'h-11 w-auto object-contain'; }}
              />
              <div>
                <p className="font-heading font-bold text-white text-sm leading-tight">RBCC Engineering</p>
                <p className="text-gold-400 text-[10px] tracking-widest uppercase">& Global Services Ltd</p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-sm">
              Building a Stronger Future Through Engineering. Premium construction solutions across Nigeria.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold-400 hover:text-gold-400 transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-[10px] uppercase tracking-widest mb-4 pb-2 border-b border-gold-500/30">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="text-gold-400 mt-1 flex-shrink-0" />
                <div className="text-white/55 text-sm">
                  <p>No. 1473 Katampe District, Abuja</p>
                  <p className="mt-0.5">518 Sharada G/garu, Kano</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={13} className="text-gold-400 flex-shrink-0" />
                <a href="tel:+2348032570597" className="text-white/55 text-sm hover:text-white transition-colors">0803 257 0597</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} className="text-gold-400 flex-shrink-0" />
                <a href="mailto:Rbccengineering@gmail.com" className="text-white/55 text-sm hover:text-white transition-colors break-all">Rbccengineering@gmail.com</a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/35 text-xs">&copy; {new Date().getFullYear()} RBCC Engineering and Global Services Ltd. All rights reserved.</p>
          <div className="flex gap-5 text-white/35 text-xs">
            <Link to="/notifications" className="hover:text-white/60 transition-colors">Public Notices</Link>
            <Link to="/careers" className="hover:text-white/60 transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}