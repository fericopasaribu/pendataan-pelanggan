"use client";
import { columns } from "@/models/user";
import CustomButton from "@/components/CustomButton";
import { DataTable } from "@/components/ui/data-table";

const users = [
  {
    id: "1",
    name: "John Doe Semangat Sekali. John Doe Semangat Sekali. John Doe Semangat Sekali. John Doe Semangat Sekali.",
    email: "john@example.com",
    alamat: "jalan",
  },
  { id: "2", name: "Jane Smith Asik Deh", email: "janeasikin@example.com", alamat: "jalan" },
  { id: "1", name: "John Doe", email: "john@example.com", alamat: "jalan" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", alamat: "jalan" },
  { id: "1", name: "John Doe", email: "john@example.com", alamat: "jalan" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", alamat: "jalan" },
  { id: "1", name: "John Doe", email: "john@example.com", alamat: "jalanan" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", alamat: "jalan" },
  { id: "1", name: "John Doe", email: "john@example.com", alamat: "jalan" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", alamat: "jalan" },
  { id: "1", name: "John Doe", email: "john@example.com", alamat: "jalan" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", alamat: "jalan" },
  { id: "1", name: "John Doe", email: "john@example.com", alamat: "jalan" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", alamat: "jalan" },
  { id: "1", name: "John Doe", email: "john@example.com", alamat: "jalan" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", alamat: "jalan" },
];

export default function PelangganViewPage() {
  return (
    <div>
      <div className="flex justify-center mb-10">
        <CustomButton path="/add" label="Tambah Data" className="btn-primary" />
      </div>

      <DataTable columns={columns} data={users} />
    </div>
  );
}
