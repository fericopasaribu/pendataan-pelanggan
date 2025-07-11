"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LayoutGrid, Pencil } from "lucide-react";
import { CustomDeleteAlert } from "./CustomDeleteAlert";
import CustomToast from "./CustomToast";
import { deleteData } from "@/models/pelanggan";
import { CUSTOM_TEXT } from "@/constants/CustomText";

interface Props {
  id: number;
  nomor: string;
  foto: string;
}

export default function PelangganActions({ id, nomor, foto }: Props) {
  const router = useRouter();

  const handleDetail = () => router.push(`/detail`);
  const handleEdit = () => router.push(`/edit`);

  const handleDelete = async () => {
    try {
      await deleteData(id, foto);
      CustomToast({
        type: "success",
        source: CUSTOM_TEXT.text_data_pelanggan,
        value: nomor,
        message: CUSTOM_TEXT.text_sukses_hapus,
        duration: CUSTOM_TEXT.interval,
      });
    } catch {
      CustomToast({
        type: "error",
        source: CUSTOM_TEXT.text_data_pelanggan,
        value: nomor,
        message: CUSTOM_TEXT.text_gagal_hapus,
        duration: CUSTOM_TEXT.interval,
      });
    } finally {
      setTimeout(() => {
        location.reload();
      }, CUSTOM_TEXT.interval);
    }
  };

  return (
    <div className="area-btn-action">
      <Button
        variant="ghost"
        className="btn-action-detail"
        title={CUSTOM_TEXT.text_detail_data}
        onClick={handleDetail}>
        <LayoutGrid />
      </Button>

      <Button
        variant="ghost"
        className="btn-action-edit"
        title={CUSTOM_TEXT.text_ubah_data}
        onClick={handleEdit}>
        <Pencil />
      </Button>

      <CustomDeleteAlert
        source={CUSTOM_TEXT.text_data_pelanggan}
        id={id}
        text={nomor}
        onDelete={handleDelete}
      />
    </div>
  );
}
