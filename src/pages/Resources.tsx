import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlaybookWireframe = () => (
  <svg className="absolute bottom-0 right-0 w-full h-[70%] text-white opacity-10 pointer-events-none" viewBox="0 0 200 200" preserveAspectRatio="xMidYMax slice" stroke="currentColor" strokeWidth="1" fill="none">
    {/* Engineering Grid / Steps */}
    <pattern id="grid-playbook" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" strokeWidth="0.5" />
    </pattern>
    <rect width="200" height="200" fill="url(#grid-playbook)" />
    {/* Abstract Steps */}
    <path d="M 0 160 L 40 160 L 40 120 L 80 120 L 80 80 L 120 80 L 120 40 L 160 40 L 160 0" />
    <path d="M 0 180 L 60 180 L 60 140 L 100 140 L 100 100 L 140 100 L 140 60 L 180 60 L 180 20" />
    {/* Concentric Arcs */}
    <circle cx="200" cy="200" r="40" />
    <circle cx="200" cy="200" r="80" />
    <circle cx="200" cy="200" r="120" />
    {/* Triangles */}
    <path d="M 0 200 L 100 100 L 200 200 Z" />
    <path d="M 50 200 L 150 100 L 250 200 Z" />
  </svg>
);

const TemplateWireframe = () => (
  <svg className="absolute bottom-0 right-0 w-full h-[70%] text-white opacity-[0.15] pointer-events-none" viewBox="0 0 200 200" preserveAspectRatio="xMidYMax slice" stroke="currentColor" strokeWidth="1.5" fill="none">
    {/* Grid Base */}
    <pattern id="grid-template" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" strokeWidth="0.5" />
      <circle cx="0" cy="0" r="1" fill="currentColor" />
    </pattern>
    <rect width="200" height="200" fill="url(#grid-template)" />
    
    {/* Engineering Lightbulb Abstract */}
    {/* Bulb top arc */}
    <path d="M 50 100 A 50 50 0 1 1 150 100" />
    <path d="M 60 100 A 40 40 0 1 1 140 100" />
    <path d="M 70 100 A 30 30 0 1 1 130 100" />
    
    {/* Filament abstract */}
    <path d="M 100 100 L 80 140 M 100 100 L 120 140" strokeWidth="2" />
    <circle cx="100" cy="90" r="15" />
    <circle cx="100" cy="90" r="5" />
    
    {/* Bulb base abstract */}
    <path d="M 80 140 L 120 140" strokeWidth="2" />
    <path d="M 80 155 L 120 155" strokeWidth="2" />
    <path d="M 85 170 L 115 170" strokeWidth="2" />
    <path d="M 90 185 L 110 185" strokeWidth="2" />
    
    {/* Glowing rays abstract */}
    <line x1="20" y1="50" x2="40" y2="70" />
    <line x1="180" y1="50" x2="160" y2="70" />
    <line x1="100" y1="10" x2="100" y2="30" />
    
    {/* Geometric overlays */}
    <circle cx="160" cy="160" r="30" />
    <rect x="20" y="140" width="40" height="40" />
  </svg>
);

const AssessmentWireframe = () => (
  <svg className="absolute bottom-0 right-0 w-full h-[70%] text-white opacity-[0.15] pointer-events-none" viewBox="0 0 200 200" preserveAspectRatio="xMidYMax slice" stroke="currentColor" strokeWidth="1.5" fill="none">
    {/* Grid Base */}
    <pattern id="grid-assessment" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" strokeWidth="0.5" />
      <path d="M 0 20 L 20 0" strokeWidth="0.25" />
    </pattern>
    <rect width="200" height="200" fill="url(#grid-assessment)" />

    {/* Chat Bubble / Conversation Abstract */}
    <rect x="40" y="40" width="120" height="80" rx="10" />
    <rect x="30" y="30" width="140" height="100" rx="15" strokeWidth="0.5" />
    <path d="M 80 120 L 60 150 L 95 120" />
    
    <rect x="60" y="100" width="120" height="70" rx="10" />
    <path d="M 140 170 L 160 190 L 125 170" />
    
    {/* Abstract chat lines */}
    <line x1="60" y1="60" x2="140" y2="60" />
    <line x1="60" y1="80" x2="120" y2="80" />
    
    <line x1="80" y1="120" x2="160" y2="120" />
    <line x1="80" y1="140" x2="140" y2="140" />
    
    {/* Nodes/Connections */}
    <circle cx="160" cy="40" r="20" />
    <circle cx="160" cy="40" r="10" />
    
    <circle cx="40" cy="160" r="30" />
    <circle cx="40" cy="160" r="15" />
    <circle cx="40" cy="160" r="5" />
    
    <path d="M 160 60 A 100 100 0 0 1 60 160" strokeDasharray="4 4" />
  </svg>
);

