"use server";

import { PrismaClient } from "@prisma/client";
import fs from "fs";
import { unlink, writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

const prisma = new PrismaClient();

export const viewData = async () => {
    return await prisma.tb_pelanggan.findMany({
        orderBy: { id: "asc" },
    });
};

export const deleteData = async (id: number, fileName: string) => {
    const uploadDir = path.join(process.cwd(), "public/uploads");

    if (fileName) {
        const filePath = path.join(uploadDir, fileName)

        // jika file tersedia
        if (fs.existsSync(filePath)) {
            // hapus file
            await unlink(filePath)
        }
    }

    await prisma.tb_pelanggan.delete({
        where: { id },
    });
};

export const saveData = async (
    nomor: string,
    nama: string,
    alamat: string,
    telepon: string,
    file: File | null
) => {
    const existing = await prisma.tb_pelanggan.findFirst({ where: { nomor } });
    if (existing) return { success: false };

    let fileName = ""

    // 2. Simpan file jika ada
    if (file && file.size > 0) {
        const imageMimes = ["image/jpeg", "image/png"]
        const buffer = Buffer.from(await file.arrayBuffer())
        const uploadDir = path.join(process.cwd(), "public/uploads")

        // jika bukan file gambar
        if (!imageMimes.includes(file.type)) {
            // upload dokumen
            const ext = path.extname(file.name)
            fileName = `${Date.now()}${ext}`

            await writeFile(path.join(uploadDir, fileName), buffer)
        }
        // jika file gambar
        else {
            // upload image        
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir)
            }

            fileName = `${Date.now()}.webp` // hasil kompres jadi .webp

            const outputPath = path.join(uploadDir, fileName)

            // Kompres menggunakan sharp
            await sharp(buffer)
                .resize(300) // atur lebar max 300px (tinggi otomatis)
                .webp({ quality: 75 }) // kompres ke webp, kualitas 0-100
                .toFile(outputPath)
        }
    }

    await prisma.tb_pelanggan.create({
        data: { nomor, nama, alamat, telepon, foto: fileName },
    });

    return { success: true };
};
