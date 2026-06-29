import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Rocket,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsLoading(false);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-white text-slate-600 py-16 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-surge-pattern opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="Forward Surge Consultants"
                className="h-10 object-contain"
              />
              <div className="flex flex-col justify-center pt-1 w-full max-w-[190px]">
                <span className="font-extrabold text-[22px] tracking-tight uppercase text-slate-900 leading-none flex justify-between">
                  <span>FORWARD</span><span className="text-brand-500">SURGE</span>
                </span>
                <div className="h-[1.5px] bg-slate-300 w-full my-1"></div>
                <div className="flex justify-between w-full">
                  {"CONSULTANTS".split("").map((letter, i) => (
                    <span key={i} className="font-light text-[10.5px] uppercase text-slate-500 leading-none">
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-slate-500">
              We propel business growth by offering fresh perspectives and
              innovative solutions in Strategy, Leadership, and Management.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] text-slate-400 font-bold mb-6 tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-xs font-semibold text-slate-600 hover:text-brand-500 transition-colors uppercase tracking-wider"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-xs font-semibold text-slate-600 hover:text-brand-500 transition-colors uppercase tracking-wider"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="text-xs font-semibold text-slate-600 hover:text-brand-500 transition-colors uppercase tracking-wider"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-xs font-semibold text-slate-600 hover:text-brand-500 transition-colors uppercase tracking-wider"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xs font-semibold text-slate-600 hover:text-brand-500 transition-colors uppercase tracking-wider"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] text-slate-400 font-bold mb-6 tracking-widest uppercase">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <div className="text-xs font-medium text-slate-600 space-y-1">
                  <p>+254 703 868 689</p>
                  <p>+254 704 868 689</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="text-xs font-medium text-slate-600">
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="text-xs font-medium text-slate-600">
                  info@forwardsurge.org
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] text-slate-400 font-bold mb-6 tracking-widest uppercase">
              Newsletter
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Subscribe to get leadership insights and updates on our programs.
            </p>
            {subscribed ? (
              <div className="flex items-center space-x-2 text-sm font-bold text-green-600 bg-green-50 p-4 rounded-xl border border-green-100">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <form
                className="flex flex-col space-y-3 relative group"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all focus:-translate-y-0.5 focus:shadow-lg focus:shadow-brand-900/10 focus:bg-white w-full"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center px-4 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-brand-500 hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-brand-500/20 focus:ring-4 focus:ring-brand-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-slate-900"
                >
                  {isLoading ? (
                    <>
                      Submitting
                      <Loader2 className="ml-2 w-3 h-3 animate-spin" />
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Forward Surge Consultants. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <Link
              to="/privacy"
              className="hover:text-brand-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-brand-500 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
