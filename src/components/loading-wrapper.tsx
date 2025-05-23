"use client";

import { useState, useEffect, type ReactNode } from "react";
import { Skeleton } from "~/components/ui/skeleton";
import { motion } from "framer-motion";

interface LoadingWrapperProps {
  children: ReactNode;
  type: "stats" | "grid" | "cards" | "banner" | "submenu";
  delay?: number;
}

export function LoadingWrapper({
  children,
  type,
  delay = 0,
}: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000 + delay); // Base loading time + custom delay

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return (
      <div className="w-full">
        {type === "stats" && <StatsSkeletons />}
        {type === "grid" && <GridSkeletons />}
        {type === "cards" && <CardsSkeletons />}
        {type === "banner" && <BannerSkeleton />}
        {type === "submenu" && <SubmenuSkeletons />}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// Skeleton for RealtimeStats
function StatsSkeletons() {
  return (
    <div className="container mx-auto mb-4 px-4 py-4">
      <Skeleton className="mb-4 h-8 w-48" />
      <div className="hidden md:grid md:grid-cols-4 md:gap-4">
        {Array.from<number>({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-lg" />
        ))}
      </div>
      <div className="block md:hidden">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            {Array.from<number>({ length: 2 }).map((_, i) => (
              <Skeleton key={i} className="h-28 w-full rounded-lg" />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from<number>({ length: 2 }).map((_, i) => (
              <Skeleton key={i} className="h-28 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Skeleton for QuickAccess
function GridSkeletons() {
  return (
    <div className="container mx-auto mb-6 px-4">
      <Skeleton className="mb-4 h-8 w-32" />
      <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-7">
        {Array.from<number>({ length: 14 }).map((_, i) => (
          <Skeleton key={i} className="h-20 w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
}

// Skeleton for ManufacturingUpdates
function CardsSkeletons() {
  return (
    <div className="container mx-auto mb-10 px-4 md:mb-6">
      <div className="mb-4 flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-6 w-20" />
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from<number>({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-64 w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
}

// Skeleton for SafetyCompliance
function BannerSkeleton() {
  return (
    <div className="container mx-auto mb-10 px-4 md:mb-6">
      <Skeleton className="h-36 w-full rounded-xl" />
    </div>
  );
}

// Skeleton for SubmenuCards
function SubmenuSkeletons() {
  return (
    <div className="container mx-auto mb-20 px-4 md:mb-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Array.from<number>({ length: 2 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
}
