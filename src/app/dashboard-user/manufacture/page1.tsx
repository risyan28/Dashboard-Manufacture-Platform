"use client";

import { useState } from "react";
import {
  Bell,
  Grid,
  Home,
  CreditCard,
  User,
  Clock,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  Wallet,
  LogOut,
  ClipboardList,
  CheckCircle,
  BarChart2,
  TimerOff,
  Package,
  Activity,
  TimerReset,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";
import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Overlay for when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Hidden by default, shown when menu clicked */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 transform border-r bg-white transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h1 className="text-xl font-bold text-blue-700">Dashboard App</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <div className="mb-6 px-4">
            <div className="mb-6 flex items-center gap-3">
              <Avatar className="h-10 w-10 border">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="User"
                />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h2 className="font-bold">A. RISYAN</h2>
                <p className="text-xs text-gray-500">risyan25@gmail.com</p>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            <Link
              href="#"
              className="flex items-center gap-3 border-r-4 border-purple-700 bg-purple-50 px-4 py-3 text-purple-700"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <Package className="h-5 w-5" />
              <span>Production Plan</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <Activity className="h-5 w-5" />
              <span>Efficiency</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <TimerReset className="h-5 w-5" />
              <span>Downtime</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <AlertTriangle className="h-5 w-5" />
              <span>Defect Rate</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 p-4 text-white">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Menu button - Hidden on mobile, visible on desktop */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden text-white md:flex"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-white">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                  />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h1 className="font-bold">A. RISYAN</h1>
                  <p className="text-xs opacity-80">Dept. Engineering</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold">Name Of Application</h1>
            </div>
          </div>
        </header>

        <div className="flex-1">
          <div className="mb-4 bg-white">
            <div className="container mx-auto px-4 py-4">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">Realtime Monitoring</h2>
              </div>
              {/* Mobile View */}
              <div className="block md:hidden">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Plan */}
                    <div className="rounded-lg bg-blue-50 p-3">
                      <div className="mb-2 flex flex-col">
                        <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                          <ClipboardList className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-xs font-medium">Plan</span>
                      </div>
                      <p className="text-base font-bold text-blue-600">
                        1.000 Unit
                      </p>
                      <p className="text-xs text-gray-500">Hari ini</p>
                    </div>

                    {/* Actual */}
                    <div className="rounded-lg bg-green-50 p-3">
                      <div className="mb-2 flex flex-col">
                        <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-xs font-medium">Actual</span>
                      </div>
                      <p className="text-base font-bold text-green-600">
                        850 Unit
                      </p>
                      <p className="text-xs text-gray-500">Hari ini</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Efficiency */}
                    <div className="rounded-lg bg-yellow-50 p-4">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                          <BarChart2 className="h-5 w-5 text-yellow-600" />
                        </div>
                        <span className="text-sm font-medium">Efficiency</span>
                      </div>
                      <p className="text-lg font-bold text-yellow-600">85%</p>
                      <p className="text-xs text-gray-500">Hari ini</p>
                    </div>

                    {/* Downtime */}
                    <div className="rounded-lg bg-red-50 p-4">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                          <TimerOff className="h-5 w-5 text-red-600" />
                        </div>
                        <span className="text-sm font-medium">Downtime</span>
                      </div>
                      <p className="text-lg font-bold text-red-600">35 Menit</p>
                      <p className="text-xs text-gray-500">Hari ini</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden md:grid md:grid-cols-4 md:gap-4">
                {/* Plan */}
                <div className="rounded-lg bg-blue-50 p-4">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <ClipboardList className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium">Plan</span>
                  </div>
                  <p className="text-lg font-bold text-blue-600">1.000 Unit</p>
                  <p className="text-xs text-gray-500">Hari ini</p>
                </div>

                {/* Actual */}
                <div className="rounded-lg bg-green-50 p-4">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-sm font-medium">Actual</span>
                  </div>
                  <p className="text-lg font-bold text-green-600">850 Unit</p>
                  <p className="text-xs text-gray-500">Hari ini</p>
                </div>

                {/* Efficiency */}
                <div className="rounded-lg bg-yellow-50 p-4">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                      <BarChart2 className="h-5 w-5 text-yellow-600" />
                    </div>
                    <span className="text-sm font-medium">Efficiency</span>
                  </div>
                  <p className="text-lg font-bold text-yellow-600">85%</p>
                  <p className="text-xs text-gray-500">Hari ini</p>
                </div>

                {/* Downtime */}
                <div className="rounded-lg bg-red-50 p-4">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <TimerOff className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="text-sm font-medium">Downtime</span>
                  </div>
                  <p className="text-lg font-bold text-red-600">35 Menit</p>
                  <p className="text-xs text-gray-500">Hari ini</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="container mx-auto mb-6 px-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Menu</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-7">
              {[
                { icon: "📦", label: "Production Plan" },
                { icon: "⚙️", label: "Actual Output" },
                { icon: "📈", label: "Efficiency Report" },
                { icon: "⏱️", label: "Downtime Log" },
                { icon: "❌", label: "Defect Rate" },
                { icon: "📊", label: "OEE Monitor" },
                { icon: "🔧", label: "Preventive Maintenance" },
                { icon: "📅", label: "Shift Schedule" },
                { icon: "📋", label: "Andon History" },
                { icon: "🧪", label: "Quality Check" },
                { icon: "📡", label: "Line Performance" },
                { icon: "🧾", label: "Work Order" },
                { icon: "👤", label: "My Profile" },
                { icon: "↩️", label: "Logout" },
              ].map((item, index) => (
                <Link
                  href="#"
                  key={index}
                  className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm hover:bg-gray-50"
                >
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <span>{item.icon}</span>
                  </div>
                  <span className="text-center text-xs">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Manufacturing Updates Section */}
          <div className="container mx-auto mb-10 px-4 md:mb-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Manufacturing Updates</h2>
              <Link href="#" className="text-sm text-blue-500">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                {
                  title: "Mesin A-01 Maintenance Hari Ini",
                  description:
                    "Scheduled maintenance pada mesin A-01 jam 14:00 - 16:00.",
                  img: "/images/maintenance.jpeg",
                },
                {
                  title: "Kualitas Produk Batch #1209",
                  description:
                    "Ditemukan defect rate di atas 5% pada batch #1209.",
                  img: "/images/quality-check.jpg",
                },
                {
                  title: "Penyesuaian Shift Minggu Ini",
                  description:
                    "Shift malam dimulai pukul 20:00 mulai hari Rabu.",
                  img: "/images/shift-schedule.png",
                },
                {
                  title: "Target Produksi April Diperbarui",
                  description: "Target baru: 15.000 unit/week untuk Line 3.",
                  img: "/images/production-target.webp",
                },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={item.img}
                      width={400}
                      height={200}
                      alt="News"
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-3">
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Safety and Complience  Section */}
          <div className="container mx-auto mb-10 px-4 md:mb-6">
            <div className="flex h-36 items-center justify-center rounded-xl bg-yellow-400 p-4 shadow-md md:p-6">
              {/* Responsive Wrapper */}
              <div className="flex w-full flex-row items-center justify-center space-y-4 text-center md:flex-row md:space-x-6 md:space-y-0">
                {/* Icon ⚠️ */}
                <div className="text-lg sm:text-4xl md:text-7xl lg:text-8xl">
                  ⚠️
                </div>

                {/* Teks Tengah */}
                <div className="px-2">
                  <h2 className="text-nowrap text-lg font-semibold text-black md:text-4xl">
                    Safety & Compliance
                  </h2>
                  <p className="text-nowrap text-sm text-black/80 md:text-2xl">
                    Patuhi Prosedur Keselamatan Kerja
                  </p>
                </div>

                {/* Icon Helm */}
                <div className="w-8 sm:w-20 md:w-40 lg:w-40 xl:w-40">
                  <Image
                    src="/images/safety-helmet.png"
                    width={512}
                    height={512}
                    alt="Safety Helmet"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mb-20 px-4 md:mb-6">
            {/* Grid untuk submenu */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Maintenance Dashboard Card */}
              <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-gray-800 md:text-2xl">
                  🛠️ Maintenance Dashboard
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  Pantau dan kelola aktivitas maintenance secara real-time.
                </p>
              </div>

              {/* Inventory & Material Flow Card */}
              <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="text-no mb-2 text-xl font-semibold text-gray-800 md:text-2xl">
                  📦 Inventory & Material Flow
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  Lacak pergerakan material dan ketersediaan inventory secara
                  efisien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Only visible on small screens */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white py-2 md:hidden">
        <div className="flex justify-around">
          <Link
            href="#"
            className="flex flex-col items-center text-xs text-purple-700"
          >
            <div className="flex h-6 w-6 items-center justify-center">
              <span>📦</span>
            </div>
            <span>Plan</span>
          </Link>
          <Link href="#" className="flex flex-col items-center text-xs">
            <div className="flex h-6 w-6 items-center justify-center">
              <span>⚙️</span>
            </div>
            <span>Output</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <div className="-mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-700 text-white">
              <Grid className="h-5 w-5" />
            </div>
          </Link>
          <Link href="#" className="flex flex-col items-center text-xs">
            <div className="flex h-6 w-6 items-center justify-center">
              <span>❌</span>
            </div>
            <span>Defect</span>
          </Link>
          <Link href="#" className="flex flex-col items-center text-xs">
            <div className="flex h-6 w-6 items-center justify-center">
              <span>👤</span>
            </div>
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
