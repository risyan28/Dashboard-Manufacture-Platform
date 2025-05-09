"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "~/components/ui/card";
import { ArrowRight, Presentation, Factory } from "lucide-react";
import { useEffect, useRef } from "react";

interface DashboardOption {
  title: string;
  description: string;
  href: string;
  icon: JSX.Element;
  color: string;
}

const dashboards: DashboardOption[] = [
  {
    title: "Cluster Dashboard",
    description: "All your residential needs, in one smart app",
    href: "/dashboard-user/cluster",
    icon: <Presentation className="h-6 w-6 text-white" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Manufacture Dashboard",
    description: "Smart factory metrics and machine performance",
    href: "/dashboard-user/manufacture",
    icon: <Factory className="h-6 w-6 text-white" />,
    color: "from-purple-500 to-pink-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function DashboardSelector(): JSX.Element {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx || !particlesRef.current) return;

    particlesRef.current.appendChild(canvas);
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "0";

    const particles: { x: number; y: number; dx: number; dy: number }[] = [];
    const particleCount = 60;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 1,
          dy: (Math.random() - 0.5) * 1,
        });
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animate();
    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      window.removeEventListener("resize", resize);
      particlesRef.current?.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={particlesRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#f9f9f9] via-[#e0f2ff] to-[#c2d3ff] bg-cover bg-center p-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-4 whitespace-nowrap bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-5xl"
      >
        Welcome To Dashboard Portal
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 mb-10 max-w-xl text-center text-sm text-gray-600 md:text-base"
      >
        Select your operational intelligence interface. Each dashboard provides
        specialized analytics and control systems.
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
      >
        {dashboards.map((item: DashboardOption, idx: number) => (
          <motion.div key={idx} variants={itemVariants}>
            <Link href={item.href}>
              <motion.div
                whileHover={{ scale: 1.08, zIndex: 20 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer"
              >
                <Card
                  className="rounded-2xl border border-white/30 bg-white/70 shadow-xl backdrop-blur-xl transition-transform hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] hover:ring-4 hover:ring-opacity-50 hover:ring-offset-2 hover:ring-offset-white"
                  style={{ boxShadow: `0 0 20px rgba(0,0,0,0.1)` }}
                >
                  <CardContent className="space-y-4 p-6">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} animate-pulse shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 md:text-xl">
                      {item.title}
                    </h2>
                    <p className="mb-4 text-sm text-gray-600">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center font-medium text-blue-600">
                      Enter Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
