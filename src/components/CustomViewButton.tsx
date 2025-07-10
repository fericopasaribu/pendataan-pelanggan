"use client";

import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface CustomViewButtonProps {
  label?: string;
  path?: string;
  className?: string;
  icon?: LucideIcon;
}

export default function CustomViewButton({
  label = "",
  path = "",
  className = "",
  icon: Icon,
}: CustomViewButtonProps) {
  const router = useRouter();

  return (
    <button className={`${className}`} onClick={() => router.push(path)}>
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </button>
  );
}
