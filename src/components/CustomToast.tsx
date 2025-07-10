import { toast } from "sonner";
import { CircleCheck, CircleX } from "lucide-react";

type ToastType = "success" | "error";

interface CustomToastProps {
  type: ToastType;
  source: string;
  value: string;
  message: string;
  duration?: number;
}

export default function CustomToast({
  type,
  source,
  value,
  message,
  duration = 3000,
}: CustomToastProps) {
  const isSuccess = type === "success";
  const Icon = isSuccess ? CircleCheck : CircleX;
  const iconClass = isSuccess ? "icon-success" : "icon-error";
  return toast.custom(
    () => (
      <div className="toast-box">
        <div className={iconClass}>
          <Icon className="toast-icon" />
        </div>
        <span>
          {source} : <span className="text-[var(--color-error)]">{value}</span>{" "}
          {message}
        </span>
      </div>
    ),
    {
      duration,
      position: "top-center",
    }
  );
}

// export const CustomToast ({
//   type,
//   source,
//   value,
//   message,
//   duration = 3000,
// }: CustomToastProps) => {
//   const isSuccess = type === "success";
//   const Icon = isSuccess ? CircleCheck : CircleX;
//   const iconClass = isSuccess ? "icon-success" : "icon-error";

//   toast.custom(
//     () => (
//       <div className="toast-box">
//         <div className={iconClass}>
//           <Icon className="toast-icon" />
//         </div>
//         <span>
//           {source} :{" "}
//           <span className="text-[var(--color-error)]">{value}</span>{" "}
//           {message}
//         </span>
//       </div>
//     ),
//     {
//       duration,
//       position: "top-center",
//     }
//   );
// };
