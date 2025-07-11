import type { Metadata } from "next";
import PelangganDetailPage from "./page";

export const metadata: Metadata = {
  title: "Detail Data Pelanggan",
  description: "Panel admin untuk menampilkan detail data pelanggan.",
};

export default function PelangganDetailLayout() {
  return <PelangganDetailPage />;
}
