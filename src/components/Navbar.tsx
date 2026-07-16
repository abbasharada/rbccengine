import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    /* 
      The 'sticky top-0' wrapper ensures both the Marquee and the solid blue Header 
      stay fixed as a single static bar at the absolute top of the screen.
    */
    <div className="sticky top-0 left-0 right-0 z-50 w-full shadow-lg">
      
      {/* 1. Marquee Bar: Placed at the very top of the header stack */}
      <div className="w-full bg-blue-800 text-white overflow-hidden py-2.5 border-b border-amber-500/30">
        <div className="whitespace-nowrap flex" style={{ minWidth: '100%' }}>
          <div className="animate-marquee flex gap-8 shrink-0 items-center" style={{ animationDuration: '12s' }}>
            <span className="inline-block text-[11px] font-bold tracking-wide uppercase text-white">
              Welcome to RBCC Engineering & Global Services Ltd – A Multidisciplinary Firm Specializing in Building Construction, Mechanical & Electrical (M&E) Services, Solar Energy Solutions, and Smart Home Automation.
            </span>
            <span className="inline-block text-[11px] font-bold tracking-wide uppercase text-amber-400">
              ★
            </span>
          </div>
          <div className="animate-marquee flex gap-8 shrink-0 items-center" style={{ animationDuration: '12s' }} aria-hidden="true">
            <span className="inline-block text-[11px] font-bold tracking-wide uppercase text-white">
              Welcome to RBCC Engineering & Global Services Ltd – A Multidisciplinary Firm Specializing in Building Construction, Mechanical & Electrical (M&E) Services, Solar Energy Solutions, and Smart Home Automation.
            </span>
            <span className="inline-block text-[11px] font-bold tracking-wide uppercase text-amber-400">
              ★
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar: Solid blue, sitting perfectly underneath the Marquee */}
      <header className="w-full bg-blue-700 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo & Corporate Branding */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
              <img
                src="/images/logo.jpeg"
                alt="RBCC Engineering"
                className="h-14 w-14 rounded-full object-cover border-2 border-amber-500 shadow-md"
                onError={(e) => {
                  e.currentTarget.src = '/logo.svg';
                  e.currentTarget.className = 'h-14 w-auto object-contain';
                }}
              />
              <div className="flex flex-col">
                <div className="font-heading font-black text-white text-base sm:text-[15px] tracking-wider sm:tracking-wide leading-none uppercase w-full">
                  RBCC
                </div>
                <div className="text-white font-semibold text-[9px] sm:text-[10px] tracking-widest uppercase mt-0.5 leading-tight">
                  Engineering <br />
                  & Global Services Ltd
                </div>
                <div className="text-white font-sans font-bold text-[12px] sm:text-[13px] tracking-wider uppercase mt-1 opacity-90">
                  RC: 8283902
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
              <div className="hidden xl:flex flex-col items-end gap-0.5 border-r border-white/10 pr-3 mr-1">
                <a href="tel:+2348032570597" className="flex items-center gap-1.5 text-white/80 hover:text-amber-400 transition-colors">
                  <Phone size={11} className="text-amber-500" />
                  <span className="font-heading font-semibold text-[11px] tracking-wide">0803 257 0597</span>
                </a>
                <a href="tel:+2349035737455" className="flex items-center gap-1.5 text-white/80 hover:text-amber-400 transition-colors">
                  <Phone size={11} className="text-amber-500" />
                  <span className="font-heading font-semibold text-[11px] tracking-wide">0903 573 7455</span>
                </a>
              </div>

              <Link to="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-[11px] font-bold uppercase tracking-wider !bg-gold-500 hover:bg-amber-600 text-blue-950 transition-colors rounded">
                Get a Quote
              </Link>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white/80 hover:text-amber-400 p-1.5 transition-colors">
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-blue-700 border-t border-white/10 transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-[420px]' : 'max-h-0'}`}>
          <div className="px-4 py-3 space-y-0.5">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 font-heading font-semibold text-[12px] uppercase tracking-widest transition-colors ${location.pathname === item.to ? 'text-amber-400 bg-white/5 font-bold' : 'text-white/75 hover:text-amber-400'}`}>
                {item.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 border-t border-white/10 px-4 space-y-2">
              <a href="tel:+2348032570597" className="flex items-center gap-2 text-white/70 text-xs font-semibold hover:text-amber-400 transition-colors">
                <Phone size={12} className="text-amber-500" /> 0803 257 0597
              </a>
              <a href="tel:+2349035737455" className="flex items-center gap-2 text-white/70 text-xs font-semibold hover:text-amber-400 transition-colors">
                <Phone size={12} className="text-amber-500" /> 0903 573 7455
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}