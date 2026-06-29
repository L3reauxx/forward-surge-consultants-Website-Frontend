import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { FlowField } from "../components/FlowField";
import { FluidCanvas } from "../components/FluidCanvas";
import { ClientRiver } from "../components/ClientRiver";

// ... [keep programs and testimonials definitions as they are, assume the replace will match properly, I will only target the imports and component start]


const programs = [
  {
    id: "lamp",
    title: "LAMP",
    subtitle: "Leadership and Management Program",
    desc: "Equip your managers to drive performance and propel business growth.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "bold",
    title: "BOLD",
    subtitle: "Business Oversight Leadership Development",
    desc: "Define and own your leadership journey through ruthless prioritization.",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: "lead-coach",
    title: "LEAD COACH",
    subtitle: "Cultivate People-Practices",
    desc: "Boost your capacity to foster growth in others.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "leadxprnc",
    title: "LEADXPRNC",
    subtitle: "Executive Coaching Platform",
    desc: "Transform your executive presence through our 8-month intensive coaching platform.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "ForwardSurge completely transformed our executive team's approach to strategic planning. Their LAMP program provided actionable insights that we immediately implemented.",
    name: "Sarah Jenkins",
    role: "Chief Operating Officer",
    company: "KCB Group",
    textColor: "text-slate-900",
    gradientColors: ["#fef3c7", "#dcfce7"], // brand-100, green-100
    Wireframe: () => (
      <div
        className="absolute -bottom-16 -right-16 w-[400px] h-[400px] opacity-[0.03] pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(circle at center, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 70%)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="w-full h-full text-slate-900"
        >
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="20" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="21.7" y1="21.7" x2="78.3" y2="78.3" />
          <line x1="21.7" y1="78.3" x2="78.3" y2="21.7" />
        </svg>
      </div>
    ),
  },
  {
    id: 2,
    quote:
      "The strategic harmonization process helped align our board and management, clearing the path for unprecedented growth and clarity in our vision.",
    name: "David Mwangi",
    role: "HR Director",
    company: "Standard Chartered",
    textColor: "text-slate-900",
    gradientColors: ["#fef3c7", "#e0e7ff"], // brand-100, indigo-100
    Wireframe: () => (
      <div
        className="absolute -top-20 -right-12 w-[450px] h-[450px] opacity-[0.03] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom left, black, transparent 60%)",
          WebkitMaskImage:
            "linear-gradient(to bottom left, black, transparent 60%)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="w-full h-full text-slate-900"
        >
          <rect x="10" y="10" width="80" height="80" />
          <rect x="20" y="20" width="60" height="60" />
          <rect x="30" y="30" width="40" height="40" />
          <path d="M10 10L90 90 M90 10L10 90" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </div>
    ),
  },
  {
    id: 3,
    quote:
      "Their leadership development program is unmatched. Our managers are now equipped to handle complex challenges with confidence and strategic foresight.",
    name: "Amina Hassan",
    role: "CEO",
    company: "WYLDE International",
    textColor: "text-slate-900",
    gradientColors: ["#fef3c7", "#f3e8ff"], // brand-100, purple-100
    Wireframe: () => (
      <div
        className="absolute -bottom-10 -left-10 w-[350px] h-[350px] opacity-[0.03] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to top right, black, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(to top right, black, transparent 70%)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="w-full h-full text-slate-900"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 10 0 L 0 0 0 10" fill="none" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" stroke="none" />
          <circle cx="50" cy="50" r="35" strokeWidth="1" />
          <path d="M50 15 L85 50 L50 85 L15 50 Z" strokeWidth="1" />
        </svg>
      </div>
    ),
  },
];

