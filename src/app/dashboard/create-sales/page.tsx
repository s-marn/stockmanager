import React from "react";
// import { Button } from "@/components/ui/button";
// import { GlobeAltIcon } from "@heroicons/react/24/outline";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import StartBuySell from "../../../components/ModalContent/StartBuySell";
import { FcCurrencyExchange } from "react-icons/fc";
import TableCreate from "@/components/Table/TableCreate";
import { CustomerSelector } from "../../../components/Selector/CustomerSelect";
import { customers } from "@/data/customer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NewCustomer from "@/components/ModalContent/NewCustomer";
import { AddPayment } from "@/components/ModalContent/AddPayment";

function CreateSales() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <AlertDialog>
            <AlertDialogTrigger>
              <div className="flex h-10 px-4 py-2 border rounded-md bg-apptima_primary_text_hide hover:bg-apptima_primary hover:text-apptima_primary_text_white">
                <FcCurrencyExchange className="mr-2 h-6 w-6 animate-bounce" />
                Start
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-[1000px]">
              <StartBuySell />
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-apptima_primary hover:bg-apptima_primary_hover">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div>
            <TableCreate />
          </div>
        </div>
        <div className="px-2">
          <div className="grid grid-cols-5 space-x-2">
            <div className="col-span-4">
              <CustomerSelector customers={customers} />
            </div>
            <div>
              {/* <Button variant={"default"}>New Customer</Button> */}
              <NewCustomer />
            </div>
            <br></br>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2">
                  <div className="grid grid-cols-2">
                    <div className="">Firstname :</div>
                    <div className="font-semibold">John</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div>Lastname :</div>
                    <div className="font-semibold">Doh</div>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="grid grid-cols-2">
                    <div>Tel :</div>
                    <div className="font-semibold">0999999999</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div>ID /Passport No. :</div>
                    <div className="font-semibold">1111199999111</div>
                  </div>
                </div>
              </CardContent>
              {/* <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
            </Card>
          </div>
          <br></br>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quantity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <div>USD</div>
                    <div>CNY</div>
                    <div>Total</div>
                    <br></br>
                    <div className="font-semibold">Payment Total</div>
                  </div>
                  <div>
                    <div>฿210,543.00</div>
                    <div>฿988.44</div>
                    <div>฿211,531.00</div>
                    <br></br>
                    <div className="font-semibold">฿211,531.00</div>
                  </div>
                </div>
              </CardContent>
              {/* <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
            </Card>
            <br></br>
            <div className="">
              <div className="flex justify-between items-center">
                <div>Payment Type</div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="card">Credit card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between font-semibold items-center">
                <div>Amount</div>
                <div className="w-[180px] h-10 items-center border rounded-md px-2  flex">
                  ฿211,531.00
                </div>
              </div>
              <br></br>
              <div className="flex justify-end">
                {/* <Button variant={"destructive"}>Add Payment</Button> */}
                <AddPayment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSales;
