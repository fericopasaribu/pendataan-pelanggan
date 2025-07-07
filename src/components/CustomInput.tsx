"use client";

import { Input } from "@/components/ui/input";

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function CustomInput({
  value,
  onChange,
  placeholder = "",
  className = "",
}: CustomInputProps) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${className}`}
    />
  );
}
