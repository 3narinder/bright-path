"use client";

import { motion } from "framer-motion";

const LoadingDots = () => {
  return (
    <span
      className="inline-flex items-center justify-center gap-1.5"
      role="status"
      aria-label="Loading..."
    >
      <span className="sr-only">Loading...</span>

      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="h-2 w-2 rounded-full bg-current"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: dot * 0.15 - 0.3,
          }}
        />
      ))}
    </span>
  );
};

export default LoadingDots;
