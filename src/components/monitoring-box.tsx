import React from "react";

const Box = ({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "yellow" | "red" | "rose" | "indigo";
}) => {
  return (
    <div className={`rounded-lg bg-${color}-50 p-4`}>
      <div className="mb-2 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-${color}-100`}
        >
          <div className={`text-${color}-600 h-5 w-5`}>{icon}</div>
        </div>
        <span className="text-sm font-medium">{title}</span>
      </div>
      <p className={`text-lg font-bold text-${color}-600`}>{value}</p>
      <p className="text-xs text-gray-500">Hari ini</p>
    </div>
  );
};

export default Box;
