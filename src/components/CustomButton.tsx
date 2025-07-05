"use client";

import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface CustomButtonProps {
  label?: string;
  path?: string;
  className?: string;
  icon?: LucideIcon;
}

export default function CustomButton({
  label = "",
  path = "",
  className = "",
  icon: Icon,
}: CustomButtonProps) {
  const router = useRouter();

  return (
    <button className={`${className}`} onClick={() => router.push(path)}>
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </button>
  );
}
