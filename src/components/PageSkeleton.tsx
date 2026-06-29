import React from 'react';
import { motion } from 'motion/react';

export default function PageSkeleton() {
  return (
    <div className="w-full min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Skeleton */}
        <div className="space-y-6 max-w-3xl">
          <motion.div 
            className="h-12 md:h-16 bg-slate-200 rounded-2xl w-3/4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="h-12 md:h-16 bg-slate-200 rounded-2xl w-1/2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.div 
            className="h-6 bg-slate-100 rounded-lg w-full max-w-2xl mt-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.div 
            className="h-6 bg-slate-100 rounded-lg w-4/5 max-w-2xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>

        {/* Content Blocks Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <motion.div 
                className="h-48 bg-slate-100 rounded-2xl w-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              />
              <motion.div 
                className="h-6 bg-slate-200 rounded-lg w-3/4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 + 0.1 }}
              />
              <motion.div 
                className="h-4 bg-slate-100 rounded-lg w-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 + 0.2 }}
              />
              <motion.div 
                className="h-4 bg-slate-100 rounded-lg w-5/6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 + 0.3 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
