"use client";
import CustomButton from "@/components/CustomButton";
import CustomReload from "@/components/CustomReload";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/features/user";
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
        <CustomButton label="Tambah Data" className="btn-primary" icon={Plus} />

        <CustomReload
          label="Refresh Data"
          className="btn-secondary"
          icon={RefreshCcw}
          onClick={() => setFilter("")}
        />
      </div>

      <DataTable
        columns={columns}
        data={data}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}
