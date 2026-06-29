import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Small delay to ensure it doesn't pop up immediately on first render
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pointer-events-auto">
            <div className="flex-1 pr-4">
              <h3 className="text-sm font-bold text-slate-900 mb-1">Cookie Preferences</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies. 
                <Link to="/privacy" className="text-brand-700 hover:underline ml-1 font-semibold">Read our Privacy Policy.</Link>
              </p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 bg-slate-900 hover:bg-brand-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 focus:ring-4 focus:ring-brand-200 hover:scale-105 active:scale-95 hover:shadow-brand-500/20 shadow-lg"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
