import { CUSTOM_TEXT } from "@/constants/CustomText";
import Image from "next/image";

export default function CustomHeader() {
  return (
    <div className="area-header">
      <Image
        src={`/${CUSTOM_TEXT.dir_images}/${CUSTOM_TEXT.file_logo}`}
        width={64}
        height={64}
        alt="Logo"
        sizes="(max-width: 640px) 48px, 64px"
        className="image-header"
        priority
      />
      <div className="text-header">{CUSTOM_TEXT.text_company}</div>
    </div>
  );
}
