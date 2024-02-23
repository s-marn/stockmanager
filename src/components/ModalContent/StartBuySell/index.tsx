import React from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

function StartBuySell() {
  return (
    <>
      <AlertDialogHeader>
        <Tabs defaultValue="buy">
          <TabsList className="w-full bg-apptima_primary_text_hide">
            <TabsTrigger value="buy" className="w-full ">
              Buy
            </TabsTrigger>
            <TabsTrigger value="sell" className="w-full">
              Sell
            </TabsTrigger>
          </TabsList>
          <br></br>
          <br></br>
          <TabsContent value="buy">
            <div className="grid grid-cols-10 space-x-2">
              <div className="col-span-3">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="amount">Amount</Label>
                  <Input type="amount" id="amount" placeholder="" />
                </div>
              </div>
              <div className="col-span-3">
                <div className="grid w-full  max-w-sm items-center gap-1.5">
                  <Label htmlFor="fromcurrency">From</Label>
                  {/* <Input type="amount" id="amount" placeholder="" /> */}
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="cny">CNY</SelectItem>
                      <SelectItem value="jpy">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-center items-end cursor-pointer ">
                <ArrowPathIcon className="border h-8 w-8 p-1 rounded-full text-xs hover:bg-apptima_primary_text_hide hover:text-apptima_primary_text_white" />
              </div>
              <div className="col-span-3">
                <div className="grid w-full  max-w-sm items-center gap-1.5">
                  <Label htmlFor="tocurrency">To</Label>
                  {/* <Input type="amount" id="amount" placeholder="" /> */}
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="cny">CNY</SelectItem>
                      <SelectItem value="jpy">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <br></br>
            <div className="flex justify-between">
              <div>
                <div className="text-gray-600 text-sm">100.00 US Dollars =</div>
                <div className="text-2xl font-medium">3,488.51 Thai Bath</div>
                <div className="text-gray-600 text-sm">1 USD = 34.84 THB</div>
                <div className="text-gray-600 text-sm">1 THB = 0.03 USD</div>
              </div>
              <div className="">
                <Label htmlFor="typecur" className="pl-16">
                  Type of
                </Label>
                <div className="grid grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-10 flex justify-end items-center p-2">
                      20
                    </div>
                    <div className="h-10 flex justify-end items-center p-2">
                      50
                    </div>
                    <div className="h-10 flex justify-end items-center p-2">
                      100
                    </div>
                    <div className="h-10 flex justify-end items-center p-2">
                      500
                    </div>
                    <div className="h-10 flex justify-end items-center p-2">
                      1000
                    </div>
                  </div>
                  <div className="col-span-3 space-y-2">
                    <Input
                      type="typecur20"
                      id="typecur20"
                      className="w-full"
                      placeholder=""
                    />
                    <Input
                      type="typecur50"
                      id="typecur50"
                      className="w-full"
                      placeholder=""
                    />
                    <Input
                      type="typecur100"
                      id="typecur100"
                      className="w-full"
                      placeholder=""
                    />
                    <Input
                      type="typecur500"
                      id="typecur500"
                      className="w-full"
                      placeholder=""
                    />
                    <Input
                      type="typecur1000"
                      id="typecur1000"
                      className="w-full"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-apptima_primary_text_hide text-9xl font-extrabold">
              BUY
            </div>
          </TabsContent>
          <TabsContent value="sell">
            <div className="grid grid-cols-10 space-x-2">
              <div className="col-span-3">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="amount">Amount</Label>
                  <Input type="amount" id="amount" placeholder="" />
                </div>
              </div>
              <div className="col-span-3">
                <div className="grid w-full  max-w-sm items-center gap-1.5">
                  <Label htmlFor="fromcurrency">From</Label>
                  {/* <Input type="amount" id="amount" placeholder="" /> */}
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="cny">CNY</SelectItem>
                      <SelectItem value="jpy">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-center items-end cursor-pointer ">
                <ArrowPathIcon className="border h-8 w-8 p-1 rounded-full text-xs hover:bg-apptima_primary_text_hide hover:text-apptima_primary_text_white" />
              </div>
              <div className="col-span-3">
                <div className="grid w-full  max-w-sm items-center gap-1.5">
                  <Label htmlFor="tocurrency">To</Label>
                  {/* <Input type="amount" id="amount" placeholder="" /> */}
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="cny">CNY</SelectItem>
                      <SelectItem value="jpy">JPY</SelectItem>
                      <SelectItem value="thb">THB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <br></br>
            <div className="flex justify-between">
              <div>
                <div className="text-gray-600 text-sm">
                  30,000.00 Thai Bath =
                </div>
                <div className="text-2xl font-medium">864.34 US Dollars</div>
                <div className="text-gray-600 text-sm">1 USD = 34.87 THB</div>
                <div className="text-gray-600 text-sm">1 THB = 0.03 USD</div>
              </div>
              <div className="">
                <Label htmlFor="typecur" className="pl-16">
                  Type of
                </Label>
                <div className="grid grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-10 flex justify-end items-center p-2">
                      20
                    </div>
                    <div className="h-10 flex justify-end items-center p-2">
                      50
                    </div>
                    <div className="h-10 flex justify-end items-center p-2">
                      100
                    </div>
                    <div className="h-10 flex justify-end items-center p-2">
                      500
                    </div>
                    <div className="h-10 flex justify-end items-center p-2">
                      1000
                    </div>
                  </div>
                  <div className="col-span-3 space-y-2">
                    <Input
                      type="typecur20"
                      id="typecur20"
                      className="w-full"
                      placeholder=""
                    />
                    <Input
                      type="typecur50"
                      id="typecur50"
                      className="w-full"
                      placeholder=""
                    />
                    <Input
                      type="typecur100"
                      id="typecur100"
                      className="w-full"
                      placeholder=""
                    />
                    <Input
                      type="typecur500"
                      id="typecur500"
                      className="w-full"
                      placeholder=""
                    />
                    <Input
                      type="typecur1000"
                      id="typecur1000"
                      className="w-full"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-apptima_primary_text_hide text-9xl font-extrabold">
              SELL
            </div>
          </TabsContent>
        </Tabs>
      </AlertDialogHeader>
    </>
  );
}

export default StartBuySell;
