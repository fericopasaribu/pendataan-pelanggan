"use client";

import { CUSTOM_TEXT } from "@/constants/CustomText";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CustomImageDialogTableProps {
  thumbnailSrc: string;
  fullImageSrc: string;
  alt?: string;
  thumbnailClassName?: string;
}

export function CustomImageDialogTable({
  thumbnailSrc,
  fullImageSrc,
  alt = "",
  thumbnailClassName = "rounded-sm object-cover w-full h-full lg:w-15 lg:h-15 hover:opacity-80 transition",
}: CustomImageDialogTableProps) {
  const [isImageError, setIsImageError] = useState(false);

  const isValidImage = (src?: string) => {
    return typeof src === "string" && src.trim() !== "" && !src.endsWith("/");
  };

  useEffect(() => {
    if (!isValidImage(fullImageSrc)) {
      setIsImageError(true);
      return;
    }

    const img = new window.Image();
    img.src = fullImageSrc;
    img.onload = () => setIsImageError(false);
    img.onerror = () => setIsImageError(true);
  }, [fullImageSrc]);

  if (!isValidImage(thumbnailSrc) || isImageError) {
    return (
      <div className="flex justify-center">
        <Image
          priority
          src={`/${CUSTOM_TEXT.dir_images}/${CUSTOM_TEXT.file_noimage}`}
          alt="No Image"
          width={50}
          height={50}
        />
      </div>
    );
  }

  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <div className="flex justify-center cursor-pointer">
          <Image
            priority
            src={thumbnailSrc}
            alt={alt}
            title={CUSTOM_TEXT.text_zoom_foto}
            width={50}
            height={50}
            className={thumbnailClassName}
          />
        </div>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-[90vw] max-h-[90vh] sm:max-w-md -translate-x-1/2 -translate-y-1/2">
          <VisuallyHidden>
            <DialogPrimitive.Title className="flex items-center gap-2 mb-4 text-lg font-semibold">
              {alt}
            </DialogPrimitive.Title>

            <DialogPrimitive.Description className="sr-only" />
          </VisuallyHidden>

          <div className="relative">
            <Image
              src={fullImageSrc}
              alt={alt}
              width={500}
              height={500}
              className="rounded-lg object-contain"
            />

            <DialogPrimitive.Close asChild>
              <button className="absolute right-[-1rem] top-[-1rem] rounded-full p-2 border border-[var(--color-border)] text-[var(--color-black)] bg-[var(--color-white)] focus:!ring-0 focus:!ring-[var(--color-sort)] outline-0 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
