import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";

function PrintReciept() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="h-10 border p-4 text-center flex items-center rounded-md bg-destructive text-white text-sm font-medium">
            Print
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="border-b border-dashed font-medium">
              <div className="flex flex-col space-y-2  justify-center items-center">
                <div className="text-2xl">T2C</div>
                <div>Exchange Currency service</div>
                <div>2972 Westheimer Rd. Santa Ana, Illinois 85486</div>
                <div className="flex space-x-2">
                  <div>Tel: 0999999999</div>
                  <div>Email: Test@mail.com</div>
                </div>
              </div>
              <br></br>
            </DialogTitle>
            <div className="border-b border-dashed text-sm text-muted-foreground">
              <div>Sale Ref: Mrs.Miki Miki</div>
              <div>Date: 01-01-2023 15:40</div>
              {/* <br></br> */}
            </div>
            <div className="space-y-2 py-4 border-b border-dashed">
              <div className="grid grid-cols-4 text-sm ">
                <div>USD</div>
                <div></div>
                <div className="text-right">35.6</div>
                <div className="text-right">100</div>
              </div>
              <div className="grid grid-cols-4 text-sm ">
                <div>CNY</div>
                <div></div>
                <div className="text-right">4.94</div>
                <div className="text-right">1,000</div>
              </div>
            </div>
            <div className="flex justify-between py-2 font-semibold">
              <div>THB</div>
              <div>4,564.94</div>
            </div>
          </DialogHeader>
          <DialogFooter>
            <Button variant={"outline"}>Cancle</Button>
            <Button className="bg-apptima_primary_hover">Confirm Print</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PrintReciept;
