import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Instagram, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';

const offices = [
  {
    city: 'Abuja Office',
    address: 'No. 1473 Katampe District, Abuja, FCT',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d7.4!3d9.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDYnMDAuMCJOIDfCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1',
  },
  {
    city: 'Kano Office',
    address: '518 Sharada G/garu, Kano State',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940!2d8.5!3d12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzAwLjAiTiA4wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sng!4v1',
  },
];

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/rbccconstructioncompanyltd?igsh=MWJiOW1qMjl5dWlrbA==', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rbcc-engineering-and-global-services-ltd-5a5a9030a', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/Rbccengineering', label: 'X' },
  { icon: Facebook, href: 'https://www.facebook.com/61573990281781/', label: 'Facebook' },
];

const serviceOptions = ['Construction', 'Renovation', 'Electrical Engineering', 'Solar Power Installation', 'Plumbing & Drainage', 'Finishing Works', 'Infrastructure Development', 'M&E Services', 'Smart Home Automation', 'Other'];

export default function ContactPage() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Updated specialized WhatsApp number layout integration
    const whatsappNumber = '2349035737455';
    const textPayload = `Hello RBCC Engineering,\n\nI would like to request a professional evaluation. Here are my submission details:\n\n` +
      `• *Name:* ${form.name}\n` +
      `• *Email:* ${form.email}\n` +
      `• *Phone:* ${form.phone}\n` +
      `• *Service Required:* ${form.service}\n\n` +
      `*Project Details:*\n${form.message}`;

    const encodedText = encodeURIComponent(textPayload);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/cont.png" alt="RBCC Engineering contact"
            className="w-full h-full object-cover object-center"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920'; }} />
          <div className="absolute inset-0 bg-blue-90/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-gold-500" />
            <span className="text-gold-400 font-heading font-bold text-[11px] uppercase tracking-[0.2em]">Get In Touch</span>
          </div>
          <h1 className="font-heading font-black text-gold-400 text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide">
            Contact<br />
            <span className="text-gold-400">Us</span>
          </h1>
          <p className="text-white/85 text-sm mt-3 max-w-xl font-medium leading-relaxed">
            Reach out to discuss your engineering and construction project. Our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Contact Cards */}
            <div className="lg:col-span-2 space-y-4 reveal-left">
              {/* WhatsApp Quick Chat */}
              <a href="https://wa.me/2349035737455?text=Hello%20RBCC%20Engineering%2C%20I'd%20like%20to%20enquire%20about%20your%20services."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white p-5 hover:bg-[#22c55e] transition-colors rounded shadow-sm">
                <MessageCircle size={28} className="flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-heading font-bold text-[11px] uppercase tracking-widest">Chat on WhatsApp</p>
                  <p className="text-white/90 text-sm mt-0.5 font-medium">Typical reply within 1 hour</p>
                </div>
                <ArrowRight size={18} />
              </a>

              {/* Info Elements */}
              {[
                { icon: Phone, label: 'Phone', val: '0803 257 0597', href: 'tel:+2348032570597' },
                { icon: Mail, label: 'Email', val: 'Rbccengineering@gmail.com', href: 'mailto:Rbccengineering@gmail.com' },
                { icon: Clock, label: 'Business Hours', val: 'Mon–Fri 8am–6pm · Sat 9am–2pm' },
              ].map(({ icon: Icon, label, val, href }) => (
                <div key={label} className="flex items-center gap-4 bg-gray-50 border border-gray-200/60 p-5 hover:border-gold-500/40 transition-all rounded">
                  <div className="w-11 h-11 bg-blue-600 flex items-center justify-center flex-shrink-0 rounded-sm">
                    <Icon size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-blue-900 text-[9px] uppercase tracking-widest mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-600 text-sm font-semibold hover:text-gold-500 transition-colors">{val}</a>
                    ) : (
                      <p className="text-gray-600 text-sm font-semibold">{val}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="bg-gray-50 border border-gray-200/60 p-5 rounded">
                <p className="font-heading font-bold text-blue-900 text-[9px] uppercase tracking-widest mb-3">Follow Us</p>
                <div className="flex gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gold-400 hover:text-gold-300 border border-blue-600 hover:border-gold-500/50 rounded-sm transition-all">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="lg:col-span-3 reveal-right">
              <div className="bg-gray-50 border border-gray-200/60 p-6 md:p-8 rounded-lg shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <div className="w-14 h-14 bg-green-50 border border-green-200 flex items-center justify-center mb-4 rounded-full">
                      <CheckCircle size={28} className="text-green-600" />
                    </div>
                    <h3 className="font-heading font-bold text-blue-900 text-lg mb-1.5 uppercase tracking-wide">WhatsApp Triggered!</h3>
                    <p className="text-gray-600 text-sm max-w-xs mb-5 font-medium">Your request has been prepared. If your browser didn't redirect automatically, click the button below to secure chat access.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                      className="border-2 border-blue-950 hover:bg-blue-950 hover:text-white font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded transition-all">
                      Fill Another Form
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="pb-5 border-b border-gray-200">
                      <h3 className="font-heading font-bold text-blue-900 text-lg uppercase tracking-wide">Send Us a Message</h3>
                      <p className="text-gray-500 text-sm mt-0.5 font-medium">Submitting will instantly prepare your project file over WhatsApp lines.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="pt-5 space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Full Name *</label>
                          <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                            className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors rounded-sm" />
                        </div>
                        <div>
                          <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Email Address *</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                            className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors rounded-sm" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Phone Number *</label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+234 000 000 0000"
                            className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors rounded-sm" />
                        </div>
                        <div>
                          <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Service Needed *</label>
                          <select name="service" value={form.service} onChange={handleChange} required
                            className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors rounded-sm">
                            <option value="">Select a service</option>
                            {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[9px] font-heading font-bold text-gray-600 uppercase tracking-widest mb-1.5">Project Details *</label>
                        <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                          placeholder="Describe your project, location, scope, timeline..."
                          className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none rounded-sm" />
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <p className="text-gray-400 text-[10px]">* Required fields</p>
                        <button type="submit" disabled={loading} className="btn-primary !bg-gold-500 hover:!bg-gold-600 text-blue-950 font-bold text-xs uppercase tracking-wider py-3 px-6 rounded inline-flex items-center gap-2 transition-colors disabled:opacity-60 shadow-md">
                          {loading ? 'Processing...' : <><MessageCircle size={14} /> Send via WhatsApp</>}
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

      {/* Office Locations */}
      <section className="py-14 md:py-16 bg-gray-50 border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 reveal">
            <span className="font-heading font-bold text-gold-500 text-[11px] uppercase tracking-widest block mb-2">Our Locations</span>
            <h2 className="font-heading font-black text-blue-900 text-2xl md:text-3xl uppercase tracking-tight">Offices</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="reveal bg-white border border-gray-200/60 rounded overflow-hidden shadow-sm">
                <div className="h-56 relative">
                  <iframe
                    src={office.map}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={office.city}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 flex items-center justify-center flex-shrink-0 rounded-sm">
                      <MapPin size={16} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-blue-900 text-sm uppercase tracking-wide mb-1">{office.city}</h3>
                      <p className="text-gray-600 text-sm font-medium">{office.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info Footer strip */}
      <section className="py-12 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-heading font-bold text-gold-400 text-[10px] uppercase tracking-widest mb-2">Company</p>
              <p className="text-white text-sm font-medium">RBCC Engineering and Global Services Ltd</p>
            </div>
            <div>
              <p className="font-heading font-bold text-gold-400 text-[10px] uppercase tracking-widest mb-2">Services</p>
              <p className="text-white text-sm font-medium">Construction, M&E, Solar & Smart Automation</p>
            </div>
            <div>
              <p className="font-heading font-bold text-gold-400 text-[10px] uppercase tracking-widest mb-2">Coverage</p>
              <p className="text-white text-sm font-medium">Abuja, Kano & Nationwide Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}