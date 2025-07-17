"use client";
import CustomReloadButton from "@/components/CustomReloadButton";
import CustomViewButton from "@/components/CustomViewButton";
import { DataTable } from "@/components/ui/data-table";
import { CUSTOM_TEXT } from "@/constants/CustomText";
import { pelanggan } from "@/features/pelanggan";
import { viewData } from "@/models/pelanggan";
import { tb_pelanggan } from "@prisma/client";

// import { tb_pelanggan } from "@prisma/client";
import { Plus, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function PelangganViewPage() {
  const [data, setData] = useState<tb_pelanggan[]>([]);

  const fetchData = async () => {
    const result = await viewData();
    setData(result);
  };

  useEffect(() => {
    fetchData();

    // const interval = setInterval(() => {
    //   fetchData();
    // }, 5000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="form-title">{`${CUSTOM_TEXT.text_tampil_data} ${CUSTOM_TEXT.text_pelanggan}`}</h1>
      <div className="area-view-button">
        <CustomViewButton
          path="/add"
          label={CUSTOM_TEXT.text_tambah_data}
          className="btn-primary"
          icon={Plus}
        />

        <CustomReloadButton
          label={CUSTOM_TEXT.text_refresh_data}
          className="btn-secondary"
          icon={RefreshCcw}
          onClick={() => localStorage.removeItem(CUSTOM_TEXT.storage_tb_pelanggan)}
        />
      </div>

      <DataTable columns={pelanggan} data={data} />
    </div>
  );
}
