import { CUSTOM_TEXT } from "@/constants/CustomText";
import Image from "next/image";

export default function CustomHeader() {
  return (
    <div className="area-header">
      <Image
        src="/images/logo.png"
        width={64}
        height={64}
        alt="Logo"
        sizes="(max-width: 640px) 48px, 64px"
        className="image-header"
        priority
      />
      <div className="text-header">{CUSTOM_TEXT.company}</div>
    </div>
  );
}
