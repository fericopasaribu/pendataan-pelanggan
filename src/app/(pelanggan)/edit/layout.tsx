import type { Metadata } from "next";
import PelangganEditPage from "./page";

export const metadata: Metadata = {
  title: "Ubah Data Pelanggan",
  description: "Panel admin untuk mengubah data pelanggan.",
};

export default function PelangganEditLayout() {
  return <PelangganEditPage />;
}
