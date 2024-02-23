"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FaRegFileAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "../../../components/ui/pagination";
// import ModalUpdateProduct from "../../Modal/UpdateProduct/page";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export type History = {
  id: number;
  employee: string;
  datetime: string;
  customer: string;
  type: string;
  amount: number;
  paymenttype: string;
  status: string;
  excel: string;
  pdf: string;
  reciept: string;
};

export const columns: ColumnDef<History>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end cursor-pointer">
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            ID
          </div>
          <div className="flex items-center ">
            <CaretSortIcon className=" ml-2 h-4 w-4 " />
          </div>
        </div>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "employee",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end cursor-pointer">
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Employee Name
          </div>
          <div className="flex items-center">
            <CaretSortIcon className=" ml-2 h-4 w-4 " />
          </div>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("employee")}</div>
    ),
  },
  {
    accessorKey: "datetime",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end">
          <Button
            variant={"link"}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-right flex cursor-pointer p-0 hover:bg-none hover:no-underline text-[#737373] "
          >
            Date Time
            <div className="flex items-center">
              <CaretSortIcon className=" ml-2 h-4 w-4 " />
            </div>
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-right">{row.getValue("datetime")}</div>
    ),
  },
  {
    accessorKey: "customer",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end">
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-right flex cursor-pointer"
          >
            Customer
            <div className="flex items-center">
              <CaretSortIcon className=" ml-2 h-4 w-4 " />
            </div>
          </div>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-right">{row.getValue("customer")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end">
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-right flex cursor-pointer"
          >
            Type
            <div className="flex items-center">
              <CaretSortIcon className=" ml-2 h-4 w-4 " />
            </div>
          </div>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-right">{row.getValue("type")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end">
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-right flex cursor-pointer"
          >
            Amount
            <div className="flex items-center">
              <CaretSortIcon className=" ml-2 h-4 w-4 " />
            </div>
          </div>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-right">{row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "paymenttype",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end">
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-right flex cursor-pointer"
          >
            Payment Type
            <div className="flex items-center">
              <CaretSortIcon className=" ml-2 h-4 w-4 " />
            </div>
          </div>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-right">{row.getValue("paymenttype")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end">
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-right flex cursor-pointer"
          >
            STATUS
            <div className="flex items-center">
              <CaretSortIcon className=" ml-2 h-4 w-4 " />
            </div>
          </div>
        </div>
      );
    },
    cell: ({ row }) => (
      <div
        className={`lowercase text-right ${
          row.getValue("status") === "Completed"
            ? "text-green-600"
            : row.getValue("status") === "Suspended"
            ? "text-red-700"
            : "text-gray-600"
        }`}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "excel",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end">
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-right flex cursor-pointer"
          >
            Export Excel
            <div className="flex items-center">
              <CaretSortIcon className=" ml-2 h-4 w-4 " />
            </div>
          </div>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase flex justify-center">
        <button
          onClick={() => {
            console.log(row);
          }}
          className="text-xl flex justify-center items-center"
        >
          <FaRegFileAlt />
        </button>
        {/* {row.getValue("excel")} */}
      </div>
    ),
  },
  {
    accessorKey: "pdf",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end">
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-right flex cursor-pointer"
          >
            Export PDF
            <div className="flex items-center">
              <CaretSortIcon className=" ml-2 h-4 w-4 " />
            </div>
          </div>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase flex justify-center">
        <button
          onClick={() => {
            console.log(row.id);
          }}
          className="text-xl flex justify-center items-center"
        >
          <FaRegFileAlt />
        </button>
        {/* {row.getValue("excel")} */}
      </div>
    ),
  },
  {
    accessorKey: "reciept",
    header: ({ column }) => {
      return (
        <div className="flex flex-row justify-end">
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-right flex cursor-pointer"
          >
            Export Reciept PDF
            <div className="flex items-center">
              <CaretSortIcon className=" ml-2 h-4 w-4 " />
            </div>
          </div>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase flex justify-center">
        <button
          onClick={() => {
            console.log(row.id);
          }}
          className="text-xl flex justify-center items-center"
        >
          <Link href="/dashboard/receipt-tel">
            <FaRegFileAlt />
          </Link>
        </button>
        {/* {row.getValue("excel")} */}
      </div>
    ),
  },
];

export function DataTableProduct() {
  const data: History[] = [
    {
      id: 1,
      employee: "Note",
      datetime: "2023-10-10",
      customer: "Mr. Test Test",
      type: "Buy",
      amount: 100000,
      paymenttype: "Cash",
      status: "Completed", //"2023-10-10"
      excel: "f",
      pdf: "e",
      reciept: "d",
    },
    {
      id: 2,
      employee: "Nook",
      datetime: "2023-10-10",
      customer: "Mr. Test Test",
      type: "sell",
      amount: 100000,
      paymenttype: "Cash",
      status: "Suspended", //"2023-10-10"
      excel: "a",
      pdf: "e",
      reciept: "d",
    },
    {
      id: 3,
      employee: "Miki",
      datetime: "2023-10-10",
      customer: "Mr. Test Test",
      type: "sell",
      amount: 100000,
      paymenttype: "Cash",
      status: "Cancelled", //"2023-10-10"
      excel: "f",
      pdf: "e",
      reciept: "d",
    },
  ];

  const [products, setProducts] = React.useState(data);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const filterValue = React.useMemo(
    () =>
      products.filter((row: any) => {
        const keys = Object.keys(row);

        if (!globalFilter) return true;

        for (let key of keys) {
          if (key === "toggle") continue;
          if (
            (row[key] + "").toLowerCase().includes(globalFilter.toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      }),
    [globalFilter, products]
  );

  const table = useReactTable({
    data: filterValue,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 justify-between">
        <Input
          placeholder="Search..."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />
        <div className="flex flex-row space-x-2">
          <div>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu> */}
            <div className="h-10 flex items-center border p-4 rounded-md bg-apptima_primary_text_hide font-semibold animate-pulse">
              Total : Sales 200,000 Buy 100,000
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <br></br>
      {/* <DataTablePagination table={table} /> */}
    </div>
  );
}
