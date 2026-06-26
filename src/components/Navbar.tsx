import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Careers', to: '/careers' },
  { label: 'Notices', to: '/notifications' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHomePage ? 'bg-navy-950 shadow-lg' : 'bg-navy-950/85 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Corporate Branding */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logo.jpeg"
              alt="RBCC Engineering"
              className="h-14 w-14 rounded-full object-cover border-2 border-amber-500 shadow-md"
              onError={(e) => {
                e.currentTarget.src = '/logo.svg';
                e.currentTarget.className = 'h-14 w-auto object-contain';
              }}
            />
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-amber-400 text-[15px] tracking-wide leading-tight uppercase">
                RBCC Engineering
              </div>
              <div className="text-amber-500 font-semibold text-[10px] tracking-widest uppercase mt-0.5">
                & Global Services Ltd
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link key={item.to} to={item.to}
                  className={`px-3 py-2 font-heading font-bold text-[11px] uppercase tracking-wider transition-colors relative group ${active ? 'text-amber-400' : 'text-white/90 hover:text-amber-300'}`}>
                  {item.label}
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-amber-500 transition-transform origin-left ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <a href="tel:+2348032570597" className="hidden xl:flex items-center gap-1.5 text-white/80 hover:text-amber-400 transition-colors">
              <Phone size={14} className="text-amber-500" />
              <span className="font-heading font-semibold text-[11px] tracking-wide">0803 257 0597</span>
            </a>
            <Link to="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-[11px] font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-600 text-navy-950 transition-colors rounded">
              Get a Quote
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white/80 hover:text-amber-400 p-1.5 transition-colors">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-navy-950 border-t border-white/10 transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 py-3 space-y-0.5">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 font-heading font-semibold text-[12px] uppercase tracking-widest transition-colors ${location.pathname === item.to ? 'text-amber-400 bg-white/5 font-bold' : 'text-white/75 hover:text-amber-400'}`}>
              {item.label}
            </Link>
          ))}
          <div className="pt-3 pb-1 border-t border-white/10 px-4">
            <a href="tel:+2348032570597" className="flex items-center gap-2 text-white/70 text-xs font-semibold">
              <Phone size={12} className="text-amber-500" /> 0803 257 0597
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}