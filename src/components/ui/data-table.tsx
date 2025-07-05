"use client";

function getPaginationRange(
  current: number,
  total: number
): (number | "ellipsis")[] {
  const pages: (number | "ellipsis")[] = [];

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const firstPages = [1, 2];
  const lastPages = [total - 1, total];
  const isInFirstBlock = current <= 3;
  const isInLastBlock = current >= total - 2;

  if (isInFirstBlock) {
    pages.push(...firstPages);
    if (current === 3) pages.push(current);
    pages.push("ellipsis");
    pages.push(...lastPages);
  } else if (isInLastBlock) {
    pages.push(...firstPages);
    pages.push("ellipsis");
    if (current === total - 2) pages.push(current);
    pages.push(...lastPages);
  } else {
    pages.push(...firstPages);
    pages.push("ellipsis");
    pages.push(current);
    pages.push("ellipsis");
    pages.push(...lastPages);
  }

  return [...new Set(pages)];
}

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { CustomInput } from "../CustomInput";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [filter, setFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filter,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    onGlobalFilterChange: setFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  const pageSize = table.getState().pagination.pageSize;
  const total = table.getFilteredRowModel().rows.length;

  return (
    <div className="space-y-4">
      {/* 🔍 Search Input */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
        <CustomInput
          placeholder="Cari Data"
          value={filter}
          onChange={setFilter}
          className="input-text sm:max-w-sm"
        />

        <Select
          value={String(table.getState().pagination.pageSize)}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}>
          <SelectTrigger className="input-select w-full sm:w-[184px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="mt-1 border-[var(--color-border)]">
            {[1, 50, data.length].map((size) => (
              <SelectItem
                key={size}
                value={String(size)}
                className="input-select-item">
                {size === data.length ? "Seluruh" : `${size}`} Data
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        cell.column.columnDef.meta?.width,
                        cell.column.columnDef.meta?.align === "center"
                          ? "text-center"
                          : cell.column.columnDef.meta?.align === "right"
                          ? "text-right"
                          : "text-left"
                      )}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-2">
                  Data Tidak Ditemukan !
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="pagination-area">
        {/* Info Page + Dropdown Page Size */}
        <div className="pagination-info">
          {/* <span>
            Hal. {pageIndex + 1} / {pageCount}
          </span> */}
          <span>
            Data {pageIndex * pageSize + 1} -{" "}
            {Math.min((pageIndex + 1) * pageSize, total)} dari {total} Data
          </span>
        </div>

        {/* Pagination Controls */}
        <div className="pagination-control">
          <Button
            variant="outline"
            size="icon"
            className="pagination-nav"
            onClick={() => table.setPageIndex(0)}
            disabled={pageIndex === 0}>
            &laquo;
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="pagination-nav"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            &lsaquo;
          </Button>

          {getPaginationRange(pageIndex + 1, pageCount).map((item, index) =>
            typeof item === "number" ? (
              <Button
                key={index}
                variant={item === pageIndex + 1 ? "default" : "outline"}
                size="icon"
                className="pagination-page"
                onClick={() => table.setPageIndex(item - 1)}
                disabled={item === pageIndex + 1}>
                {item}
              </Button>
            ) : (
              <span key={index} className="px-2 text-muted-foreground">
                ...
              </span>
            )
          )}

          <Button
            variant="outline"
            size="icon"
            className="pagination-nav"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            &rsaquo;
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="pagination-nav"
            onClick={() => table.setPageIndex(pageCount - 1)}
            disabled={pageIndex === pageCount - 1}>
            &raquo;
          </Button>
        </div>
      </div>
    </div>
  );
}
