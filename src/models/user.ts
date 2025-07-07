"use server"
import { PrismaClient } from "@prisma/client";

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
export const deleteData = async (id: number) => {

    await prisma.tb_pelanggan.delete({
        where: {
            id: id,
        },
    });
}