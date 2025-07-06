"use client";

import { LucideIcon } from "lucide-react";

interface CustomReloadProps {
  label?: string;
  className?: string;
  icon?: LucideIcon;
  onClick: () => void;
}

export default function CustomReloadButton({
  label = "",
  className = "",
  icon: Icon,
  onClick,
}: CustomReloadProps) {
  return (
    <button
      className={`${className}`}
      onClick={() => {
        onClick?.();
        location.reload();
      }}>
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </button>
  );
}