const resourceCategories = [
  {
    id: 'playbooks',
    title: 'Playbooks',
    description: 'Comprehensive guides to leadership and strategy execution.',
    items: [
      {
        title: 'The Modern Strategy Playbook',
        category: 'Playbooks',
      },
      {
        title: 'Change Management Field Guide',
        category: 'Playbooks',
      },
      {
        title: 'Executive Onboarding Blueprint',
        category: 'Playbooks',
      },
      {
        title: 'Board Harmonization Manual',
        category: 'Playbooks',
      }
    ]
  },
  {
    id: 'templates',
    title: 'Templates',
    description: 'Ready-to-use templates for strategic planning and operations.',
    items: [
      {
        title: 'Strategic Priorities Matrix',
        category: 'Templates',
      },
      {
        title: 'Performance Review Template',
        category: 'Templates',
      },
      {
        title: 'Quarterly Planning Canvas',
        category: 'Templates',
      },
      {
        title: 'Leadership Branding Worksheet',
        category: 'Templates',
      }
    ]
  },
  {
    id: 'assessments',
    title: 'Self Assessment Tools',
    description: 'Evaluate your organization\'s readiness and leadership capabilities.',
    items: [
      {
        title: 'Leadership 3D Assessment',
        category: 'Self Assessment',
      },
      {
        title: 'Organizational Culture Audit',
        category: 'Self Assessment',
      },
      {
        title: 'Strategic Agility Scorecard',
        category: 'Self Assessment',
      }
    ]
  }
];

const CardBackground = ({ type }: { type: string }) => {
  switch (type) {
    case 'templates':
      return (
        <>
          <div className="absolute inset-0 bg-brand-500 transition-colors group-hover:bg-brand-600" />
          <TemplateWireframe />
        </>
      );
    case 'assessments':
      return (
        <>
          <div className="absolute inset-0 bg-orange-500 transition-colors group-hover:bg-orange-600" />
          <AssessmentWireframe />
        </>
      );
    case 'playbooks':
    default:
      return (
        <>
          <div className="absolute inset-0 bg-slate-800 transition-colors group-hover:bg-slate-900" />
          <PlaybookWireframe />
        </>
      );
  }
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-6">
            Resources
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Equip yourself and your organization with our proprietary tools, frameworks, and insights designed to accelerate leadership growth and business performance.
          </p>
        </motion.div>

        <div className="space-y-32">
          {resourceCategories.map((category, categoryIdx) => (
            <div key={category.id} className="relative">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="max-w-2xl"
                >
                  <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-3">
                    {category.title}
                  </h2>
                  <p className="text-slate-600 font-medium text-lg">
                    {category.description}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Link 
                    to={`/resources/${category.id}`}
                    className="inline-flex items-center space-x-2 bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-slate-900 transition-colors focus:ring-4 focus:ring-brand-200"
                  >
                    <span>See all</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/resources/${category.id}/1`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full"
                    >
                      <CardBackground type={category.id} />
                      
                      {/* Card Content Overlay */}
                      <div className="relative z-10 p-8 flex flex-col h-full">
                        <div className="text-white/80 font-semibold text-sm mb-4 tracking-wide">
                          {item.category}
                        </div>
                        <h3 className="text-white font-bold text-2xl leading-snug text-balance">
                          {item.title}
                        </h3>
                        
                        <div className="mt-auto">
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-slate-900 text-white transition-all duration-300">
                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
