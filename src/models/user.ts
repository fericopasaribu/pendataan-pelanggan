"use server"
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import { unlink } from "fs/promises";
import path from "path";

// variabel "prisma"
const prisma = new PrismaClient();

// fungsi untuk tampil data
export const getData = async () => {

    const getData = await prisma.tb_pelanggan.findMany({
        orderBy: {
            id: "asc"
        }
    });

    return getData;
}

// fungsi untuk hapus data
export const deleteData = async (id: number, fileName: string) => {

    const uploadDir = path.join(process.cwd(), "public/uploads");

    // jika fileName tidak kosong
    if (fileName) {
        const filePath = path.join(uploadDir, fileName);

        // jika filePath tersedia
        if (fs.existsSync(filePath)) {
            // hapus filePath
            await unlink(filePath);
        }
    }

    await prisma.tb_pelanggan.delete({
        where: {
            id: id,
        },
    });
}