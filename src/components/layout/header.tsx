"use client";
import { Skeleton } from "~/components/ui/skeleton";

interface HeaderProps {
  isLoading: boolean;
}

export function Header({ isLoading }: HeaderProps) {
  if (isLoading) {
    return (
      <div className="flex h-14 w-full items-center justify-between bg-gradient-to-r from-blue-500 to-cyan-500 px-4">
        <div className="flex items-center">
          <Skeleton className="h-6 w-6 bg-white/20" />
          <Skeleton className="ml-4 h-5 w-32 bg-white/20" />
        </div>
        <Skeleton className="h-5 w-20 bg-white/20" />
        <div className="flex items-center">
          <div className="mr-4 text-right">
            <Skeleton className="h-4 w-24 bg-white/20" />
            <Skeleton className="mt-1 h-3 w-32 bg-white/20" />
          </div>
          <Skeleton className="h-8 w-8 rounded-full bg-white/20" />
        </div>
      </div>
    );
  }

  return null; // Actual header will be rendered by your existing component
}
