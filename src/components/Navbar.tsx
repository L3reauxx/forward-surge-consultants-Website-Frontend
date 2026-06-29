import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Lightbulb, Target, Users, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Programs",
      path: "/programs",
      isMega: true,
      sublinks: [
        { 
          name: "LAMP", 
          path: "/programs/lamp",
          icon: Lightbulb,
          description: "Leadership and Management Protocol for strategic alignment."
        },
        { 
          name: "BOLD", 
          path: "/programs/bold",
          icon: Target,
          description: "Business Organization Leadership Development for managers."
        },
        { 
          name: "LEAD COACH®", 
          path: "/programs/lead-coach",
          icon: Users,
          description: "Empowering leaders to coach their teams effectively."
        },
        { 
          name: "LEADXPRNC®", 
          path: "/programs/leadxprnc",
          icon: LayoutDashboard,
          description: "Immersive leadership experience for senior executives."
        },
      ],
    },
    { name: "Our Work", path: "/clients" },
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-3">
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
          </div>

          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`text-sm font-semibold transition-all duration-300 hover:text-brand-500 hover:scale-105 active:scale-95 inline-flex items-center gap-1 ${
                    location.pathname === link.path ||
                    (link.sublinks &&
                      location.pathname.startsWith(link.path + "/"))
                      ? "text-brand-500"
                      : "text-slate-600"
                  }`}
                >
                  {link.name}
                  {link.sublinks && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {link.sublinks && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 ${link.isMega ? 'w-[600px]' : 'w-48'}`}>
                    <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-2 relative before:absolute before:top-[-6px] before:left-1/2 before:-translate-x-1/2 before:w-3 before:h-3 before:bg-white before:border-t before:border-l before:border-slate-100 before:rotate-45">
                      {link.isMega ? (
                        <div className="grid grid-cols-2 gap-2 p-4">
                          {link.sublinks.map((sublink) => (
                            <Link
                              key={sublink.name}
                              to={sublink.path}
                              className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group/item"
                            >
                              <div className="p-2 rounded-lg bg-brand-50 text-brand-600 group-hover/item:bg-brand-500 group-hover/item:text-white transition-colors mt-0.5">
                                {sublink.icon && <sublink.icon className="w-5 h-5" />}
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover/item:text-brand-600 transition-colors">
                                  {sublink.name}
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                  {sublink.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-500 hover:bg-slate-50 transition-colors rounded-lg"
                          >
                            {sublink.name}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-slate-200 hover:bg-brand-500 hover:shadow-brand-500/20 hover:scale-105 active:scale-95 transition-all duration-300 inline-block"
            >
              Book a Consultation
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      location.pathname === link.path
                        ? "text-brand-700 bg-brand-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.sublinks && (
                    <div className="pl-6 pb-2 space-y-1 border-l-2 border-slate-100 ml-4 mt-1">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm font-medium ${
                            location.pathname === sublink.path
                              ? "text-brand-700 bg-brand-50"
                              : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                          }`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-brand-500 hover:shadow-brand-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
