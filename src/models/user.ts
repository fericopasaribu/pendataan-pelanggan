"use server"
import { PrismaClient } from "@prisma/client";

// buat variabel "prisma"
const prisma = new PrismaClient();

// buat fungsi untuk tampil data
export async function getData() {

    const getData = await prisma.tb_pelanggan.findMany({
    });

    return getData;
}