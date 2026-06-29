import { motion } from "motion/react";
import { AnimatedBlob } from "../components/AnimatedBlob";
import { NewsletterBanner } from "../components/NewsletterBanner";
import { CaseStudies, defaultCaseStudies } from "../components/CaseStudies";

import { ClientRiver, clientLogos } from "../components/ClientRiver";

export default function Clients() {
  const half = Math.ceil(clientLogos.length / 2);
  const strategyLogos = clientLogos.slice(0, half);
  const lampLogos = clientLogos.slice(half);

  const strategyCaseStudies = defaultCaseStudies.slice(2, 3);
  const lampCaseStudies = defaultCaseStudies.slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="stripe-gradient py-24 lg:py-32 border-b border-slate-200 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="absolute inset-0 bg-surge-pattern opacity-40"></div>
        <AnimatedBlob />
        <div className="relative z-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] text-balance flex flex-wrap justify-center gap-x-2"
          >
            {"Trusted By".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, rotate: 2 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    transition: { type: "spring", damping: 15, stiffness: 100 },
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
                    color: { delay: 0.4, duration: 0.6 },
                  },
                },
              }}
            >
              Industry Leaders.
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We have successfully served and partnered with organizations across
            various sectors to catalyze authentic leadership and structural
            governance.
          </motion.p>
        </div>
      </section>

      {/* Strategy Clients Marquee */}
      <section className="pt-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
          <div className="border-b border-slate-200 pb-2">
            <h2 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">
              Strategic Partners & Enterprise Clients
            </h2>
            <p className="text-brand-500 mt-1 text-[10px] uppercase tracking-widest font-bold">
              Strategy & Board Harmonization
            </p>
          </div>
        </div>

        <ClientRiver logos={strategyLogos} direction="left" />
      </section>

      <CaseStudies data={strategyCaseStudies} />

      {/* LAMP Clients Marquee */}
      <section className="pt-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
          <div className="border-b border-slate-200 pb-2">
            <h2 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">
              LAMP & Leadership Development
            </h2>
            <p className="text-brand-700 mt-1 text-[10px] uppercase tracking-widest font-bold">
              Management Training Implementations
            </p>
          </div>
        </div>

        <ClientRiver logos={lampLogos} direction="right" />
      </section>

      <CaseStudies data={lampCaseStudies} />

      <NewsletterBanner />
    </div>
  );
}
