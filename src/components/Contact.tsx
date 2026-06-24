import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { MapPin, Phone, Mail, Send, CheckCircle, MessageCircle, Instagram, Linkedin, Twitter, Facebook, Clock, ArrowRight } from 'lucide-react';

const serviceOptions = [
  'Construction', 'Renovation', 'Electrical Engineering', 'Solar Power Installation',
  'Plumbing & Drainage', 'Interior & Exterior Finishing', 'Infrastructure Development', 'Other',
];

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/rbccconstructioncompanyltd?igsh=MWJiOW1qMjl5dWlrbA==', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rbcc-engineering-and-global-services-ltd-5a5a9030a', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/Rbccengineering', label: 'X' },
  { icon: Facebook, href: 'https://www.facebook.com/61573990281781/', label: 'Facebook' },
];

export default function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 md:py-14 bg-gray-50" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8 reveal">
          <div className="w-8 h-px bg-gold-500" />
          <div>
            <span className="section-heading !mb-0">Get In Touch</span>
            <h2 className="section-title">Contact Us</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Info */}
          <div className="lg:col-span-2 space-y-0 reveal-left">
            <div className="border border-gray-100 bg-white divide-y divide-gray-100">
              {[
                { icon: MapPin, label: 'Abuja Office', val: 'No. 1473 Katampe District, Abuja' },
                { icon: MapPin, label: 'Kano Office', val: '518 Sharada G/garu, Kano' },
                { icon: Phone, label: 'Phone', val: '0803 257 0597', href: 'tel:+2348032570597' },
                { icon: Mail, label: 'Email', val: 'Rbccengineering@gmail.com', href: 'mailto:Rbccengineering@gmail.com' },
                { icon: Clock, label: 'Hours', val: 'Mon–Fri 8am–6pm · Sat 9am–2pm' },
              ].map(({ icon: Icon, label, val, href }) => (
                <div key={label} className="flex items-start gap-3 p-4">
                  <div className="w-8 h-8 bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy-900 text-[9px] uppercase tracking-widest mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-600 text-sm hover:text-gold-600 transition-colors break-all">{val}</a>
                    ) : (
                      <p className="text-gray-600 text-sm">{val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/2348032570597?text=Hello%20RBCC%20Engineering%2C%20I'd%20like%20to%20enquire%20about%20your%20services."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white p-4 hover:bg-[#22c55e] transition-colors">
              <MessageCircle size={18} />
              <div className="flex-1">
                <p className="font-heading font-bold text-[10px] uppercase tracking-wide">Chat on WhatsApp</p>
                <p className="text-white/80 text-[10px] mt-0.5">Typical reply within 1 hour</p>
              </div>
              <ArrowRight size={14} />
            </a>

            <div className="pt-3">
              <p className="font-heading font-bold text-navy-900 text-[9px] uppercase tracking-widest mb-2.5">Follow Us</p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-8 h-8 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-navy-900 hover:text-gold-400 hover:border-navy-900 transition-all">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal-right">
            <div className="bg-white border border-gray-100 p-6 md:p-7">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="w-13 h-13 bg-green-50 border border-green-100 flex items-center justify-center mb-4">
                    <CheckCircle size={26} className="text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-900 text-lg mb-1.5">Message Sent!</h3>
                  <p className="text-gray-600 text-sm max-w-xs">Our team will respond within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-6 btn-outline-navy !py-2 !px-5 !text-[10px]">
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-5 pb-4 border-b border-gray-100">
                    <h3 className="font-heading font-bold text-navy-900 text-base">Send Us a Message</h3>
                    <p className="text-gray-500 text-sm mt-0.5">We'll get back to you promptly.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Full Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                          className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-navy-900 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Email Address *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                          className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-navy-900 transition-colors" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Phone *</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+234 000 000 0000"
                          className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-navy-900 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Service *</label>
                        <select name="service" value={form.service} onChange={handleChange} required
                          className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-navy-900 transition-colors">
                          <option value="">Select a service</option>
                          {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Project Details *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
                        placeholder="Describe your project, location, scope and timeline..."
                        className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-navy-900 transition-colors resize-none" />
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <p className="text-gray-400 text-[10px]">* Required fields</p>
                      <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
                        {loading ? 'Sending...' : <><Send size={13} /> Send Message</>}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
