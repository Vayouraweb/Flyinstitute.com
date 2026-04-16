import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Landmark, Briefcase, Calculator, FileSignature, Plane, FileText, ChevronRight, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function HomePage() {
  const services = [
    { title: "CSC Centre Services", icon: <Landmark className="w-6 h-6" />, desc: "All common service centre works including certificates and registrations." },
    { title: "Form Filling", icon: <FileText className="w-6 h-6" />, desc: "Assistance with all types of online forms, recruitment, and admissions." },
    { title: "ITR Returns", icon: <Calculator className="w-6 h-6" />, desc: "Professional tax filing and consultation services." },
  ];

  const courses = [
    { title: "Accountancy", icon: <BookOpen className="w-6 h-6" />, level: "11th, 12th & B.Com" },
    { title: "Business Studies", icon: <Briefcase className="w-6 h-6" />, level: "11th & 12th" },
    { title: "Economics", icon: <Landmark className="w-6 h-6" />, level: "11th, 12th & BA/B.Com" },
  ];

  const stats = [
    { icon: <Users className="w-7 h-7" />, number: "500+", label: "Students Taught" },
    { icon: <Award className="w-7 h-7" />, number: "95%", label: "Success Rate" },
    { icon: <Clock className="w-7 h-7" />, number: "5+", label: "Years Experience" },
    { icon: <FileText className="w-7 h-7" />, number: "1000+", label: "Services Completed" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-0 overflow-hidden relative min-h-[90vh] flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1920&q=80"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6 border border-blue-500/30 backdrop-blur-sm">
                Excellence in Commerce & Digital Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Empowering Your Future at{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Fly Institute
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                Your one-stop destination for quality commerce education and comprehensive
                online services including CSC, ITR, and Document processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 hover:shadow-blue-500/50"
                >
                  Explore Courses <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-3.5 px-8 rounded-full border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center"
                >
                  View Digital Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80"
                  alt="Education and learning"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border border-white/10"
                />
                {/* Floating stats card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">95%</p>
                      <p className="text-sm text-gray-500">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-xl mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl font-extrabold">{stat.number}</p>
                <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs mb-4 uppercase tracking-wider">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Comprehensive <span className="text-blue-600">Digital Services</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a wide range of everyday digital services alongside our educational offerings.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
            >
              View All Services <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                alt="Students learning together"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>

            <div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-xs mb-4 uppercase tracking-wider">Our Courses</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Academic <span className="text-indigo-600">Excellence</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Specialized coaching for commerce students focusing on conceptual clarity and board exam preparations.
                </p>
              </motion.div>

              <div className="space-y-4">
                {courses.map((course, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.level}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-indigo-600 transition-colors" />
                  </motion.div>
                ))}
              </div>

              <Link
                to="/courses"
                className="inline-flex items-center gap-2 mt-8 bg-indigo-600 text-white font-medium py-3 px-7 rounded-full hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all"
              >
                View All Courses <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=50')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students. Get expert coaching and digital services under one roof.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all"
              >
                Contact Us Today
              </Link>
              <Link
                to="/about"
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-3.5 px-8 rounded-full border border-white/20 transition-all"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
