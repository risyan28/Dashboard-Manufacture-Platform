"use client";

import { RealtimeStats } from "~/components/manufacture/dashboard/RealtimeStats";
import { QuickAccess } from "~/components/manufacture/dashboard/QuickAccess";
import { ManufacturingUpdates } from "~/components/manufacture/dashboard/ManufacturingUpdates";
import { SafetyCompliance } from "~/components/manufacture/dashboard/SafetyCompliance";
import { SubmenuCards } from "~/components/manufacture/dashboard/SubmenuCards";

export default function Dashboard() {
  return (
    <>
      <RealtimeStats />
      <QuickAccess />
      <ManufacturingUpdates />
      <SafetyCompliance />
      <SubmenuCards />
    </>
  );
}
