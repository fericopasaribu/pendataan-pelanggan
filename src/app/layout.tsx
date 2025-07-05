import CustomFooter from "@/layouts/CustomFooter";
import CustomHeader from "@/layouts/CustomHeader";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        <div className="area-page">
          <CustomHeader />
          <div className="area-content">{children}</div>
          <CustomFooter />
        </div>
      </body>
    </html>
  );
}
