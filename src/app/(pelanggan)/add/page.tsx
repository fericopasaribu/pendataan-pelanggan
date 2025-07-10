"use client";

import { CustomError } from "@/components/CustomError";
import CustomFormButton from "@/components/CustomFormButton";
import CustomImageUpload from "@/components/CustomImageUpload";
import { CustomInput } from "@/components/CustomInput";
import { CustomLabel } from "@/components/CustomLabel";
import CustomToast from "@/components/CustomToast";
import { CUSTOM_TEXT } from "@/constants/CustomText";
import { filterForName, filterForNumber } from "@/lib/scripts";
import { saveData } from "@/models/pelanggan";
import { Ban, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PelangganAddPage() {
  const router = useRouter();

  // const [fileFoto, setFileFoto] = useState<File | null>(null);
  const [form, setForm] = useState<{
    nomor: string;
    nama: string;
    alamat: string;
    telepon: string;
    fileFoto: File | null;
  }>({
    nomor: "",
    nama: "",
    alamat: "",
    telepon: "",
    fileFoto: null,
  });

  const [error, setError] = useState({
    nomor: false,
    nama: false,
    alamat: false,
    telepon: false,
  });

  // const [imageError, setImageError] = useState(false);

  const handleSaveData = async (
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

    const isValid = Object.values(errorTemp).every((v) => v === false);

    if (isValid) {
      const result = await saveData(nomor, nama, alamat, telepon, foto);

      if (result.success) {
        CustomToast({
          type: "success",
          source: CUSTOM_TEXT.text_data_pelanggan,
          value: nomor,
          message: CUSTOM_TEXT.text_sukses_simpan,
          duration: CUSTOM_TEXT.interval,
        });

        setTimeout(() => {
          location.reload();
        }, CUSTOM_TEXT.interval);
      } else {
        CustomToast({
          type: "error",
          source: CUSTOM_TEXT.text_data_pelanggan,
          value: nomor,
          message: CUSTOM_TEXT.text_gagal_simpan,
          duration: CUSTOM_TEXT.interval,
        });
      }
    }
  };

  return (
    <div>
      <h1 className="form-title">{`${CUSTOM_TEXT.text_tambah_data} ${CUSTOM_TEXT.text_pelanggan}`}</h1>
      <div className="area-upload">
        <CustomImageUpload
          onChange={(file) => setForm({ ...form, fileFoto: file })}
          // onErrorChange={(hasError) => setImageError(hasError)}
        />
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
              const result = filterForName(value);
              setForm({ ...form, alamat: result });
            }}
            className={error.alamat ? "input-error" : "input-text"}
            maxLength={255}
            placeholder={CUSTOM_TEXT.format_isi_nama}
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
          label={CUSTOM_TEXT.text_simpan}
          className="btn-primary"
          icon={Check}
          onClick={() =>
            handleSaveData(
              form.nomor,
              form.nama,
              form.alamat,
              form.telepon,
              form.fileFoto
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
