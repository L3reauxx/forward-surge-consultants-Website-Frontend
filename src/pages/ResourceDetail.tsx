import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, Download, FileText, Lock } from 'lucide-react';
import React, { useState } from 'react';
import { AnimatedBlob } from '../components/AnimatedBlob';

export default function ResourceDetail() {
  const { id } = useParams();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  
  // Placeholder data
  const resource = {
    title: "Transforming hospitality: How SaaS platforms are ushering in a new era of growth",
    category: "Playbooks",
    type: "playbook", // playbook, template, assessment
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Few industries have transformed as much in the past five years as hospitality and in-person experiences. Discover how Mews, Olo, and Tripleseat are using emerging technology such as AI to deliver seamless customer experiences at scale, drive growth for merchants, and redefine the role of hospitality teams.",
    speakers: [
      { name: "Tor Opedal", role: "SVP and GM, Payments, Olo" },
      { name: "Drew Pierce", role: "Chief Operating Officer, Tripleseat" },
      { name: "Richard Valtr", role: "Founder, Mews" }
    ],
    duration: "31:37",
    tags: ["Frictionless flows", "Runtime"]
  };

  const isGated = resource.type === 'playbook' || resource.type === 'template';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setIsUnlocked(true);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <AnimatedBlob />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24 items-start">
          
          {/* Left Sidebar (Meta) */}
          <div className="space-y-8 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link to="/resources" className="inline-flex items-center text-slate-500 hover:text-brand-600 transition-colors font-medium text-sm uppercase tracking-wider mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to resources
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {resource.tags.map((tag, idx) => (
                <div key={idx} className="border-l-2 border-brand-500 pl-4">
                  <div className="text-sm font-bold text-slate-900">{tag}</div>
                </div>
              ))}
              {resource.duration && (
                <div className="border-l-2 border-slate-200 pl-4">
                  <div className="text-sm font-bold text-slate-900">Runtime</div>
                  <div className="text-sm text-slate-500 font-medium">{resource.duration}</div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance"
            >
              {resource.title}
            </motion.h1>

            {/* Gated Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200"
            >
              <div className="aspect-video relative">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${!isUnlocked && isGated ? 'opacity-50 blur-sm grayscale' : 'opacity-80'}`}
                />
                
                {(!isGated || isUnlocked) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center space-x-3 hover:scale-105 transition-transform">
                      {resource.type === 'playbook' || resource.type === 'template' ? (
                        <><Download className="w-5 h-5" /> <span>Download Resource</span></>
                      ) : (
                        <><PlayCircle className="w-5 h-5" /> <span>Watch Preview</span></>
                      )}
                    </button>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Gating Form */}
              <AnimatePresence>
                {isGated && !isUnlocked && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 bg-slate-900/40 backdrop-blur-md"
                  >
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
                      <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Unlock this resource</h3>
                      <p className="text-sm text-slate-600 mb-6 font-medium">Please provide your details to access the full {resource.category.toLowerCase()}.</p>
                      
                      <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div>
                          <input 
                            type="text" 
                            required
                            placeholder="Full name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-medium"
                          />
                        </div>
                        <div>
                          <input 
                            type="email" 
                            required
                            placeholder="Work email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-medium"
                          />
                        </div>
                        <div>
                          <input 
                            type="tel" 
                            required
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-medium"
                          />
                        </div>
                        <button type="submit" className="w-full bg-brand-500 hover:bg-slate-900 text-white font-bold py-3 rounded-lg transition-colors">
                          Get Access
                        </button>
                      </form>
                      <p className="text-xs text-slate-400 mt-4">
                        ForwardSurge will handle your data pursuant to its <Link to="/privacy" className="text-brand-600 hover:underline">Privacy Policy</Link>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg prose-slate prose-p:font-medium prose-p:leading-relaxed text-slate-600"
            >
              <p>{resource.description}</p>
            </motion.div>

            {/* Speakers / Authors */}
            {resource.speakers && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Speakers</h3>
                <ul className="space-y-4">
                  {resource.speakers.map((speaker, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:items-baseline">
                      <span className="font-bold text-slate-900 mr-2">{speaker.name},</span>
                      <span className="text-slate-600 font-medium">{speaker.role}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
