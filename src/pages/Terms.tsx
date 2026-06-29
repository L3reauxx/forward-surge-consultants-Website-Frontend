import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { AnimatedBlob } from '../components/AnimatedBlob';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <AnimatedBlob />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full mb-8 text-[10px] font-bold tracking-widest uppercase border border-brand-100"
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1] text-balance"
          >
            Terms of <span className="text-brand-500">Service.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Effective Date: October 2026. Please read these terms carefully before using our services.
          </motion.p>
        </div>
      </section>

      <section className="py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-brand-600 hover:prose-a:text-brand-500 prose-img:rounded-2xl mx-auto">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of ForwardSurge and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>
              You agree to use our services only for lawful purposes. You agree not to take any action that might compromise the security of our services, render our services inaccessible to others, or otherwise cause damage to our services.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              In no event shall ForwardSurge, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h2>5. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:legal@forwardsurge.com">legal@forwardsurge.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
