"use client";
import CustomFormButton from "@/components/CustomFormButton";
import { CustomImageDialogForm } from "@/components/CustomImageDialogForm";
import { CustomInput } from "@/components/CustomInput";
import { CustomLabel } from "@/components/CustomLabel";
import { CUSTOM_TEXT } from "@/constants/CustomText";
import { detailData } from "@/models/pelanggan";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function PelangganDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const router = useRouter();

  const [form, setForm] = useState<{
    nomor: string;
    nama: string;
    alamat: string;
    telepon: string;
    foto: string | File | null;
  }>({
    nomor: "",
    nama: "",
    alamat: "",
    telepon: "",
    foto: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const id = Number(slug);
    const result = await detailData(id);

    if (result.success && result.detail) {
      setForm({
        nomor: result.detail.nomor ?? "",
        nama: result.detail.nama ?? "",
        alamat: result.detail.alamat ?? "",
        telepon: result.detail.telepon ?? "",
        foto: result.detail.foto ?? null,
      });
      setIsLoading(false);
    } else {
      router.replace("/404");
    }
  }, [slug, router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const url = form.foto;
  const fullImage =
    form.foto === `/${CUSTOM_TEXT.dir_images}/${CUSTOM_TEXT.file_noimage}`
      ? ``
      : `/${CUSTOM_TEXT.dir_uploads}/${form.foto}`;

  if (isLoading) {
    return (
      <div className="area-loading">
        <Image
          priority
          src={`/${CUSTOM_TEXT.dir_images}/${CUSTOM_TEXT.file_loading}`}
          alt={CUSTOM_TEXT.text_loading}
          width={50}
          height={50}
        />
      </div>
    );
  }

  return (
    <div>
      <h1 className="form-title">{`${CUSTOM_TEXT.text_detail_data} ${CUSTOM_TEXT.text_pelanggan}`}</h1>

      <div className="area-upload">
        <CustomImageDialogForm
          thumbnailSrc={fullImage}
          fullImageSrc={fullImage}
          alt={`${CUSTOM_TEXT.text_foto} ${url}`}
        />
      </div>

      <div className="area-form-content">
        <div>
          <CustomLabel value={CUSTOM_TEXT.text_nomor} />
          <CustomInput value={form.nomor} readOnly className="input-text" />
        </div>

        <div>
          <CustomLabel value={CUSTOM_TEXT.text_nama} />
          <CustomInput value={form.nama} readOnly className="input-text" />
        </div>

        <div>
          <CustomLabel value={CUSTOM_TEXT.text_alamat} />
          <CustomInput value={form.alamat} readOnly className="input-text" />
        </div>

        <div>
          <CustomLabel value={CUSTOM_TEXT.text_telepon} />
          <CustomInput value={form.telepon} readOnly className="input-text" />
        </div>
      </div>

      <div className="area-form-button">
        <CustomFormButton
          label={CUSTOM_TEXT.text_kembali}
          className="btn-secondary ml-0"
          icon={ArrowLeft}
          onClick={() => router.back()}
        />
      </div>
    </div>
  );
}
