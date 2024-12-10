// @ts-ignore
import React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel } from "@tanstack/react-table";
// @ts-ignore
type ReactTableProps<D extends unknown> = {
  data: D[];
  columns: ColumnDef<D, any>[];
  headerProps?: {};
  headerCellProps?: {};
  bodyProps?: {};
  rowDataProps?: { className: string };
  cellProps?: { className: string };
  size?: keyof typeof sizes;
  [x: string]: any;
};

const sizes = {
  xs: "py-2.5",
} as const;

type TableRowType = {
  id: number;
  name: string;
  age: number;
  job: string;
};

const tableData: TableRowType[] = [
  { id: 1, name: "Alice", age: 25, job: "Engineer" },
  { id: 2, name: "Bob", age: 30, job: "Designer" },
  { id: 3, name: "Charlie", age: 35, job: "Manager" },
];

const tableColumns: ColumnDef<TableRowType, any>[] = [
  {
    accessorKey: "id",
    header: "ID",
    footer: (info) => "Footer content",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "name",
    header: "Name",
    footer: (info) => "Footer content",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "age",
    header: "Age",
    footer: (info) => "Footer content",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "job",
    header: "Job",
    footer: (info) => "Footer content",
    cell: (info) => info.getValue(),
  },
];

const ReactTable = <D extends unknown>({
  columns,
  data = [],
  headerProps = {},
  headerCellProps = {},
  bodyProps = {},
  className = "",
  rowDataProps = { className: "" },
  cellProps = { className: "" },
  size,
  ...restConfig
}: ReactTableProps<D>) => {
  const tableConfig = {
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...restConfig,
  };

  const table = useReactTable(tableConfig);

  return (
    <table className={className}>
      <thead {...headerProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} {...header.column.columnDef?.meta} {...headerCellProps}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...bodyProps}>
        {table.getRowModel().rows.map((row) => (
          <tr {...rowDataProps} className={`${rowDataProps?.className}`} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={`${size ? sizes[size] : ""} ${cellProps?.className}`}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ReactTable };
