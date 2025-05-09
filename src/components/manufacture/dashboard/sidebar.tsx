"use client";
import Link from "next/link";
import {
  Home,
  Package,
  Activity,
  TimerReset,
  AlertTriangle,
  User,
  LogOut,
  X,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import type { SidebarProps } from "./types";

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  // Component content remains the same
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-72 transform border-r bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Component content remains the same */}
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-purple-600 to-indigo-600 font-bold text-white">
            M
          </div>
          <h1 className="whitespace-nowrap text-base font-bold text-gray-800 sm:text-lg md:text-xl">
            Manufacture App
          </h1>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <div className="mb-6 px-4">
          <div className="mb-6 flex items-center gap-3 rounded-lg bg-gray-50 p-3">
            <Avatar className="h-10 w-10 border">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="User"
              />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="font-bold">A. RISYAN</h2>
              <p className="text-xs text-gray-500">risyan25~gmail.com</p>
            </div>
          </div>
        </div>

        {/* Rest of the sidebar content remains unchanged */}
        <div className="mb-2 px-3">
          <p className="mb-2 px-3 text-xs font-medium text-gray-500">
            MENU UTAMA
          </p>
        </div>
        <nav className="space-y-1 px-3">
          <Link
            href="/dashboard-user/manufacture"
            className="flex items-center gap-3 rounded-md bg-purple-50 px-3 py-2 text-purple-700"
          >
            <Home className="h-5 w-5" />
            <span className="font-medium">Beranda</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2"
          >
            <Package className="h-5 w-5" />
            <span>Production Plan</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2"
          >
            <Activity className="h-5 w-5" />
            <span>Efficiency</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2"
          >
            <TimerReset className="h-5 w-5" />
            <span>Downtime</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2"
          >
            <AlertTriangle className="h-5 w-5" />
            <span>Defect Rate</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2"
          >
            <User className="h-5 w-5" />
            <span>Profile</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
