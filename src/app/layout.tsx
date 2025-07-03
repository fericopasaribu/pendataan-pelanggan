import type { Metadata } from "next";
import "./globals.css";
import LayoutHeader from "@/layout/Header";
import LayoutFooter from "@/layout/Footer";

export const metadata: Metadata = {
  title: "Tampil Data Pelanggan",
  description: "Panel admin untuk menampilkan data pelanggan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        <div className="min-h-screen flex flex-col">
          <LayoutHeader />
          <div className="area-content">{children}</div>
          <LayoutFooter />
        </div>
      </body>
    </html>
  );
}
