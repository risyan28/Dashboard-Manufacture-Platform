"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";

interface NavigationHandlerProps {
  onNavigate?: () => void;
}

export function NavigationHandler({ onNavigate }: NavigationHandlerProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Store the current path in sessionStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const previousPath = sessionStorage.getItem("previousPath");

      // Only update if the path has changed
      if (previousPath !== pathname) {
        sessionStorage.setItem("previousPath", pathname);
      }
    }
  }, [pathname]);

  // Custom back function that can be used throughout the app
  const goBack = useCallback(() => {
    if (typeof window !== "undefined") {
      // Get the previous path from sessionStorage
      const previousPath =
        sessionStorage.getItem("previousPath") ?? "/dashboard-user/manufacture";

      // If we have a previous path and it's different from current, navigate to it
      if (previousPath && previousPath !== pathname) {
        router.push(previousPath);
      } else {
        // Default fallback
        router.push("/dashboard-user/manufacture");
      }

      // Call the onNavigate callback if provided
      if (onNavigate) {
        onNavigate();
      }
    }
  }, [router, pathname, onNavigate]);

  // Expose the goBack function globally
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.appNavigation = {
        goBack,
      };
    }

    return () => {
      if (typeof window !== "undefined") {
        delete window.appNavigation;
      }
    };
  }, [goBack]);

  return null;
}
