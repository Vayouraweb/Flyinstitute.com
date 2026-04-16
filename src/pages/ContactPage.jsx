import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, you'd send this to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: "Fly Institute of Commerce",
      extra: (
        <a
          href="https://www.google.com/search?kgmid=/g/11c0xhth22&hl=en-IN&q=FLY+INSTITUTE+OF+COMMERCE"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 inline-block"
        >
          Get Directions &rarr;
        </a>
      ),
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      details: "Call us for inquiries",
      extra: null,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "support@flyinstitute.com",
      extra: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
      extra: <span className="text-sm text-gray-500">Sunday: Closed</span>,
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6 border border-blue-500/30">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span> With Us
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions about our courses or services? We'd love to hear from you. Reach out today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp}
                className="bg-slate-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:bg-white transition-all group text-center"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.details}</p>
                {item.extra && <div className="mt-1">{item.extra}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 text-sm mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 text-sm font-medium">
                    ✅ Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-sm"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-sm"
                      placeholder="Your email (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-sm bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="service-inquiry">Service Inquiry</option>
                      <option value="admission">Admission</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-sm resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map + Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-slate-800 relative aspect-[4/3] group cursor-pointer mb-8">
                <a
                  href="https://www.google.com/search?kgmid=/g/11c0xhth22&hl=en-IN&q=FLY+INSTITUTE+OF+COMMERCE"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/40 hover:bg-slate-900/10 transition-colors"
                >
                  <div className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transform group-hover:scale-105 transition">
                    <MapPin className="text-blue-600" /> Open in Google Maps
                  </div>
                </a>
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=60"
                  alt="Map placeholder"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl text-white">
                <h3 className="font-bold text-lg mb-2">Quick Chat on WhatsApp</h3>
                <p className="text-green-100 text-sm mb-4">Get instant replies to your queries on WhatsApp.</p>
                <a
                  href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Fly%20Institute%20of%20Commerce."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-700 font-bold py-2.5 px-6 rounded-full hover:bg-green-50 transition text-sm"
                >
                  Chat Now <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
