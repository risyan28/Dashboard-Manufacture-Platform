"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener,
      );
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      void deferredPrompt.prompt();
      void deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the install prompt");
          } else {
            console.log("User dismissed the install prompt");
          }
          setShowInstallBanner(false);
        })
        .catch((error) => {
          console.error("Error during installation:", error);
          setShowInstallBanner(false);
        });
    }
  };

  if (!showInstallBanner) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-full max-w-[95%] -translate-x-1/2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-center shadow-lg sm:max-w-xs">
      <p className="mb-2 whitespace-nowrap text-sm font-medium text-gray-800">
        Install App for a better experience.
      </p>
      <button
        onClick={handleInstall}
        className="flex w-full items-center justify-center gap-2 rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700"
      >
        <Download className="h-5 w-5" />
        Install App
      </button>
    </div>
  );
};
