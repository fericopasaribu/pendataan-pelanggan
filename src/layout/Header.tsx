import { STRINGS } from "@/constant/Text";
import Image from "next/image";
import React from "react";

export default function LayoutHeader() {
  return (
    <div className="area-header">
      <Image
        src="/images/logo.png"
        width={64}
        height={64}
        alt="Logo"
        sizes="(max-width: 640px) 48px, 64px"
        className="w-12 h-12 ml-0 mr-3 my-3 sm:w-16 sm:h-16 sm:ml-10"
      />
      <div className="text-header">{STRINGS.company}</div>
    </div>
  );
}
