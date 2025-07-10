"use client";

import { LucideIcon } from "lucide-react";

interface CustomFormButtonProps {
  label?: string;
  className?: string;
  icon?: LucideIcon;
  onClick: () => void;
}

export default function CustomFormButton({
  label = "",
  className = "",
  icon: Icon,
  onClick,
}: CustomFormButtonProps) {
  return (
    <button className={`${className}`} onClick={() => onClick()}>
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </button>
  );
}
