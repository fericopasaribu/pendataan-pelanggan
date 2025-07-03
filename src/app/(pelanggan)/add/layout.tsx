import type { Metadata } from "next";
import PelangganAddPage from "./page";

export const metadata: Metadata = {
  title: "Tambah Data Pelanggan",
  description: "Panel admin untuk menambah data pelanggan.",
};

export default function PelangganAddLayout() {
  return <PelangganAddPage />;
}
