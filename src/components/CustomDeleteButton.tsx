import { Info, Trash } from "lucide-react";
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
            Informasi
          </AlertDialogTitle>
          <AlertDialogDescription className="alert-desc text-base">
            Data {source}:{" "}
            <span className="text-[var(--color-error)]">{text}</span> Ingin
            Dihapus ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="btn-alert-secondary">
            Tidak
          </AlertDialogCancel>
          <AlertDialogAction
            className="btn-alert-primary"
            onClick={() => onDelete()}>
            Ya
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
