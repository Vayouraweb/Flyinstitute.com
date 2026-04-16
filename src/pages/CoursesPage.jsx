import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, Landmark, CheckCircle2, ChevronRight, Clock, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function CoursesPage() {
  const courses = [
    {
      title: "Accountancy",
      icon: <BookOpen className="w-8 h-8" />,
      level: "11th, 12th & B.Com",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      description: "Master the fundamentals of accounting, financial statements, and business transactions. Our comprehensive program covers the complete CBSE/State Board syllabus with practical examples.",
      syllabus: [
        "Introduction to Accounting",
        "Theory Base of Accounting",
        "Recording of Transactions",
        "Ledger & Trial Balance",
        "Financial Statements",
        "Partnership Accounts",
        "Company Accounts",
        "Analysis of Financial Statements",
      ],
      duration: "Full Academic Year",
      batchSize: "15-20 Students",
      color: "blue",
    },
    {
      title: "Business Studies",
      icon: <Briefcase className="w-8 h-8" />,
      level: "11th & 12th",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      description: "Understand the world of business with our practical approach to business management, marketing, and organizational behavior. Perfect for future entrepreneurs and managers.",
      syllabus: [
        "Nature & Purpose of Business",
        "Forms of Business Organisations",
        "Business Environment",
        "Planning & Organising",
        "Staffing & Directing",
        "Controlling",
        "Marketing Management",
        "Financial Management",
      ],
      duration: "Full Academic Year",
      batchSize: "15-20 Students",
      color: "indigo",
    },
    {
      title: "Economics",
      icon: <Landmark className="w-8 h-8" />,
      level: "11th, 12th & BA/B.Com",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
      description: "Develop a strong understanding of micro and macroeconomic concepts. Our program focuses on analytical thinking, data interpretation, and real-world economic applications.",
      syllabus: [
        "Introduction to Economics",
        "Consumer Equilibrium",
        "Production & Costs",
        "Market Structures",
        "National Income Accounting",
        "Money & Banking",
        "Government Budget",
        "Balance of Payments",
      ],
      duration: "Full Academic Year",
      batchSize: "15-20 Students",
      color: "emerald",
    },
  ];

  const colorClasses = {
    blue: { gradient: 'from-blue-600 to-blue-700', badge: 'bg-blue-100 text-blue-700', icon: 'bg-blue-50 text-blue-600' },
    indigo: { gradient: 'from-indigo-600 to-indigo-700', badge: 'bg-indigo-100 text-indigo-700', icon: 'bg-indigo-50 text-indigo-600' },
    emerald: { gradient: 'from-emerald-600 to-emerald-700', badge: 'bg-emerald-100 text-emerald-700', icon: 'bg-emerald-50 text-emerald-600' },
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80"
            alt="Studying and learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-sm mb-6 border border-indigo-500/30">
              Our Courses
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Excellence</span> in Commerce
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Specialized coaching that focuses on conceptual clarity, regular practice, and board exam preparation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen className="w-5 h-5" />, label: "Expert Faculty" },
              { icon: <Users className="w-5 h-5" />, label: "Small Batch Size" },
              { icon: <Star className="w-5 h-5" />, label: "Board Exam Focus" },
              { icon: <Clock className="w-5 h-5" />, label: "Flexible Timings" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center py-3">
                <div className="text-blue-600">{item.icon}</div>
                <span className="text-sm font-semibold text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {courses.map((course, i) => {
            const colors = colorClasses[course.color];
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${isReversed ? '' : ''}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 left-4 px-4 py-1.5 bg-gradient-to-r ${colors.gradient} text-white text-sm font-bold rounded-full shadow-lg`}>
                      {course.level}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center`}>
                        {course.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-slate-900">{course.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>

                    {/* Info Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-gray-100 rounded-full text-gray-600">
                        <Clock className="w-3.5 h-3.5" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-gray-100 rounded-full text-gray-600">
                        <Users className="w-3.5 h-3.5" /> {course.batchSize}
                      </span>
                    </div>

                    {/* Syllabus */}
                    <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Key Topics</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {course.syllabus.map((topic, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${colors.icon.includes('blue') ? 'text-blue-500' : colors.icon.includes('indigo') ? 'text-indigo-500' : 'text-emerald-500'}`} />
                          <span className="text-sm text-gray-600">{topic}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.gradient} text-white font-medium py-3 px-7 rounded-full shadow-lg hover:shadow-xl transition-all`}
                    >
                      Enquire Now <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Enroll?</h2>
          <p className="text-indigo-200 mb-8 text-lg">Join our next batch and start your journey towards academic excellence.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold py-3.5 px-8 rounded-full hover:bg-gray-100 shadow-lg transition-all"
          >
            Contact for Admission <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