const testimonialSets = [
  [
    {
      id: 't1',
      type: 'internal',
      quote: "True leadership transforms organizational culture from the inside out.",
      name: "Peril John Alubbe",
      role: "Founder & CEO",
      image: "/team/peril-john-alubbe.jpg",
      className: "top-8 right-[5%]"
    },
    {
      id: 't2',
      type: 'client',
      quote: "Increased our team's productivity by 40% in just six months.",
      name: "Sarah Chen",
      role: "VP Operations, TechFlow",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
      className: "bottom-12 right-[2%]"
    },
    {
      id: 't3',
      type: 'client',
      quote: "The strategic alignment we achieved was game-changing for our Q3 goals.",
      name: "Michael Rodriguez",
      role: "Director, Nexus Inc",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
      className: "top-1/2 right-[28%] -translate-y-1/2"
    }
  ],
  [
    {
      id: 't4',
      type: 'internal',
      quote: "We align human potential with aggressive business targets.",
      name: "Moses Sitati",
      role: "Advisory Board",
      image: "/team/moses-sitati-munoko.jpg",
      className: "bottom-8 right-[24%]"
    },
    {
      id: 't5',
      type: 'client',
      quote: "Their executive coaching completely reshaped our leadership team's dynamics.",
      name: "Emily Watson",
      role: "CEO, Global Retail",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
      className: "top-16 right-[18%]"
    },
    {
      id: 't6',
      type: 'client',
      quote: "A clear, actionable roadmap that delivered immediate ROI across the board.",
      name: "David Kim",
      role: "COO, HealthPlus",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop",
      className: "top-1/3 right-[3%]"
    }
  ]
];

