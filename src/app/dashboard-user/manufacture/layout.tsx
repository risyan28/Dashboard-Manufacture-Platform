"use client";

import type React from "react";
import { useState } from "react";
import { Sidebar } from "~/components/manufacture/dashboard/sidebar";
import { Header } from "~/components/manufacture/dashboard/header";
import { BottomNav } from "~/components/manufacture/dashboard/BottomNav";
import { motion } from "framer-motion";
import { Footer } from "~/components/manufacture/dashboard/Footer";
import { AnimatePresence } from "framer-motion";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Overlay for when sidebar is open */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-20 bg-black/20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col">
        {/* Header Component */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <AnimatePresence mode="wait">
          <motion.main
            key={
              typeof window !== "undefined"
                ? window.location.pathname
                : "default"
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        {/* Footer Component */}
        <Footer />
      </div>

      <BottomNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
    </div>
  );
}
