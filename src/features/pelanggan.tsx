"use client";

import { CustomDeleteButton } from "@/components/CustomDeleteButton";
import { CustomImageDialog } from "@/components/CustomImageDialog";
import { Button } from "@/components/ui/button";
import { CUSTOM_TEXT } from "@/constants/CustomText";
import { deleteData } from "@/models/user";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, CircleCheck, CircleX, Pencil } from "lucide-react";
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
};

const handleDeleteData = async (id: number, nomor: string, foto: string) => {
  try {
    await deleteData(id,foto);

    toast.custom(
      () => (
        <div className="toast-box">
          <div className="icon-success">
            <CircleCheck className="toast-icon" />
          </div>
          <span>{`${CUSTOM_TEXT.text_data_pelanggan} : ${nomor} ${CUSTOM_TEXT.text_sukses_hapus}`}</span>
        </div>
      ),
      {
        duration: CUSTOM_TEXT.inteval,
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
          <span>{`${CUSTOM_TEXT.text_data_pelanggan} : ${nomor} ${CUSTOM_TEXT.text_gagal_hapus}`}</span>
        </div>
      ),
      {
        duration: CUSTOM_TEXT.inteval,
        position: "top-center",
      }
    );
  } finally {
    setTimeout(() => {
      location.reload();
    }, CUSTOM_TEXT.inteval);
  }
};

export const pelanggan: ColumnDef<Pelanggan>[] = [
  {
    id: "aksi",
    header: () => <div className="text-center">{CUSTOM_TEXT.text_aksi}</div>,
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

          <CustomDeleteButton
            source={CUSTOM_TEXT.text_data_pelanggan}
            id={data.id}
            text={data.nomor}
            onDelete={() => handleDeleteData(data.id, data.nomor, data.foto)}
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
          {CUSTOM_TEXT.text_nomor}
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
          {CUSTOM_TEXT.text_nama}
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
          {CUSTOM_TEXT.text_alamat}
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
          {CUSTOM_TEXT.text_telepon}
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
    header: () => <div>{CUSTOM_TEXT.text_foto}</div>,
    cell: ({ row }) => {
      const url = row.original.foto;
      const fullImage = `/${CUSTOM_TEXT.dir_uploads}/${url}`;

      return (
        <CustomImageDialog
          thumbnailSrc={fullImage}
          fullImageSrc={fullImage}
          alt={`${CUSTOM_TEXT.text_foto} ${url}`}
        />
      );
    },
    meta: { align: "center", width: "w-[5%]" },
  },
];
