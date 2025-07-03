-- CreateTable
CREATE TABLE "tb_pelanggan" (
    "id" SERIAL NOT NULL,
    "nomor" VARCHAR(20) NOT NULL,
    "nama" VARCHAR(50) NOT NULL,
    "alamat" VARCHAR(255) NOT NULL,
    "telepon" VARCHAR(15) NOT NULL,
    "foto" VARCHAR(20) NOT NULL,

    CONSTRAINT "tb_pelanggan_pkey" PRIMARY KEY ("id")
);
