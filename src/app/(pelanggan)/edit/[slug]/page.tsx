"use client";

import { CustomError } from "@/components/CustomError";
import CustomFormButton from "@/components/CustomFormButton";
import CustomImageUpload from "@/components/CustomImageUpload";
import { CustomInput } from "@/components/CustomInput";
import { CustomLabel } from "@/components/CustomLabel";
import CustomToast from "@/components/CustomToast";
import { CUSTOM_TEXT } from "@/constants/CustomText";
import {
  filterForName,
  filterForNumber,
  filterForNumberText,
} from "@/lib/scripts";
import { detailData } from "@/models/pelanggan";
import { Ban, Check } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function PelangganEditPage() {
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

  const [error, setError] = useState({
    nomor: false,
    nama: false,
    alamat: false,
    telepon: false,
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

  const handleEditData = async (
    nomor: string,
    nama: string,
    alamat: string,
    telepon: string,
    foto: File | null
  ) => {
    const errorTemp = {
      nomor: !form.nomor.trim(),
      nama: !form.nama.trim(),
      alamat: !form.alamat.trim(),
      telepon: !form.telepon.trim(),
    };

    setError(errorTemp);

    // const isValid = Object.values(errorTemp).every((v) => v === false);

    // if (isValid) {
    //   const result = await updateData(nomor, nama, alamat, telepon, foto, slug);

    //   if (result.success) {
    //     CustomToast({
    //       type: "success",
    //       source: CUSTOM_TEXT.text_data_pelanggan,
    //       value: nomor,
    //       message: CUSTOM_TEXT.text_sukses_simpan,
    //       duration: CUSTOM_TEXT.interval,
    //     });

    //     setTimeout(() => {
    //       location.reload();
    //     }, CUSTOM_TEXT.interval);
    //   } else {
    //     CustomToast({
    //       type: "error",
    //       source: CUSTOM_TEXT.text_data_pelanggan,
    //       value: nomor,
    //       message: CUSTOM_TEXT.text_gagal_simpan,
    //       duration: CUSTOM_TEXT.interval,
    //     });
    //   }
    // }
  };

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
      <h1 className="form-title">{`${CUSTOM_TEXT.text_ubah_data} ${CUSTOM_TEXT.text_pelanggan}`}</h1>
      <div className="area-upload">
        <CustomImageUpload
          onChange={(file) => setForm({ ...form, foto: file })}
          initialUrl={
            typeof form.foto === "string" && form.foto
              ? `/${CUSTOM_TEXT.dir_uploads}/${form.foto}`
              : undefined
          }
        />

        {/* <CustomImageUpload
          onChange={(file) => {
            setForm({ ...form, foto: file });
          }}
          initialUrl={
            typeof form.foto === "string" &&
            form.foto !== `/${CUSTOM_TEXT.dir_images}/${CUSTOM_TEXT.file_noimage}`
              ? `/${CUSTOM_TEXT.dir_uploads}/${form.foto}`
              : undefined
          }
        /> */}

        <div className="mt-[-10px]">
          {CUSTOM_TEXT.upload_label_format} :{" "}
          <strong>{CUSTOM_TEXT.upload_gambar_format}</strong>
        </div>
        <div>
          {CUSTOM_TEXT.upload_label_size} :{" "}
          <strong>{CUSTOM_TEXT.upload_gambar_size}</strong>
        </div>
      </div>
      <div className="area-form-content">
        <div>
          <CustomLabel value={CUSTOM_TEXT.text_nomor} required />
          <CustomInput
            value={form.nomor}
            onChange={(value) => {
              const result = filterForNumber(value);
              setForm({ ...form, nomor: result });
            }}
            className={error.nomor ? "input-error" : "input-text"}
            maxLength={20}
            placeholder={CUSTOM_TEXT.format_isi_angka}
          />
          {error.nomor && (
            <CustomError
              value={`${CUSTOM_TEXT.text_nomor} ${CUSTOM_TEXT.text_wajib_isi}`}
            />
          )}
        </div>
        <div>
          <CustomLabel value={CUSTOM_TEXT.text_nama} required />
          <CustomInput
            value={form.nama}
            onChange={(value) => {
              const result = filterForName(value);
              setForm({ ...form, nama: result });
            }}
            className={error.nama ? "input-error" : "input-text"}
            maxLength={50}
            placeholder={CUSTOM_TEXT.format_isi_nama}
          />
          {error.nama && (
            <CustomError
              value={`${CUSTOM_TEXT.text_nama} ${CUSTOM_TEXT.text_wajib_isi}`}
            />
          )}
        </div>

        <div>
          <CustomLabel value={CUSTOM_TEXT.text_alamat} required />
          <CustomInput
            value={form.alamat}
            onChange={(value) => {
              const result = filterForNumberText(value);
              setForm({ ...form, alamat: result });
            }}
            className={error.alamat ? "input-error" : "input-text"}
            maxLength={255}
            placeholder={CUSTOM_TEXT.format_isi_angka_text}
          />
          {error.alamat && (
            <CustomError
              value={`${CUSTOM_TEXT.text_alamat} ${CUSTOM_TEXT.text_wajib_isi}`}
            />
          )}
        </div>
        <div>
          <CustomLabel value={CUSTOM_TEXT.text_telepon} required />
          <CustomInput
            value={form.telepon}
            onChange={(value) => {
              const result = filterForNumber(value);
              setForm({ ...form, telepon: result });
            }}
            className={error.telepon ? "input-error" : "input-text"}
            maxLength={15}
            placeholder={CUSTOM_TEXT.format_isi_angka}
          />
          {error.telepon && (
            <CustomError
              value={`${CUSTOM_TEXT.text_telepon} ${CUSTOM_TEXT.text_wajib_isi}`}
            />
          )}
        </div>
      </div>
      <div className="area-form-button">
        <CustomFormButton
          label={CUSTOM_TEXT.text_ubah}
          className="btn-primary"
          icon={Check}
          onClick={() =>
            handleEditData(
              form.nomor,
              form.nama,
              form.alamat,
              form.telepon,
              form.foto
            )
          }
        />

        <CustomFormButton
          label={CUSTOM_TEXT.text_batal}
          className="btn-secondary"
          icon={Ban}
          onClick={() => router.back()}
        />
      </div>
    </div>
  );
}
