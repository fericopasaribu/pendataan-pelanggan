"use client";

import { Info } from "lucide-react";

interface CustomErrorProps {
  value: string;
  className?: string;
}

export function CustomError({ value, className = "error-text" }: CustomErrorProps) {
  return <div className={className}><Info className="error-icon"/>{value}</div>;
}
