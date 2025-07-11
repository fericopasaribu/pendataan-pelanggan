"use client";

import {
  CustomImageDialogTable
} from "@/components/CustomImageDialogTable";
import PelangganActions from "@/components/PelangganActions";
import { Button } from "@/components/ui/button";
import { CUSTOM_TEXT } from "@/constants/CustomText";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";

type Pelanggan = {
  id: number;
  nomor: string;
  nama: string;
  alamat: string;
  telepon: string;
  foto: string;
};

export const pelanggan: ColumnDef<Pelanggan>[] = [
  {
    id: "aksi",
    header: () => <div className="text-center">{CUSTOM_TEXT.text_aksi}</div>,
    cell: ({ row }) => {
      const { id, nomor, foto } = row.original;
      return <PelangganActions id={id} nomor={nomor} foto={foto} />;
    },
    meta: { align: "center", width: "w-[10%]" },
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
    meta: { align: "center", width: "w-[15%]" },
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
    cell: ({ row }) => {
      return (
        <div className="max-w-[600px] truncate whitespace-nowrap overflow-hidden text-ellipsis">
          {row.original.alamat}
        </div>
      );
    },
    meta: { align: "justify", width: "w-[35%]" },
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
        <CustomImageDialogTable
          thumbnailSrc={fullImage}
          fullImageSrc={fullImage}
          alt={`${CUSTOM_TEXT.text_foto} ${url}`}
        />
      );
    },
    meta: { align: "center", width: "w-[5%]" },
  },
];
