import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, BookOpen, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function AboutPage() {
  const values = [
    { icon: <Target className="w-6 h-6" />, title: "Our Mission", desc: "To provide quality commerce education and digital services that empower individuals to achieve their academic and professional goals." },
    { icon: <Eye className="w-6 h-6" />, title: "Our Vision", desc: "To become the most trusted education and digital service center, known for academic excellence and community impact." },
    { icon: <Heart className="w-6 h-6" />, title: "Our Values", desc: "Integrity, dedication, student-first approach, and continuous improvement in everything we do." },
  ];

  const whyChooseUs = [
    "Experienced faculty with commerce expertise",
    "Personalized attention to every student",
    "Regular assessments and progress tracking",
    "All-in-one center: Education + Digital Services",
    "Affordable fees with quality education",
    "Convenient location and flexible timings",
    "Board exam focused preparation",
    "Complete CSC digital service support",
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80"
            alt="Institute atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6 border border-blue-500/30">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Know More About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Fly Institute</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Nurturing future commerce professionals and providing essential digital services to the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl blur-xl opacity-60"></div>
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80"
                  alt="Students in classroom"
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-extrabold">5+</p>
                  <p className="text-sm text-blue-200">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs mb-4 uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Building Futures, <span className="text-blue-600">One Student at a Time</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fly Institute of Commerce was founded with a simple yet powerful vision: to provide quality
                commerce education alongside essential digital services to the community. We believe that
                every student deserves access to excellent teaching and every citizen deserves convenient
                access to government and digital services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the years, we have grown from a small coaching center to a comprehensive institute
                offering specialized commerce courses and a full-service CSC center. Our dedicated team
                is committed to helping students achieve academic excellence while also serving the
                community's everyday digital needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium py-3 px-7 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all"
              >
                Get in Touch <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What <span className="text-blue-600">Drives Us</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-semibold text-xs mb-4 uppercase tracking-wider">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                  The <span className="text-green-600">Fly Institute</span> Advantage
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80"
                alt="Successful students"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Institute <span className="text-blue-600">Gallery</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Glimpses of our institute, events, and student activities.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&q=80",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
              "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80",
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
              "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
              "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp}
                className="overflow-hidden rounded-xl group"
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
