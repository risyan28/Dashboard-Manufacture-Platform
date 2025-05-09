import { ClipboardList, CheckCircle, BarChart2, TimerOff } from "lucide-react";
import { motion } from "framer-motion";

export function RealtimeStats() {
  return (
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
                <p className="text-base font-bold text-blue-600">1.000 Unit</p>
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
                <p className="text-base font-bold text-green-600">850 Unit</p>
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
        <div className="hidden cursor-pointer md:grid md:grid-cols-4 md:gap-4">
          {/* Plan */}
          <motion.div
            className="w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>

          {/* Actual */}
          <motion.div
            className="w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {" "}
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
          </motion.div>

          {/* Efficiency */}
          <motion.div
            className="w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {" "}
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
          </motion.div>

          {/* Downtime */}
          <motion.div
            className="w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {" "}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
