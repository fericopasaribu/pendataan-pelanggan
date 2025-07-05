import { CUSTOM_TEXT } from "@/constants/CustomText";

export default function CustomFooter() {
  return (
    <div className="area-footer">
      <div className="text-footer">&copy; 2025 - {CUSTOM_TEXT.company}</div>
    </div>
  );
}
