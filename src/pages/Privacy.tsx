import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { AnimatedBlob } from '../components/AnimatedBlob';

export default function Privacy() {
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
            <Shield className="w-4 h-4" />
            <span>Privacy Policy</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1] text-balance"
          >
            How we handle your <span className="text-brand-500">Data.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Effective Date: October 2026. We believe in transparency and the protection of your personal information.
          </motion.p>
        </div>
      </section>

      <section className="py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-brand-600 hover:prose-a:text-brand-500 prose-img:rounded-2xl mx-auto">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you request services, subscribe to our newsletter, or communicate with us. This includes:
            </p>
            <ul>
              <li>Contact information (name, email, phone number)</li>
              <li>Professional information (company name, role)</li>
              <li>Any other information you choose to provide in forms or correspondence</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative messages, updates, and security alerts</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate about programs, events, and other news</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li>With vendors, consultants, and service providers who need access to such information to carry out work on our behalf</li>
              <li>In response to a request for information if we believe disclosure is in accordance with any applicable law or legal process</li>
              <li>If we believe your actions are inconsistent with our user agreements or policies</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@forwardsurge.com">privacy@forwardsurge.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
