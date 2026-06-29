import { motion } from 'motion/react';
import { Target, Eye, Shield, Users, Layers, TrendingUp } from 'lucide-react';
import { AnimatedBlob } from '../components/AnimatedBlob';

const values = [
  { name: 'Commitment', icon: Target, desc: 'Unwavering dedication to your organizational success.' },
  { name: 'Integrity', icon: Shield, desc: 'Operating with the highest ethical standards and transparency.' },
  { name: 'Organisation', icon: Layers, desc: 'Structured approaches to chaotic business challenges.' },
  { name: 'Discipline', icon: TrendingUp, desc: 'Consistent execution driving measurable results.' },
];

const team = [
  {
    name: 'Peril John Alubbe',
    role: 'Founder & CEO',
    bio: 'PJ is a certified leadership and business consultant with over 20 years of experience coaching corporate and SME executives. He is a board harmonizer, conflict manager, and social architect passionate about intelligent leadership.',
    image: '/team/peril-john-alubbe.jpg'
  },
  {
    name: 'Moses Sitati Munoko',
    role: 'Advisory Board Member',
    bio: 'Bringing decades of strategic insight to guide our overarching mission and vision for leadership in Africa.',
    image: '/team/moses-sitati-munoko.jpg'
  },
  {
    name: 'Kennedy Luvembe',
    role: 'Consultant and Life Coach',
    bio: 'Specializes in personal development and organizational behavior, driving individual growth within corporate frameworks.',
    image: '/team/kennedy-luvembe.jpg'
  }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden stripe-gradient py-24 lg:py-32">
        <div className="absolute inset-0 bg-surge-pattern opacity-40"></div>
        <AnimatedBlob />
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop" 
            alt="Mountain peak at sunrise" 
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto leading-[1.1] text-balance flex flex-wrap justify-center gap-x-2"
          >
            {"Shaped by Vision. Guided by".split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 30, rotate: -2 },
                  visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 100 } }
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 30, rotate: -2, color: "#0f172a" },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotate: 0, 
                  color: "#F8B800",
                  transition: { 
                    type: "spring", damping: 15, stiffness: 100,
                    color: { delay: 0.8, duration: 0.6 }
                  } 
                }
              }}
            >
              Strategy.
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 30, rotate: -2 },
                visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 100 } }
              }}
            >
              Grounded in
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 30, rotate: -2, color: "#0f172a" },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotate: 0, 
                  color: "#f59e0b",
                  transition: { 
                    type: "spring", damping: 15, stiffness: 100,
                    color: { delay: 1, duration: 0.6 }
                  } 
                }
              }}
            >
              Values.
            </motion.span>
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-2xl shadow-xl shadow-slate-100"
            >
              <div className="flex items-center space-x-3 mb-4 text-brand-500">
                <Eye className="w-6 h-6" />
                <h3 className="text-xl font-display font-bold text-slate-900 uppercase tracking-wider">Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                To impact 3,000 transformed leaders who catalyze and establish authentic governance structures in Africa and beyond by the year 2050.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-2xl shadow-xl shadow-slate-100"
            >
              <div className="flex items-center space-x-3 mb-4 text-brand-700">
                <Target className="w-6 h-6" />
                <h3 className="text-xl font-display font-bold text-slate-900 uppercase tracking-wider">Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Nurturing intelligent leadership who advance and champion value-based structures, systems, and processes in the marketplace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">The foundational pillars that guide our every interaction and strategic decision.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              
              return (
                <motion.div 
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 md:p-10 lg:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-start group hover:-translate-y-1 hover:shadow-2xl hover:border-brand-200 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-slate-50 rounded-full blur-3xl group-hover:bg-brand-50 transition-colors duration-500 z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 text-brand-500 group-hover:bg-brand-50 transition-colors mb-6 shadow-sm">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-display font-extrabold text-slate-900 mb-4 tracking-tight">{value.name}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed text-lg">{value.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative aspect-square bg-slate-900 rounded-3xl p-12 flex flex-col justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-slate-900 to-slate-900"></div>
              
              <div className="relative z-10 space-y-12">
                <div className="text-center">
                  <div className="text-5xl font-display font-bold text-white mb-2">10%</div>
                  <div className="text-brand-600 font-medium uppercase tracking-widest text-sm">Intellectual Learning</div>
                  <div className="text-slate-400 text-sm mt-2">Creating Awareness</div>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-white mb-2">20%</div>
                  <div className="text-brand-600 font-medium uppercase tracking-widest text-sm">Adaptive Learning</div>
                  <div className="text-slate-400 text-sm mt-2">Acceptance & Adaptation</div>
                </div>
                
                <div className="text-center">
                  <div className="text-8xl font-display font-bold text-white mb-2">70%</div>
                  <div className="text-brand-600 font-medium uppercase tracking-widest text-sm">Application</div>
                  <div className="text-slate-400 text-sm mt-2">Learning by Doing via Coaching</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                The 10/20/70 Methodology
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Our training is designed for sustainable behavior change acknowledged by others. We focus on the powerful intersection of Toolset, Skillset, and Mindset.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Intellectual Learning (10%)</h4>
                    <p className="text-slate-600 mt-1">Creating awareness and introducing new concepts and frameworks.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Adaptive Learning (20%)</h4>
                    <p className="text-slate-600 mt-1">Creating acceptance and shaping leaders on how to adapt training for the workplace.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Application (70%)</h4>
                    <p className="text-slate-600 mt-1">"Learning by doing." Real-time coaching that supports behavior change and addresses leadership growth areas.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">Leadership & Board</h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">The experienced minds shaping the future of African enterprise.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-900 shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-colors duration-500"></div>
                  
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                    <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">{member.name}</h3>
                    <p className="text-brand-400 font-bold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">{member.role}</p>
                    
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden min-h-0">
                        <p className="text-slate-300 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out delay-150 pt-2">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
