import { motion, AnimatePresence, useInView, useSpring } from 'motion/react';
import { Box, ChevronRight, BarChart3, TrendingUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from './AnimatedCounter';

export interface CaseStudy {
  id: number;
  title: string;
  company: string;
  metrics: { value: string; label: string }[];
  products: string[];
  color: string;
  image: string;
}

export const defaultCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Bandari Beauty uses ForwardSurge to align leadership and achieve 3x regional conversion",
    company: "Bandari Beauty",
    metrics: [
      { value: "50k+", label: "active members achieved" },
      { value: "3x", label: "increase in regional conversion" }
    ],
    products: ["LAMP Framework", "Strategic Harmonization", "Custom Advisory"],
    color: "bg-indigo-900",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Kiota School sees 10x revenue growth with unified management framework",
    company: "Kiota School",
    metrics: [
      { value: "10x", label: "revenue growth" },
      { value: "100%", label: "staff onboarding rate" }
    ],
    products: ["LEAD COACH®", "Performance Management"],
    color: "bg-orange-600",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "TechFlow streamlines executive workflow for $2M operational savings",
    company: "TechFlow",
    metrics: [
      { value: "$2M", label: "operational savings" },
      { value: "40%", label: "reduction in time-to-market" }
    ],
    products: ["LEADXPRNC®", "Board Harmonization"],
    color: "bg-emerald-800",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

function parseMetric(metric: string) {
  const match = metric.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (match) {
    const [, prefix, numStr, suffix] = match;
    const num = parseFloat(numStr.replace(/,/g, ''));
    return { prefix, num, suffix };
  }
  return null;
}

export function CaseStudies({ data = defaultCaseStudies }: { data?: CaseStudy[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStudy = data[activeIndex];

  if (!data || data.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-stretch min-h-[500px]">
          
          {/* Left Column: Metrics & Products */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Case Study
            </h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={`metrics-${activeIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 border-l-2 border-brand-500 pl-6"
              >
                {activeStudy.metrics.map((metric, idx) => {
                  const parsed = parseMetric(metric.value);
                  return (
                    <div key={idx}>
                      <div className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-2 tracking-tight">
                        {parsed ? (
                          <AnimatedCounter 
                            prefix={parsed.prefix} 
                            value={parsed.num} 
                            suffix={parsed.suffix} 
                          />
                        ) : (
                          metric.value
                        )}
                      </div>
                      <div className="text-slate-600 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`products-${activeIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="border-l-2 border-brand-100 pl-6"
              >
                <h4 className="text-sm font-bold text-slate-900 mb-4 tracking-wide">Programs taken</h4>
                <ul className="space-y-3">
                  {activeStudy.products.map((product, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 font-medium">
                      <Box className="w-4 h-4 mr-3 text-brand-500 flex-shrink-0" />
                      {product}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Visual Card */}
          <div className="relative h-full flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className={`flex-grow rounded-3xl overflow-hidden relative shadow-2xl flex flex-col justify-end p-8 md:p-12 ${activeStudy.color} group`}
              >
                <div className="absolute inset-0">
                  <img 
                    src={activeStudy.image} 
                    alt={activeStudy.company}
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                </div>
                
                {/* Animated Chart Background */}
                <div className="absolute top-10 right-10 flex items-end gap-2 h-24 opacity-30">
                  {[40, 60, 45, 80, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1, type: "spring" }}
                      className="w-4 bg-white rounded-t-sm"
                    />
                  ))}
                </div>

                <div className="relative z-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="mb-6 font-display font-bold text-white text-2xl">
                    {activeStudy.company}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-8 max-w-2xl text-balance">
                    {activeStudy.title}
                  </h3>
                  <Link 
                    to={`/post/${activeStudy.id}`}
                    className="inline-flex items-center space-x-2 text-white bg-white/20 hover:bg-white/40 backdrop-blur-md px-6 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Read case study</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Logo Nav */}
        {data.length > 1 && (
          <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8 border-t border-slate-200 pt-8">
            {data.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeIndex === idx 
                    ? 'bg-slate-900 text-white shadow-lg scale-105' 
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {study.company}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
