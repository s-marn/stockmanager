import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import PrintReciept from "@/components/ModalContent/PrintReciept";

function TableCreate() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Rate</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total (THB)</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>USD</TableCell>
            <TableCell>0.028</TableCell>
            <TableCell>6,000</TableCell>
            <TableCell>210,543</TableCell>
            <TableCell className="flex justify-end ">
              <IoClose className="font-medium text-xl cursor-pointer hover:text-red-700" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell>CNY</TableCell>
            <TableCell>0.2</TableCell>
            <TableCell>200</TableCell>
            <TableCell>988.44</TableCell>
            <TableCell className="flex justify-end ">
              <IoClose className="font-medium text-xl cursor-pointer hover:text-red-700" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <PrintReciept />
      </div>
    </>
  );
}

export default TableCreate;
