import Link from "next/link";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { useMenuItems } from "~/hooks/useMenuItems";

export function QuickAccess() {
  const menuItems = useMenuItems();
=======

const menuItems = [
  {
    icon: "📦",
    label: "Production Plan",
    href: "/dashboard-user/manufacture/production-plan",
  },
  {
    icon: "⚙️",
    label: "Actual Output",
    href: "/dashboard-user/manufacture/actual-output",
  },
  {
    icon: "📈",
    label: "Efficiency Report",
    href: "/dashboard-user/manufacture/efficiency-report",
  },
  {
    icon: "⏱️",
    label: "Downtime Log",
    href: "/dashboard-user/manufacture/downtime-log",
  },
  {
    icon: "❌",
    label: "Defect Rate",
    href: "/dashboard-user/manufacture/defect-rate",
  },
  {
    icon: "📊",
    label: "OEE Monitor",
    href: "/dashboard-user/manufacture/oee-monitor",
  },
  {
    icon: "🔧",
    label: "Preventive Maintenance",
    href: "/dashboard-user/manufacture/preventive-maintenance",
  },
  {
    icon: "📅",
    label: "Shift Schedule",
    href: "/dashboard-user/manufacture/shift-schedule",
  },
  {
    icon: "📋",
    label: "Andon History",
    href: "/dashboard-user/manufacture/andon-history",
  },
  {
    icon: "🧪",
    label: "Quality Check",
    href: "/dashboard-user/manufacture/quality-check",
  },
  {
    icon: "📡",
    label: "Line Performance",
    href: "/dashboard-user/manufacture/line-performance",
  },
  {
    icon: "🧾",
    label: "Work Order",
    href: "/dashboard-user/manufacture/work-order",
  },
  {
    icon: "👤",
    label: "My Profile",
    href: "/dashboard-user/manufacture/my-profile",
  },
  { icon: "↩️", label: "Logout", href: "/" },
];

export function QuickAccess() {
>>>>>>> 16dd84d0543aa67d56cabe2c1b32718a729a2776
  return (
    <div className="container mx-auto mb-6 px-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Menu</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-7">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="w-full"
            whileHover={{ scale: 1.09 }}
            transition={{ duration: 0.3 }}
          >
            {" "}
            <Link
              href={item.href}
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm hover:bg-purple-100"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <span>{item.icon}</span>
              </div>
              <span className="text-center text-xs">{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
