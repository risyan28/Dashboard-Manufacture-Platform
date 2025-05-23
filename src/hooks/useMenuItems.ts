// hooks/useMenuItems.ts

export interface MenuItem {
  icon: string;
  label: string;
  href: string;
  children?: MenuItem[];
}

export function useMenuItems(): MenuItem[] {
  return [
    {
      icon: "📦",
      label: "Production Sequence",
      href: "/dashboard-user/manufacture/production-plan",
      children: [],
    },
    {
      icon: "⚙️",
      label: "Actual Output",
      href: "/dashboard-user/manufacture/actual-output",
      children: [],
    },
    {
      icon: "📈",
      label: "Efficiency Report",
      href: "/dashboard-user/manufacture/efficiency-report",
      children: [],
    },
    {
      icon: "⏱️",
      label: "Downtime Log",
      href: "/dashboard-user/manufacture/downtime-log",
      children: [],
    },
    {
      icon: "❌",
      label: "Defect Rate",
      href: "/dashboard-user/manufacture/defect-rate",
      children: [],
    },
    {
      icon: "📊",
      label: "OEE Monitor",
      href: "/dashboard-user/manufacture/oee-monitor",
      children: [],
    },
    {
      icon: "🔧",
      label: "Preventive Maintenance",
      href: "/dashboard-user/manufacture/preventive-maintenance",
      children: [],
    },
    {
      icon: "📅",
      label: "Shift Schedule",
      href: "/dashboard-user/manufacture/shift-schedule",
      children: [],
    },
    {
      icon: "📋",
      label: "Andon History",
      href: "/dashboard-user/manufacture/andon-history",
      children: [],
    },
    {
      icon: "🧪",
      label: "Quality Check",
      href: "/dashboard-user/manufacture/quality-check",
      children: [],
    },
    {
      icon: "📡",
      label: "Line Performance",
      href: "/dashboard-user/manufacture/line-performance",
      children: [],
    },
    {
      icon: "🧾",
      label: "Work Order",
      href: "/dashboard-user/manufacture/work-order",
      children: [],
    },
    {
      icon: "👤",
      label: "My Profile",
      href: "/dashboard-user/manufacture/my-profile",
      children: [],
    },
    {
      icon: "↩️",
      label: "Logout",
      href: "/",
      children: [],
    },
  ];
}
