import { CUSTOM_TEXT } from "@/constants/CustomText";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <Image
        priority
        src={`/${CUSTOM_TEXT.dir_images}/${CUSTOM_TEXT.file_404}`}
        alt={CUSTOM_TEXT.text_loading}
        width={500}
        height={500}
        className="object-contain"
      />
    </div>
  );
}
