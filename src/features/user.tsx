"use client";

import { CustomDeleteButton } from "@/components/CustomDeleteButton";
import { CustomImageDialog } from "@/components/CustomImageDialog";
import { Button } from "@/components/ui/button";
import { deleteData } from "@/models/user";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowDown,
  ArrowUp,
  CircleCheck,
  CircleX,
  Pencil
} from "lucide-react";
import { toast } from "sonner";

type Pelanggan = {
  id: number;
  nomor: string;
  nama: string;
  alamat: string;
  telepon: string;
  foto: string;
};

const handleEditData = (id: number) => {
  console.log("Edit item", id);
  // Arahkan ke halaman edit atau buka modal
};

const handleDeleteData = async (id: number, nomor: string) => {
  try {
    await deleteData(id);

    toast.custom(
      () => (
        <div className="toast-box">
          <div className="icon-success">
            <CircleCheck className="toast-icon" />
          </div>
          <span>Data Pelanggan : {nomor} Berhasil Dihapus</span>
        </div>
      ),
      {
        duration: 3000,
        position: "top-center",
      }
    );
  } catch {
    toast.custom(
      () => (
        <div className="toast-box">
          <div className="icon-error">
            <CircleX className="toast-icon" />
          </div>
          <span>Data Pelanggan : {nomor} Gagal Dihapus !</span>
        </div>
      ),
      {
        duration: 3000,
        position: "top-center",
      }
    );
  } finally {
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
};

export const columns: ColumnDef<Pelanggan>[] = [
  {
    id: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="area-btn-action">
          <Button
            variant="ghost"
            className="btn-action-edit"
            title="Edit Data"
            onClick={() => handleEditData(data.id)}>
            <Pencil />
          </Button>
          {/* <Button
            variant="ghost"
            className="btn-action-delete"
            title="Hapus Data"
            onClick={() => {HapusButton(id)}}>
            <Trash />
          </Button> */}

          <CustomDeleteButton
            source="Pelanggan"
            id={data.id}
            text={data.nomor}
            onDelete={() => handleDeleteData(data.id, data.nomor)}
          />
        </div>
      );
    },
    meta: { align: "center", width: "w-[7%]" },
  },

  {
    accessorKey: "nomor",
    header: ({ column }) => {
      const sort = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          className="table-th-title p-7 text-[1em]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nomor
          <div className="table-th-sort">
            {sort === "asc" ? (
              <>
                <ArrowUp className="table-th-sort-active" />
                <ArrowDown className="table-th-sort-inactive" />
              </>
            ) : sort === "desc" ? (
              <>
                <ArrowUp className="table-th-sort-inactive" />
                <ArrowDown className="table-th-sort-active" />
              </>
            ) : (
              <>
                <ArrowUp className="table-th-sort-inactive" />
                <ArrowDown className="table-th-sort-inactive" />
              </>
            )}
          </div>
        </Button>
      );
    },
    meta: { align: "center", width: "w-[10%]" },
    // enableGlobalFilter: true,
  },
  {
    accessorKey: "nama",
    header: ({ column }) => {
      const sort = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          className="table-th-title p-7 text-[1em]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nama
          <div className="table-th-sort">
            {sort === "asc" ? (
              <>
                <ArrowUp className="table-th-sort-active" />
                <ArrowDown className="table-th-sort-inactive" />
              </>
            ) : sort === "desc" ? (
              <>
                <ArrowUp className="table-th-sort-inactive" />
                <ArrowDown className="table-th-sort-active" />
              </>
            ) : (
              <>
                <ArrowUp className="table-th-sort-inactive" />
                <ArrowDown className="table-th-sort-inactive" />
              </>
            )}
          </div>
        </Button>
      );
    },
    meta: { align: "justify", width: "w-[25%]" },
  },
  {
    accessorKey: "alamat",
    header: ({ column }) => {
      const sort = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          className="table-th-title p-7 text-[1em]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Alamat
          <div className="table-th-sort">
            {sort === "asc" ? (
              <>
                <ArrowUp className="table-th-sort-active" />
                <ArrowDown className="table-th-sort-inactive" />
              </>
            ) : sort === "desc" ? (
              <>
                <ArrowUp className="table-th-sort-inactive" />
                <ArrowDown className="table-th-sort-active" />
              </>
            ) : (
              <>
                <ArrowUp className="table-th-sort-inactive" />
                <ArrowDown className="table-th-sort-inactive" />
              </>
            )}
          </div>
        </Button>
      );
    },
    meta: { align: "justify", width: "w-[43%]" },
  },

  {
    accessorKey: "telepon",
    header: ({ column }) => {
      const sort = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          className="table-th-title p-7 text-[1em]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Telepon
          <div className="table-th-sort">
            {sort === "asc" ? (
              <>
                <ArrowUp className="table-th-sort-active" />
                <ArrowDown className="table-th-sort-inactive" />
              </>
            ) : sort === "desc" ? (
              <>
                <ArrowUp className="table-th-sort-inactive" />
                <ArrowDown className="table-th-sort-active" />
              </>
            ) : (
              <>
                <ArrowUp className="table-th-sort-inactive" />
                <ArrowDown className="table-th-sort-inactive" />
              </>
            )}
          </div>
        </Button>
      );
    },
    meta: { align: "center", width: "w-[10%]" },
  },

  {
    accessorKey: "foto",
    header: () => <div>Foto</div>,
    cell: ({ row }) => {
      const url = row.original.foto;
      const fullImage = `/uploads/${url}`;

      return (
        // <DialogPrimitive.Root>
        //   <DialogPrimitive.Trigger asChild>
        //     <div className="flex justify-center cursor-pointer">
        //       <Image
        //         priority
        //         src={fullImage}
        //         alt={url}
        //         width={50}
        //         height={50}
        //         className="rounded-sm object-cover w-full h-auto hover:opacity-80 transition"
        //       />
        //     </div>
        //   </DialogPrimitive.Trigger>

        //   <DialogPrimitive.Portal>
        //     <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-50" />
        //     <DialogPrimitive.Content
        //       // Remove aria-labelledby from here, it will be handled by DialogPrimitive.Title
        //       className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2">
        //       <VisuallyHidden.Root>
        //         {/* Wrap the title with VisuallyHidden.Root */}
        //         <DialogPrimitive.Title className="flex items-center gap-2 mb-4 text-lg font-semibold">
        //           <ImageX />
        //           Foto
        //         </DialogPrimitive.Title>
        //       </VisuallyHidden.Root>

        //       <div className="relative">
        //         <Image
        //           src={fullImage}
        //           alt={`Preview ${url}`}
        //           width={500}
        //           height={500}
        //           className="rounded-lg object-contain"
        //         />

        //         <DialogPrimitive.Close asChild>
        //           <button className="absolute right-[-1rem] top-[-1rem] rounded-full p-2 border border-[var(--color-border)] text-[var(--color-black)] bg-[var(--color-white)] focus:!ring-0 focus:!ring-[var(--color-sort)] outline-0 cursor-pointer">
        //             <X className="w-5 h-5" />
        //           </button>
        //         </DialogPrimitive.Close>
        //       </div>
        //     </DialogPrimitive.Content>
        //   </DialogPrimitive.Portal>
        // </DialogPrimitive.Root>

        <CustomImageDialog
          thumbnailSrc={fullImage} // kecil (e.g. 50x50)
          fullImageSrc={fullImage} // ukuran penuh
          alt={`Foto ${url}`} // opsional
        />
      );
    },
    meta: { align: "center", width: "w-[5%]" },
  },
];
