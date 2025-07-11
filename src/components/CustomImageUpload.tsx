"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CustomError } from "./CustomError";
import { CUSTOM_TEXT } from "@/constants/CustomText";

interface CustomImageUploadProps {
  onChange: (file: File | null) => void;
}

export default function CustomImageUpload({
  onChange,
}: CustomImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDropAccepted = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      const isSizeValid = file.size <= CUSTOM_TEXT.size_2MB;

      if (!isSizeValid) {
        setError(CUSTOM_TEXT.text_error_size);
        setPreviewUrl(null);
        onChange(null);
        return;
      }

      setError(null);
      setPreviewUrl(URL.createObjectURL(file));
      onChange(file);
    },
    [onChange]
  );

  const onDropRejected = useCallback(() => {
    setError(CUSTOM_TEXT.text_error_format);
    setPreviewUrl(null);
    onChange(null);
  }, [onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
    onDropRejected,
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
    },
    maxFiles: 1,
  });

  return (
    <div className="w-full max-w-md mx-auto mb-5">
      <div
        {...getRootProps()}
        className={`border border-[var(--color-border)] rounded-lg cursor-pointer transition w-52 h-56 relative mx-auto ${
          isDragActive
            ? "border-[var(--color-success)] bg-sky-50"
            : error
            ? "border-[var(--color-error)]"
            : "border-[var(--color-border)]"
        }`}>
        <input {...getInputProps()} />

        <div className="relative w-full h-full aspect-square">
          {previewUrl ? (
            <Image
              priority
              src={previewUrl}
              alt={previewUrl}
              fill
              sizes="300px"
              className="rounded-md object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-sm text-[var(--color-border)]">
              {CUSTOM_TEXT.text_pilih_file}
            </div>
          )}
        </div>
      </div>

      {error && (
        <CustomError
          value={error}
          className="flex justify-center mt-1.5 mb-0 not-italic"
        />
      )}
    </div>
  );
}
