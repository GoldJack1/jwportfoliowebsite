import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageSlider({ children }) {
  // children: [outgoingPage, incomingPage] or [currentPage]
  if (!Array.isArray(children) || children.length === 1) {
    // No transition, just render the single page
    return <div style={{ minHeight: '100vh', width: '100%', background: '#000', position: 'relative' }}>{children}</div>;
  }

  const [outgoing, incoming] = children;

  const fadeVariants = {
    initial: { opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
    animate: { opacity: 1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
    exit: { opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#000' }}>
      <AnimatePresence mode="wait">
        {outgoing && (
          <motion.div
            key={outgoing.key + '-out'}
            variants={fadeVariants}
            initial="animate"
            animate="exit"
            exit="exit"
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ pointerEvents: 'none' }}
          >
            {outgoing}
          </motion.div>
        )}
        {incoming && (
          <motion.div
            key={incoming.key + '-in'}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit={false}
            transition={{ duration: 0.4 }}
          >
            {incoming}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 