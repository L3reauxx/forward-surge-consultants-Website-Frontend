import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  stage: string;
  programOfInterest: string;
  challenge: string;
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    defaultValues: {
      programOfInterest: searchParams.get('program') || '',
    },
    mode: 'onTouched'
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        
        {/* Left Side: Content & Quote */}
        <div className="stripe-gradient text-slate-900 p-8 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="absolute inset-0 bg-dot-pattern opacity-50"></div>
          
          <div className="relative z-10 max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight mb-12 leading-[1.1] text-balance">
                "A problem clearly stated is already half solved."
                <span className="block text-xl font-bold text-brand-700 mt-6 tracking-wider uppercase">— African Proverb</span>
              </h1>
              
              <div className="space-y-8 text-slate-600">
                <p className="text-lg leading-relaxed font-medium">
                  Let's clearly state your business challenges and aspirations. Reach out today to discover how Forward Surge can equip your leadership team for sustainable success.
                </p>
                
                <div className="space-y-6 pt-8 border-t border-slate-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 uppercase tracking-wider text-xs">Call Us</p>
                      <p className="text-slate-600 font-medium">+254 703 868 689 / +254 704 868 689</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 uppercase tracking-wider text-xs">Email</p>
                      <p className="text-slate-600 font-medium">info@forwardsurge.org</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 uppercase tracking-wider text-xs">Location</p>
                      <p className="text-slate-600 font-medium">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 lg:p-24 flex flex-col justify-center border-l border-slate-100">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl w-full mx-auto"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-3 tracking-tight">Book a Consultation</h2>
              <p className="text-slate-500 font-medium leading-relaxed">Propel your business growth today. Fill out the form below and our team will get back to you shortly.</p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Request Received!</h3>
                <p className="text-green-700">Thank you for reaching out. A consultant will contact you within 24 hours to schedule your session.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">First Name</label>
                    <input 
                      id="firstName" 
                      {...register("firstName", { required: "First name is required" })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-brand-500 focus:ring-brand-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-200'} focus:ring-2 outline-none transition-all focus:-translate-y-1 focus:shadow-lg focus:shadow-brand-900/10 focus:bg-white bg-slate-50`} 
                    />
                    {errors.firstName && <p className="text-brand-600 text-xs font-medium mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Last Name</label>
                    <input 
                      id="lastName" 
                      {...register("lastName", { required: "Last name is required" })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-brand-500 focus:ring-brand-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-200'} focus:ring-2 outline-none transition-all focus:-translate-y-1 focus:shadow-lg focus:shadow-brand-900/10 focus:bg-white bg-slate-50`} 
                    />
                    {errors.lastName && <p className="text-brand-600 text-xs font-medium mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Work Email</label>
                    <input 
                      id="email" 
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-brand-500 focus:ring-brand-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-200'} focus:ring-2 outline-none transition-all focus:-translate-y-1 focus:shadow-lg focus:shadow-brand-900/10 focus:bg-white bg-slate-50`} 
                    />
                    {errors.email && <p className="text-brand-600 text-xs font-medium mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                    <input 
                      id="phone" 
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: {
                          value: /^\+?[0-9\s\-()]{7,15}$/,
                          message: "Invalid phone number"
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-brand-500 focus:ring-brand-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-200'} focus:ring-2 outline-none transition-all focus:-translate-y-1 focus:shadow-lg focus:shadow-brand-900/10 focus:bg-white bg-slate-50`} 
                    />
                    {errors.phone && <p className="text-brand-600 text-xs font-medium mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Company</label>
                    <input 
                      id="company" 
                      {...register("company", { required: "Company is required" })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.company ? 'border-brand-500 focus:ring-brand-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-200'} focus:ring-2 outline-none transition-all focus:-translate-y-1 focus:shadow-lg focus:shadow-brand-900/10 focus:bg-white bg-slate-50`} 
                    />
                    {errors.company && <p className="text-brand-600 text-xs font-medium mt-1">{errors.company.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="stage" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Leadership Stage</label>
                    <select 
                      id="stage" 
                      {...register("stage", { required: "Please select a leadership stage" })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.stage ? 'border-brand-500 focus:ring-brand-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-200'} focus:ring-2 outline-none transition-all focus:-translate-y-1 focus:shadow-lg focus:shadow-brand-900/10 focus:bg-white bg-slate-50 appearance-none font-medium`}
                    >
                      <option value="">Select a stage...</option>
                      <option value="emergent">Emergent</option>
                      <option value="growth">Growth</option>
                      <option value="strategic">Strategic</option>
                      <option value="legacy">Legacy</option>
                    </select>
                    {errors.stage && <p className="text-brand-600 text-xs font-medium mt-1">{errors.stage.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="programOfInterest" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Program of Interest (Optional)</label>
                  <select 
                    id="programOfInterest" 
                    {...register("programOfInterest")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all focus:-translate-y-1 focus:shadow-lg focus:shadow-brand-900/10 focus:bg-white bg-slate-50 appearance-none font-medium"
                  >
                    <option value="">General Inquiry</option>
                    <option value="lamp">LAMP</option>
                    <option value="bold">BOLD</option>
                    <option value="lead-coach">LEAD COACH</option>
                    <option value="leadxprnc">LEADXPRNC®</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="challenge" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Biggest Challenge</label>
                  <textarea 
                    id="challenge" 
                    rows={4} 
                    {...register("challenge", { required: "Please tell us about your biggest challenge" })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.challenge ? 'border-brand-500 focus:ring-brand-200' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-200'} focus:ring-2 outline-none transition-all focus:-translate-y-1 focus:shadow-lg focus:shadow-brand-900/10 focus:bg-white bg-slate-50 resize-none`}
                  ></textarea>
                  {errors.challenge && <p className="text-brand-600 text-xs font-medium mt-1">{errors.challenge.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center py-4 px-8 bg-slate-900 hover:bg-brand-500 hover:scale-[1.02] active:scale-[0.98] text-white font-bold rounded-xl shadow-xl shadow-slate-200 transition-all duration-300 hover:shadow-brand-500/20 focus:ring-4 focus:ring-brand-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-slate-900"
                >
                  {isSubmitting ? (
                    <>
                      Submitting
                      <Loader2 className="ml-2 w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit Request
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
