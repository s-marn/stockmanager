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
import { Button } from "@/components/ui/button";

function ReceiptForCus() {
  return (
    <div className="h-full ">
      <div className="grid grid-cols-5 h-full ">
        <div></div>
        <div className="col-span-3  border p-4   h-full rounded-lg flex flex-col">
          <div className="border-b border-dashed   font-medium">
            <div className="border-b text-red-500">
              Sale Receipt for Customer
            </div>
            <div className="flex flex-col space-y-2  justify-center items-center">
              <div className="text-2xl pt-2">T2C</div>
              <div>Exchange Currency service</div>
              <div>2972 Westheimer Rd. Santa Ana, Illinois 85486</div>
              <div className="flex space-x-2">
                <div>Tel: 0999999999</div>
                <div>Email: Test@mail.com</div>
              </div>
              <br></br>
              <div className="font-normal">Sale Receipt</div>
            </div>
          </div>

          <div className="border-b flex justify-between border-dashed py-4 text-sm text-muted-foreground">
            <div>
              <div>Customer: Mr.Note Note</div>
              <div>Sale Ref: Mrs.Miki Miki</div>
            </div>
            <div className="items-end flex flex-col">
              <div>Transcation: 1234567890</div>
              <div>Date: 01-01-2023 15:40</div>
            </div>
            {/* <br></br> */}
          </div>

          <div className="flex  flex-col content-between  flex-1 justify-between ">
            <div>
              <Table className="">
                <TableHeader>
                  <TableRow className="hover:bg-white">
                    <TableHead className="w-[100px]">ITEM</TableHead>
                    <TableHead>RATE</TableHead>
                    <TableHead>QUANTITY</TableHead>
                    <TableHead className="text-right">TOTAL (THB)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-white">
                    <TableCell className="font-medium ">USD</TableCell>
                    <TableCell>0.028</TableCell>
                    <TableCell>17,089.15</TableCell>
                    <TableCell className="text-right">300,000.00</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-white">
                    <TableCell className="font-medium ">JYP</TableCell>
                    <TableCell>0.028</TableCell>
                    <TableCell>17,089.15</TableCell>
                    <TableCell className="text-right">300,000.00</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-white">
                    <TableCell className="font-medium ">CNY</TableCell>
                    <TableCell>0.028</TableCell>
                    <TableCell>17,089.15</TableCell>
                    <TableCell className="text-right">300,000.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="  border-t border-dashed   py-2 font-semibold">
              <div className="flex justify-between">
                <div>CASH</div>
                <div>900,000.00</div>
              </div>
              <div className="flex justify-between">
                <div>THB</div>
                <div>900,000.00</div>
              </div>
              <br></br>
              <div className="flex justify-end">
                <Button>Print</Button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ReceiptForCus;