export default function Home() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((prev) => (prev + 1) % testimonialSets.length);
    }, 8000); // 8 seconds per set
    return () => clearInterval(interval);
  }, []);

  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden stripe-gradient py-24 lg:py-32">
        <motion.div style={{ y: y1 }} className="absolute inset-0 bg-surge-pattern opacity-60"></motion.div>
        <FluidCanvas />
        <FlowField />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 underline decoration-amber-200">
                Lead Magnet: Get LEAP Framework v2.0
              </span>
            </motion.div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight text-balance flex flex-wrap"
            >
              {"Aligning People Strategies to ".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="mr-[0.25em]"
                  variants={{
                    hidden: { opacity: 0, y: 30, rotate: 2 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                      transition: {
                        type: "spring",
                        damping: 15,
                        stiffness: 100,
                      },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30, rotate: 2, color: "#0f172a" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    color: "#F8B800",
                    transition: {
                      type: "spring",
                      damping: 15,
                      stiffness: 100,
                      color: { delay: 0.8, duration: 0.6 },
                    },
                  },
                }}
                className="whitespace-nowrap"
              >
                Business Goals.
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              We propel business growth by offering fresh perspectives and
              innovative solutions in Strategy, Leadership, and Management to
              entities seeking increased productivity and employee engagement.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="bg-brand-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-brand-100 hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all duration-300 inline-block"
              >
                Start Your Journey
              </Link>
              <Link
                to="/about"
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:scale-105 active:scale-95 transition-all duration-300 inline-block"
              >
                Our Methodology
              </Link>
            </motion.div>
          </div>
          
          {/* Floating Testimonials */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div key={currentSetIndex} className="absolute inset-0">
                {testimonialSets[currentSetIndex].map((t, idx) => {
                  const isInternal = t.type === 'internal';
                  return (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                      className={`absolute ${t.className} z-20 pointer-events-auto group`}
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4.5 + idx * 0.5, ease: "easeInOut" }}
                      >
                        <div className={`max-w-[280px] p-5 rounded-2xl shadow-xl transition-transform duration-300 group-hover:-translate-y-2 ${
                          isInternal 
                            ? 'bg-brand-500 text-white shadow-brand-500/20 border border-brand-400' 
                            : 'bg-white/80 backdrop-blur-md border border-slate-200 shadow-slate-200/50 text-slate-700'
                        }`}>
                          <p className={`text-sm font-medium italic mb-4 leading-relaxed ${isInternal ? 'text-white' : 'text-slate-700'}`}>
                            "{t.quote}"
                          </p>
                          <div className="flex items-center gap-3">
                            <img src={t.image} alt={t.name} className={`w-10 h-10 rounded-full object-cover opacity-90 ${isInternal ? 'mix-blend-luminosity' : 'grayscale'}`} />
                            <div>
                              <p className={`text-xs font-bold ${isInternal ? 'text-white' : 'text-slate-900'}`}>{t.name}</p>
                              <p className={`text-[10px] uppercase font-bold tracking-wider ${isInternal ? 'text-brand-100' : 'text-brand-600'}`}>{t.role}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="bg-white border-y border-slate-100 py-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            Trusted by industry leaders
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ClientRiver />
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="pt-12 lg:pt-16 pb-24 lg:pb-32 relative">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50 max-w-7xl mx-auto hidden md:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold tracking-wide uppercase">
                The Vision Barrier
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900">
                Bridging the Gap
              </h2>
              <blockquote className="border-l-4 border-amber-500 pl-6 text-xl text-slate-600 italic leading-relaxed">
                "The manager who comes up with the right solution to the wrong
                problem is more dangerous than the manager who comes up with the
                wrong solution to the right problem."
                <footer className="text-sm text-slate-500 mt-4 font-semibold not-italic">
                  — Peter F. Drucker
                </footer>
              </blockquote>
              <p className="text-lg text-slate-600 leading-relaxed">
                Does your team have the right people in the right seats? Are
                your activities linked to your ultimate strategy? We help you
                bridge the gap between vision and execution.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/3] bg-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop"
                alt="Team strategy session"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-display font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Solutions for Every Stage of Leadership
            </h2>
            <p className="text-lg text-slate-600">
              Transformative programs designed to address specific
              organizational challenges and foster sustainable growth.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[450px] w-full">
            {programs.map((program, index) => {
              const isActive = activeProgram === index;
              const colors = [
                {
                  bg: "bg-brand-50",
                  text: "text-brand-700",
                  hoverBg: "group-hover:bg-brand-500",
                  char: "L",
                },
                {
                  bg: "bg-amber-50",
                  text: "text-amber-600",
                  hoverBg: "group-hover:bg-amber-600",
                  char: "B",
                },
                {
                  bg: "bg-slate-100",
                  text: "text-slate-600",
                  hoverBg: "group-hover:bg-slate-900",
                  char: "C",
                },
                {
                  bg: "bg-slate-50",
                  text: "text-slate-500",
                  hoverBg: "group-hover:bg-slate-800",
                  char: "X",
                },
              ];
              const c = colors[index % colors.length];

              return (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveProgram(index)}
                  className={`group relative overflow-hidden bg-slate-900 border border-slate-200 rounded-3xl cursor-pointer transition-all duration-500 ease-in-out flex flex-col ${
                    isActive
                      ? "flex-grow basis-auto md:basis-2/3 shadow-xl shadow-slate-200"
                      : "basis-auto md:basis-[10%] hover:border-amber-500/50"
                  }`}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <motion.img
                      src={program.image}
                      alt={program.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      animate={{
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{ duration: 6, ease: "easeOut" }}
                    />
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${isActive ? "bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" : "bg-slate-900/80 group-hover:bg-slate-900/60"}`}
                    ></div>
                  </div>

                  <div
                    className={`p-8 h-full flex ${isActive ? "flex-col justify-between" : "flex-row md:flex-col items-center md:justify-center"} w-full relative z-10`}
                  >
                    <div
                      className={`w-12 h-12 flex-shrink-0 ${isActive ? c.bg : "bg-white/10 backdrop-blur-md border border-white/20"} rounded-xl flex items-center justify-center ${isActive ? c.text : "text-white"} font-bold text-xl ${!isActive && "mb-0 md:mb-6 mr-4 md:mr-0"} ${isActive ? c.hoverBg : "group-hover:bg-white/20"} ${isActive ? "group-hover:text-white" : ""} transition-all duration-300`}
                    >
                      {c.char}
                    </div>

                    {!isActive && (
                      <div className="md:rotate-180 md:[writing-mode:vertical-rl] whitespace-nowrap overflow-hidden">
                        <h3 className="text-xl font-bold text-white tracking-widest">
                          {program.title}
                        </h3>
                      </div>
                    )}

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 md:mt-0 flex-grow flex flex-col justify-end"
                      >
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                          {program.title}
                        </h3>
                        <div
                          className={`text-sm font-bold ${c.text} uppercase tracking-wider mb-4`}
                        >
                          {program.subtitle}
                        </div>
                        <p className="text-lg text-slate-200 leading-relaxed max-w-lg mb-8">
                          {program.desc}
                        </p>
                        <div className="flex items-center gap-3 font-bold text-white group/btn w-fit">
                          Explore Program
                          <span
                            className={`flex items-center justify-center w-8 h-8 rounded-full ${c.bg} ${c.text} group-hover/btn:scale-110 group-hover/btn:translate-x-1 group-hover/btn:bg-white transition-all duration-300`}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/programs"
              className="inline-flex items-center text-brand-700 font-semibold hover:text-brand-900 transition-colors text-lg"
            >
              View all programs in detail{" "}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute inset-0 bg-surge-pattern opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-display font-bold tracking-tight text-slate-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-lg text-slate-600">
              Hear how our strategic interventions have transformed leadership
              and driven growth for our partners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
            role="region"
            aria-roledescription="carousel"
            aria-label="Testimonials"
          >
            <div
              className="overflow-hidden relative min-h-[400px] rounded-3xl shadow-2xl shadow-slate-200/50 flex items-center bg-white border border-slate-100 isolate [transform:translateZ(0)]"
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                {(() => {
                  const ActiveWireframe =
                    testimonials[activeTestimonial].Wireframe;
                  return (
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 overflow-hidden rounded-3xl bg-white ${testimonials[activeTestimonial].textColor}`}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Testimonial ${activeTestimonial + 1} of ${testimonials.length}`}
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                        <motion.div
                          animate={{
                            x: ['0%', '20%', '-20%', '0%'],
                            y: ['0%', '30%', '-10%', '0%'],
                          }}
                          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                          className="absolute -top-[50%] -left-[10%] w-[150%] h-[150%] blur-[100px] rounded-full opacity-[0.35]"
                          style={{ background: `radial-gradient(circle, ${testimonials[activeTestimonial].gradientColors[0]}, transparent 50%)` }}
                        />
                        <motion.div
                          animate={{
                            x: ['-20%', '10%', '30%', '-20%'],
                            y: ['30%', '-20%', '10%', '30%'],
                          }}
                          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                          className="absolute -bottom-[50%] -right-[10%] w-[120%] h-[120%] blur-[100px] rounded-full opacity-[0.35]"
                          style={{ background: `radial-gradient(circle, ${testimonials[activeTestimonial].gradientColors[1]}, transparent 50%)` }}
                        />
                      </div>
                      <ActiveWireframe />
                      <div className="md:w-3/5 z-10 relative">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                          "{testimonials[activeTestimonial].quote}"
                        </p>
                        <div>
                          <h4 className="text-lg font-bold">
                            {testimonials[activeTestimonial].name}
                          </h4>
                          <p className="text-sm opacity-80 mt-1">
                            {testimonials[activeTestimonial].role}
                          </p>
                        </div>
                      </div>
                      <div className="md:w-2/5 flex justify-center items-center mt-12 md:mt-0 z-10 relative">
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter opacity-90 text-center">
                          {testimonials[activeTestimonial].company}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <div
                className="flex flex-wrap items-center justify-center gap-8"
                role="tablist"
              >
                {testimonials.map((test, idx) => (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={activeTestimonial === idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`text-xl font-bold transition-all duration-300 ${
                      activeTestimonial === idx
                        ? "text-slate-900 scale-110"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                    aria-label={`Go to testimonial from ${test.company}`}
                  >
                    {test.company}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Snippet */}
      <section className="py-24 lg:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 relative border border-slate-800"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-slate-800/50 to-transparent pointer-events-none"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 items-stretch">
              <div className="lg:col-span-2 relative min-h-[400px] md:min-h-full group overflow-hidden">
                <img
                  src="/team/peril-john-alubbe.jpg"
                  alt="Peril John Alubbe"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent transition-opacity duration-700 group-hover:opacity-60"></div>
              </div>
              <div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-center z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-display font-extrabold text-white mb-2 tracking-tight">
                    Peril John Alubbe
                  </h3>
                  <p className="text-brand-500 font-bold tracking-[0.2em] uppercase text-[10px]">
                    Founder & CEO
                  </p>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light text-balance">
                  "Leadership is an active process of shaping the future. Our
                  goal is to empower organizations by building authentic
                  governance structures and nurturing intelligent leadership."
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-white font-bold hover:text-brand-500 transition-colors uppercase text-xs tracking-widest"
                >
                  Read our full story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
