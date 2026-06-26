"use client";

import { motion } from "framer-motion";

export default function SplitText({
  text,
  className = "",
  delay = 0,
}) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: delay + index * 0.055,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {index !== words.length - 1 && "\u00A0"}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
}