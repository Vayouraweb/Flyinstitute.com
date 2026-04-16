import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, FileText, Calculator, FileSignature, Plane, CreditCard, Shield, UserCheck, Fingerprint, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function ServicesPage() {
  const services = [
    {
      title: "CSC Centre Services",
      icon: <Landmark className="w-7 h-7" />,
      desc: "All common service centre works including Aadhaar enrollment, PAN card, voter ID, birth/death certificates, caste certificates, income certificates, and all government scheme registrations.",
      features: ["Aadhaar Services", "Voter ID", "Certificate Generation", "Government Schemes"],
      color: "blue",
    },
    {
      title: "Form Filling & Applications",
      icon: <FileText className="w-7 h-7" />,
      desc: "Professional assistance with all types of online forms including government job applications, university admissions, scholarship forms, and competitive exam registrations.",
      features: ["Job Applications", "University Admissions", "Scholarship Forms", "Exam Registration"],
      color: "violet",
    },
    {
      title: "ITR & Tax Returns",
      icon: <Calculator className="w-7 h-7" />,
      desc: "Complete income tax return filing services for salaried, self-employed, and business individuals. Get expert consultation on tax planning and compliance.",
      features: ["ITR Filing", "Tax Consultation", "TDS Returns", "GST Registration"],
      color: "emerald",
    },
    {
      title: "Passport Application",
      icon: <Plane className="w-7 h-7" />,
      desc: "Hassle-free passport application assistance. We handle the complete process from form filling to appointment booking for fresh passports and renewals.",
      features: ["New Passport", "Passport Renewal", "Appointment Booking", "Document Verification"],
      color: "amber",
    },
    {
      title: "Document Correction",
      icon: <FileSignature className="w-7 h-7" />,
      desc: "Name, date of birth, address, and other corrections in important identity documents like Aadhaar, PAN card, driving licence, and voter ID.",
      features: ["Aadhaar Correction", "PAN Update", "DL Correction", "Voter ID Update"],
      color: "rose",
    },
    {
      title: "Banking & Insurance",
      icon: <CreditCard className="w-7 h-7" />,
      desc: "Assistance with bank account opening, insurance enrollment, PM Jan Dhan Yojana, and various banking services available through the CSC portal.",
      features: ["Bank Account Opening", "Insurance Services", "PM Schemes", "Banking Assistance"],
      color: "cyan",
    },
    {
      title: "ID Card Services",
      icon: <Fingerprint className="w-7 h-7" />,
      desc: "Complete solutions for all types of identity cards including Aadhaar card, PAN card, driving licence applications and renewals.",
      features: ["Aadhaar Card", "PAN Card", "Driving Licence", "RC Book"],
      color: "indigo",
    },
    {
      title: "Digital Signature",
      icon: <Shield className="w-7 h-7" />,
      desc: "Digital signature certificate registration for businesses and individuals. Required for e-filing, e-tendering, and various online legal processes.",
      features: ["DSC Registration", "E-Filing Support", "Legal Compliance", "Business Services"],
      color: "teal",
    },
    {
      title: "Pension & Welfare",
      icon: <UserCheck className="w-7 h-7" />,
      desc: "Registration and assistance for government pension schemes, PM Kisan, MGNREGA, and various social welfare programs.",
      features: ["Pension Registration", "PM Kisan", "MGNREGA", "Welfare Schemes"],
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600', tag: 'bg-blue-100 text-blue-700' },
    violet: { bg: 'bg-violet-50', text: 'text-violet-600', hoverBg: 'group-hover:bg-violet-600', tag: 'bg-violet-100 text-violet-700' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hoverBg: 'group-hover:bg-emerald-600', tag: 'bg-emerald-100 text-emerald-700' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', hoverBg: 'group-hover:bg-amber-600', tag: 'bg-amber-100 text-amber-700' },
    rose: { bg: 'bg-rose-50', text: 'text-rose-600', hoverBg: 'group-hover:bg-rose-600', tag: 'bg-rose-100 text-rose-700' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', hoverBg: 'group-hover:bg-cyan-600', tag: 'bg-cyan-100 text-cyan-700' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', hoverBg: 'group-hover:bg-indigo-600', tag: 'bg-indigo-100 text-indigo-700' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', hoverBg: 'group-hover:bg-teal-600', tag: 'bg-teal-100 text-teal-700' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', hoverBg: 'group-hover:bg-orange-600', tag: 'bg-orange-100 text-orange-700' },
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
            alt="Digital services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 to-slate-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6 border border-blue-500/30">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Services</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Your one-stop CSC center for all government and digital services. Quick, reliable, and affordable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const colors = colorClasses[service.color];
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className={`w-16 h-16 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-6 ${colors.hoverBg} group-hover:text-white transition-colors`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, j) => (
                      <span key={j} className={`text-xs font-medium px-2.5 py-1 rounded-md ${colors.tag}`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help with Any Service?</h2>
          <p className="text-blue-200 mb-8 text-lg">Visit our center or contact us for quick assistance. All services at affordable rates.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold py-3.5 px-8 rounded-full hover:bg-gray-100 shadow-lg transition-all"
          >
            Contact Us Now <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
