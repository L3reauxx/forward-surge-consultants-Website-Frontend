import { motion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightText?: string;
  highlightClassName?: string;
  delayOffset?: number;
}

export function AnimatedText({ text, className, highlightText, highlightClassName, delayOffset = 0 }: AnimatedTextProps) {
  // We can just split by words
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delayOffset * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => {
        let isHighlight = false;
        if (highlightText && highlightText.includes(word.replace(/[^a-zA-Z]/g, ''))) {
          // crude highlight check
        }
        // Actually, it's easier to just pass children if we want specific spans.
        // Let's adjust this to support ReactNode or just an array of words/spans
        return (
          <motion.span
            variants={child}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
