import { motion } from 'motion/react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { programs } from '../data/programs';
import { AnimatedBlob } from '../components/AnimatedBlob';
import { CaseStudies } from '../components/CaseStudies';

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const Icon = program.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 border-b border-slate-200">
        <AnimatedBlob />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white text-brand-700 px-4 py-2 rounded-full mb-8 text-[10px] font-bold tracking-widest uppercase border border-slate-200 shadow-sm"
          >
            <Icon className="w-4 h-4" />
            <span>{program.subtitle}</span>
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1] text-balance flex flex-wrap justify-center gap-x-2"
          >
            {program.title.split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 30, rotate: 2 },
                  visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 100 } }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            {program.description}
          </motion.p>
        </div>
      </section>

      {/* Problem / Gap Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                {program.problemHeadline}
              </h2>
              <div className="w-20 h-2 bg-brand-500 rounded-full mb-8"></div>
              <div className="prose prose-lg prose-slate prose-p:font-medium prose-p:leading-relaxed">
                {program.problemCopy.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
            
            <div>
              {program.problemBarriers && program.problemBarriers.length > 0 ? (
                <div className="relative border-l-2 border-slate-200 pl-8 space-y-12 py-4">
                  {program.problemBarriers.map((barrier, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-brand-500 border-4 border-white shadow-sm" />
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{barrier.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{barrier.description}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100"
                >
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mb-8 shadow-xl">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Navigating the Challenge</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    The complexity of modern leadership requires not just understanding the problem, but having the strategic insight and frameworks to address it systematically. We provide the clarity needed to cut through the noise.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-brand-500/20 text-brand-400 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase border border-brand-500/30">
                <span>The Solution</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.1] text-balance">
                {program.solutionHeadline}
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                {program.solutionCopy}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-full min-h-[400px] border border-slate-800"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/30 to-slate-900/80 mix-blend-multiply z-10" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Leadership" 
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {program.overviewHeadline}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-slate mx-auto prose-p:font-medium prose-p:leading-relaxed text-slate-600"
          >
            {program.overviewCopy.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </motion.div>

          {program.overviewList && program.overviewList.length > 0 && (
            <div className="mt-12 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
              <ul className="space-y-6">
                {program.overviewList.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-slate-700 font-bold leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      
      {/* Case Studies */}
      <div className="pt-12 pb-12">
        <CaseStudies />
      </div>

      {/* Call to Action Banner */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-10 tracking-tight text-balance leading-snug">
              {program.ctaHeadline}
            </h2>
            <Link 
              to={program.ctaLink} 
              className="inline-flex items-center justify-center px-8 py-5 text-sm font-bold uppercase tracking-wider rounded-xl text-white bg-slate-900 hover:bg-brand-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl hover:shadow-brand-500/20 focus:ring-4 focus:ring-brand-200 group"
            >
              {program.ctaButtonText}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
