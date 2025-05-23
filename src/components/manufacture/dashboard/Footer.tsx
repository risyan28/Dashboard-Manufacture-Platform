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
<<<<<<< HEAD
      <p>
        ● {new Date().getFullYear()} e-WOS Dashboard ● Create By Adaptive Automation System ●
      </p>
=======
      <p>© {new Date().getFullYear()} Manufacturing Dashboard</p>
>>>>>>> 16dd84d0543aa67d56cabe2c1b32718a729a2776
    </motion.div>
  );
}
