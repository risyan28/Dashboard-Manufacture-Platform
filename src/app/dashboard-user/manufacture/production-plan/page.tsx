"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProductionPlanPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-8xl mx-auto w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      {/* Header Section - Modified for mobile single-line layout */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 flex items-center gap-4 sm:items-start sm:gap-6"
      >
        {/* Loading State for Back Button */}
        {isLoading ? (
          <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200 sm:h-12 sm:w-12" />
        ) : (
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(243, 244, 246, 0.8)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.history.back()}
            className="shrink-0 rounded-full bg-white p-2 shadow-sm backdrop-blur-sm transition-all sm:p-3"
            aria-label="Back"
          >
            <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.button>
        )}

        {/* Loading State for Title Group - Modified layout */}
        {isLoading ? (
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-3/4 rounded bg-gray-200 sm:h-10" />
            </div>
            <div className="h-1 w-full rounded bg-gray-200 sm:mt-2" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex-1"
          >
            <div className="flex flex-col sm:block">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-4xl">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Production Plan
                  </span>
                </h1>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="mt-2 h-0.5 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-transparent sm:mt-3"
              />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Main Content Area */}
      {isLoading ? (
        <div className="space-y-4">
          <div className="h-64 rounded-xl bg-gray-200 sm:h-80" />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="min-h-[200px] rounded-xl border border-gray-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:h-80 sm:p-6"
        >
          {/* Data Visualization Placeholder */}
          <div className="flex h-full items-center justify-center">
            <p className="text-center text-gray-400">
              Production analytics will appear here
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
