"use client";
import CustomButton from "@/components/CustomButton";
import CustomReloadButton from "@/components/CustomReloadButton";
import { DataTable } from "@/components/ui/data-table";
import { CUSTOM_TEXT } from "@/constants/CustomText";
import { pelanggan } from "@/features/pelanggan";
import { getData } from "@/models/user";
import { tb_pelanggan } from "@prisma/client";
import { Plus, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function PelangganViewPage() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState<tb_pelanggan[]>([]);

  async function fetchData() {
    const result = await getData();
    setData(result);
  }

  useEffect(() => {
    fetchData();

    // const interval = setInterval(() => {
    //   fetchData();
    // }, 5000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="area-view-button">
        <CustomButton
          path="/add"
          label={CUSTOM_TEXT.text_tambah_data}
          className="btn-primary"
          icon={Plus}
        />

        <CustomReloadButton
          label={CUSTOM_TEXT.text_refresh_data}
          className="btn-secondary"
          icon={RefreshCcw}
          onClick={() => setFilter("")}
        />
      </div>

      <DataTable
        columns={pelanggan}
        data={data}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}
