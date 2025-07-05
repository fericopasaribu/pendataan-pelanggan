"use client";

import { useRouter } from "next/navigation";

interface CustomButtonProps {
  label?: string;
  path?: string;
  className?: string;
}

export default function CustomButton({
  label = "",
  path = "",
  className = "",
}: CustomButtonProps) {
  const router = useRouter();

  return (
    <button className={`${className}`} onClick={() => router.push(path)}>
      {label}
    </button>
  );
}
