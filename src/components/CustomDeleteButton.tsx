import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CUSTOM_TEXT } from "@/constants/CustomText";
import { Info, Trash } from "lucide-react";

interface CustomDeleteButtonProps {
  source: string;
  id: number;
  text: string;
  onDelete: () => void;
}

export function CustomDeleteButton({
  source,
  //   id,
  text,
  onDelete,
}: CustomDeleteButtonProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="btn-action-delete"
          title="Hapus Data">
          <Trash />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="alert-title text-xl">
            <Info className="w-5 h-5" />
            {CUSTOM_TEXT.text_informasi}
          </AlertDialogTitle>
          <AlertDialogDescription className="alert-desc text-base">
            {`${source} : `}
            <span className="text-[var(--color-error)]">{text}</span>{" "}
            {CUSTOM_TEXT.text_konfirmasi_hapus}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="btn-alert-secondary">
            {CUSTOM_TEXT.text_tidak}
          </AlertDialogCancel>
          <AlertDialogAction
            className="btn-alert-primary"
            onClick={() => onDelete()}>
            {CUSTOM_TEXT.text_ya}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
