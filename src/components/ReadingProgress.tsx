import { motion, useScroll, useSpring } from 'motion/react';
import { useLocation } from 'react-router-dom';

export default function ReadingProgress() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Only show on specific long-form pages or globally.
  // The user requested it for long-form content like blog or about.
  // We can show it everywhere, if there's no scroll, it just stays at 0 or 100%.
  // Let's restrict it to /blog, /about, /programs
  const showProgress = ['/blog', '/about', '/programs'].some(path => pathname.startsWith(path));

  if (!showProgress) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}
