import { useReveal } from '../hooks/useReveal';
import { Briefcase, Users, TrendingUp, Shield, MapPin, ChevronRight, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const values = [
  { icon: Shield, title: 'Safety Culture', desc: 'Every team member goes home safe. HSE is non-negotiable.' },
  { icon: TrendingUp, title: 'Career Growth', desc: 'Structured training, mentorship and promotion pathways.' },
  { icon: Users, title: 'Expert Colleagues', desc: 'Work alongside licensed engineers and skilled craftsmen.' },
  { icon: Briefcase, title: 'Meaningful Work', desc: 'Build projects that shape communities across Nigeria.' },
];

const positions = [
  { title: 'Site Engineer', dept: 'Engineering', location: 'Abuja, FCT', type: 'Full-time' },
  { title: 'Civil Works Supervisor', dept: 'Construction', location: 'Kano State', type: 'Full-time' },
  { title: 'Electrical Technician', dept: 'Electrical', location: 'Abuja / Kano', type: 'Full-time' },
  { title: 'Solar Systems Installer', dept: 'Solar & Renewable', location: 'Nigeria-wide', type: 'Contract' },
  { title: 'Quantity Surveyor', dept: 'Commercial', location: 'Abuja, FCT', type: 'Full-time' },
  { title: 'Project Manager', dept: 'Management', location: 'Abuja, FCT', type: 'Full-time' },
];

export default function Careers() {
  const ref = useReveal();
  const [applied, setApplied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build specialized message format payload for WhatsApp recruitment
    const whatsappNumber = '2348032570597';
    const textPayload = `Hello RBCC Engineering Recruitment,\n\nI would like to submit my application details:\n\n` +
      `• *Name:* ${form.name}\n` +
      `• *Email:* ${form.email}\n` +
      `• *Phone:* ${form.phone}\n` +
      `• *Position:* ${form.position || 'General Application'}\n\n` +
      `*Cover Note:*\n${form.message || 'No additional notes provided.'}`;

    const encodedText = encodeURIComponent(textPayload);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    await new Promise(r => setTimeout(r, 600));
    setApplied(true);
    
    // Launch WhatsApp interface connection
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Page Banner */}
      <section className="relative bg-navy-950 pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/IMG-20260602-WA0007.jpg" alt="" className="w-full h-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
        </div>
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 font-heading font-semibold text-[10px] uppercase tracking-[0.2em]">Join Our Team</span>
          </div>
          <h1 className="font-heading font-black text-white text-3xl md:text-4xl">
            Build Your Career<br />
            <span className="text-gold-400">With RBCC Engineering</span>
          </h1>
          <p className="text-white/60 text-sm mt-3 max-w-xl leading-relaxed">
            Join a growing team of engineering professionals dedicated to building a stronger Nigeria.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 md:py-14 bg-white" ref={ref as React.RefObject<HTMLElement>}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-8">
            <span className="section-heading">Why Join Us</span>
            <h2 className="section-title">Work at RBCC Engineering</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal p-5 border border-gray-100 bg-gray-50 hover:border-gold-500/40 hover:bg-white transition-all">
                <div className="w-10 h-10 bg-navy-900 flex items-center justify-center mb-3">
                  <Icon size={17} className="text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-navy-900 text-sm mb-1.5">{title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{desc}</p>
              </div>
            ))}
          </div>

          {/* Culture image */}
          <div className="reveal relative overflow-hidden mb-10">
            <img
              src="/images/IMG-20260530-WA0015.jpg"
              alt="RBCC team at work"
              className="w-full h-48 md:h-56 object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 max-w-md">
                <p className="font-heading font-bold text-white text-lg md:text-xl leading-tight">
                  "Our people are our greatest<br />engineering asset."
                </p>
                <p className="text-gold-400 text-xs mt-2 uppercase tracking-widest">RBCC Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 md:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-7">
            <span className="section-heading">Opportunities</span>
            <h2 className="section-title">Open Positions</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {positions.map(({ title, dept, location, type }) => (
              <div key={title} className="bg-white border border-gray-100 p-5 hover:border-gold-500/50 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="bg-navy-900 text-gold-400 font-heading font-bold text-[9px] uppercase tracking-widest px-2.5 py-1">{dept}</span>
                  <span className="text-gray-400 text-[10px] border border-gray-200 px-2 py-0.5">{type}</span>
                </div>
                <h3 className="font-heading font-bold text-navy-900 text-sm mb-2 group-hover:text-gold-600 transition-colors">{title}</h3>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <MapPin size={11} />
                  <span className="text-xs">{location}</span>
                </div>
                <button
                  onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-3.5 flex items-center gap-1.5 text-gold-600 hover:text-gold-700 font-heading font-bold text-[10px] uppercase tracking-wide transition-colors">
                  Apply Now <ChevronRight size={12} />
                </button>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div id="apply-form" className="bg-white border border-gray-100 p-6 md:p-8 max-w-2xl">
            <h3 className="font-heading font-bold text-navy-900 text-lg mb-1">Submit Your Application</h3>
            <p className="text-gray-500 text-sm mb-6">Not seeing the right role? Send us your CV over WhatsApp — we are always looking for talent.</p>

            {applied ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <h4 className="font-heading font-bold text-navy-900 text-base mb-1">WhatsApp Launched!</h4>
                <p className="text-gray-500 text-sm">Your application text bundle was created. Please pass it over the chat window to finalize review.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-navy-900 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-navy-900 transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="+234 000 000 0000"
                      className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-navy-900 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Position of Interest</label>
                    <select name="position" value={form.position} onChange={handleChange}
                      className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-navy-900 transition-colors">
                      <option value="">Select position</option>
                      {positions.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                      <option value="Other">Other / General Application</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Cover Note</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Tell us about yourself and your experience..."
                    className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-navy-900 transition-colors resize-none" />
                </div>
                <button type="submit" className="btn-primary">
                  <Send size={13} /> Submit via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}