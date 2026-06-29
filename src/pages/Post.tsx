import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { AnimatedBlob } from '../components/AnimatedBlob';

export default function Post() {
  const { id } = useParams();
  
  // Placeholder data - in a real app, you'd fetch based on the ID
  const post = {
    title: "How to get ready for agentic commerce in an evolving landscape",
    category: "Industry updates",
    date: "March 15, 2024",
    author: "Douglas Kihoro",
    authorRole: "Principal Strategist",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    content: `
      <p>The business landscape is undergoing a fundamental shift. Leaders are increasingly tasked with navigating complex environments where agentic behavior—the ability to act independently and make choices—is becoming a critical competency at all levels of the organization.</p>
      
      <h2>The Shift to Agentic Commerce</h2>
      <p>In traditional models, decision-making was highly centralized. However, as organizations scale and markets become more volatile, this top-down approach creates bottlenecks. Agentic commerce represents a shift towards decentralized, empowered teams that can respond to market signals in real-time.</p>
      
      <p>This transition requires more than just a change in organizational chart structure; it necessitates a profound shift in leadership mindset and operational frameworks.</p>
      
      <blockquote>
        "The manager who comes up with the right solution to the wrong problem is more dangerous than the manager who comes up with the wrong solution to the right problem." — Peter F. Drucker
      </blockquote>
      
      <h2>Key Strategies for Implementation</h2>
      <p>To successfully navigate this transition, organizations must focus on three core areas:</p>
      <ul>
        <li><strong>Strategic Harmonization:</strong> Ensuring that every team member understands not just their immediate goals, but the overarching vision of the organization.</li>
        <li><strong>Capacity Building:</strong> Equipping managers with the tools and frameworks needed to coach their teams effectively.</li>
        <li><strong>Data-Driven Autonomy:</strong> Providing teams with the necessary data to make informed decisions quickly.</li>
      </ul>
      
      <p>By focusing on these areas, organizations can build resilient, agile teams capable of thriving in the modern business environment.</p>
    `
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <AnimatedBlob />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to={-1 as any} className="inline-flex items-center text-slate-500 hover:text-brand-600 transition-colors font-medium text-sm uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </motion.div>

        {/* Header */}
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-6"
          >
            <span className="text-brand-600 font-bold text-sm uppercase tracking-wider">{post.category}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-medium text-sm">{post.date}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance mb-8"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between border-y border-slate-100 py-6"
          >
            <div className="flex items-center space-x-4">
              <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-bold text-slate-900">{post.author}</div>
                <div className="text-slate-500 text-sm font-medium">{post.authorRole}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-slate-400">
              <button className="hover:text-brand-600 transition-colors"><Twitter className="w-5 h-5" /></button>
              <button className="hover:text-brand-600 transition-colors"><Linkedin className="w-5 h-5" /></button>
              <button className="hover:text-brand-600 transition-colors"><Facebook className="w-5 h-5" /></button>
              <button className="hover:text-brand-600 transition-colors"><Share2 className="w-5 h-5" /></button>
            </div>
          </motion.div>
        </header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16 rounded-3xl overflow-hidden aspect-[21/9] bg-slate-100"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg prose-slate mx-auto
            prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
            prose-p:font-medium prose-p:leading-relaxed prose-p:text-slate-600
            prose-a:text-brand-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-brand-500 prose-blockquote:bg-brand-50 prose-blockquote:p-6 prose-blockquote:rounded-xl prose-blockquote:font-display prose-blockquote:text-xl prose-blockquote:not-italic prose-blockquote:text-slate-900 prose-blockquote:font-semibold
            prose-li:text-slate-600 prose-li:font-medium
            prose-strong:text-slate-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
      </article>
    </div>
  );
}
