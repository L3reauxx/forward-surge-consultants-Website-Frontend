import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

type NewsletterForm = {
  email: string;
};

export function NewsletterBanner() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<NewsletterForm>();
  
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const onSubmit = async (data: NewsletterForm) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="bg-slate-900 rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-slate-900/20 group"
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{ transform: "translateZ(0)" }}
        />
        
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center" style={{ transform: "translateZ(30px)" }}>
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur border border-slate-700 text-brand-500 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              <Mail className="w-4 h-4" />
              <span>Newsletter</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
              Insights that shape <span className="text-brand-500">leadership.</span>
            </h2>
            <p className="text-slate-300 text-lg">
              Join our community of forward-thinking leaders. Get exclusive strategies and insights delivered directly to your inbox.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-brand-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">You're Subscribed!</h3>
                <p className="text-slate-600">Thank you for joining our newsletter. Expect great insights soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Work Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="john@company.com"
                    className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-brand-500 focus:ring-brand-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-200'} focus:ring-4 outline-none transition-all focus:-translate-y-1 focus:shadow-lg focus:shadow-brand-500/10 bg-slate-50 focus:bg-white`}
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-brand-600 text-xs font-bold mt-2 flex items-center">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-brand-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:ring-4 focus:ring-brand-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl hover:shadow-brand-500/20"
                >
                  {isSubmitting ? (
                    'Subscribing...'
                  ) : (
                    <>
                      Subscribe Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-500 text-center font-medium">
                  We care about your data. Read our <Link to="/privacy" className="text-brand-700 hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
