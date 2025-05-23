"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="w-full py-4 text-center text-sm text-gray-500"
    >
      <p>
        ● {new Date().getFullYear()} e-WOS Dashboard ● Create By Adaptive Automation System ●
      </p>
    </motion.div>
  );
}
