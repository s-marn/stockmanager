import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

function Home() {
  const branch1 = [
    {
      currency: "USD",
      totalAmount: "฿ 200,000.00",
    },
    {
      currency: "CNY",
      totalAmount: "฿ 100,000.00",
    },
    {
      currency: "KRW",
      totalAmount: "฿ 300,000.00",
    },
    {
      currency: "JPY",
      totalAmount: "฿ 300,000.00",
    },
  ];

  const usd_currency = [
    {
      type: "1",
      quantity: "100",
      amount: "100",
      rate: "35.6",
      status: "min quantity",
      total: "3,650",
    },
    {
      type: "10",
      quantity: "100",
      amount: "1,000",
      rate: "35.6",
      status: "min quantity",
      total: "35,600",
    },
    {
      type: "20",
      quantity: "100",
      amount: "2,000",
      rate: "35.6",
      status: "out of stock",
      total: "71,200",
    },
    {
      type: "50",
      quantity: "100",
      amount: "5,000",
      rate: "35.6",
      status: "suffient",
      total: "178,000",
    },

    {
      type: "100",
      quantity: "100",
      amount: "10,000",
      rate: "35.6",
      status: "suffient",
      total: "356,000",
    },
  ];
  const cny_currency = [
    {
      type: "1",
      quantity: "100",
      amount: "100",
      rate: "4.94",
      status: "min quantity",
      total: "494",
    },
    {
      type: "10",
      quantity: "100",
      amount: "1,000",
      rate: "4.94",
      status: "min quantity",
      total: "4,940",
    },
    {
      type: "20",
      quantity: "100",
      amount: "2,000",
      rate: "4.94",
      status: "out of stock",
      total: "9,880",
    },
    {
      type: "50",
      quantity: "100",
      amount: "5,000",
      rate: "4.94",
      status: "suffient",
      total: "24,700",
    },

    {
      type: "100",
      quantity: "100",
      amount: "10,000",
      rate: "4.94",
      status: "suffient",
      total: "49,400",
    },
  ];

  const total = [
    {
      currency: "USD",
      quantity: "500",
      amount: "18,100",
      rate: "35.6",
      total: "644,360",
    },
    {
      currency: "CNY",
      quantity: "500",
      amount: "18,100",
      rate: "4.94",
      total: "89,414",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <Tabs defaultValue="today" className="">
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">This week</TabsTrigger>
              <TabsTrigger value="month">This month</TabsTrigger>
              <TabsTrigger value="alltime">All time</TabsTrigger>
            </TabsList>
            <br></br>
            <br></br>
            <TabsContent value="today">
              <div className=" flex space-x-4">
                <Card className="w-full">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Sales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">THB1,000,000</div>
                    <p className="text-xs text-muted-foreground">Only today</p>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Buy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">THB1,000,000</div>
                    <p className="text-xs text-muted-foreground">Only today</p>
                  </CardContent>
                </Card>
              </div>
              <br></br>

              <Table>
                <TableCaption>A list of summary recent sales.</TableCaption>
                <TableHeader>
                  <TableRow className="bg-apptima_primary_text_hide hover:bg-apptima_primary_text_hide">
                    <TableHead colSpan={3} className="w-[100px]">
                      Summary (Branch 1)
                    </TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {branch1.map((branch1) => (
                    <TableRow key={branch1.currency}>
                      <TableCell colSpan={3} className="font-medium ">
                        {branch1.currency}
                      </TableCell>

                      <TableCell className="text-right">
                        {branch1.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">฿ 900,000.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>

              <br></br>

              <Table>
                {/* <TableCaption>A list of summary recent sales.</TableCaption> */}
                <TableHeader>
                  <TableRow className="bg-apptima_primary_text_hide hover:bg-apptima_primary_text_hide">
                    <TableHead className="">USD Type</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Rate</TableHead>
                    <TableHead className="text-right">Stock Status</TableHead>
                    <TableHead className="text-right">Amount in THB</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usd_currency.map((usd_currency) => (
                    <TableRow key={usd_currency.type}>
                      <TableCell className="font-medium ">
                        {usd_currency.type}
                      </TableCell>
                      <TableCell className="text-right">
                        {usd_currency.quantity}
                      </TableCell>
                      <TableCell className="text-right">
                        {usd_currency.amount}
                      </TableCell>
                      <TableCell className="text-right">
                        {usd_currency.rate}
                      </TableCell>
                      <TableCell
                        className={`text-right ${
                          usd_currency.status === "suffient"
                            ? "text-green-600"
                            : usd_currency.status === "min quantity"
                            ? "text-yellow-500"
                            : "text-red-700"
                        }`}
                      >
                        {usd_currency.status}
                      </TableCell>
                      <TableCell className="text-right">
                        {usd_currency.total}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell className="text-right">$ 18,100.00</TableCell>
                    <TableCell colSpan={3} className="text-right">
                      ฿ 644,360.00
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>

              <br></br>
              <Table>
                {/* <TableCaption>A list of summary recent sales.</TableCaption> */}
                <TableHeader>
                  <TableRow className="bg-apptima_primary_text_hide hover:bg-apptima_primary_text_hide">
                    <TableHead className="">CNY Type</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Rate</TableHead>
                    <TableHead className="text-right">Stock Status</TableHead>
                    <TableHead className="text-right">Amount in THB</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cny_currency.map((cny_currency) => (
                    <TableRow key={cny_currency.type}>
                      <TableCell className="font-medium ">
                        {cny_currency.type}
                      </TableCell>
                      <TableCell className="text-right">
                        {cny_currency.quantity}
                      </TableCell>
                      <TableCell className="text-right">
                        {cny_currency.amount}
                      </TableCell>
                      <TableCell className="text-right">
                        {cny_currency.rate}
                      </TableCell>
                      <TableCell
                        className={`text-right ${
                          cny_currency.status === "suffient"
                            ? "text-green-600"
                            : cny_currency.status === "min quantity"
                            ? "text-yellow-500"
                            : "text-red-700"
                        }`}
                      >
                        {cny_currency.status}
                      </TableCell>
                      <TableCell className="text-right">
                        {cny_currency.total}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell className="text-right">¥ 18,100.00</TableCell>
                    <TableCell colSpan={3} className="text-right">
                      ฿ 89,414.00
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
        <div className="px-8 pt-16 mt-2">
          <div className="rounded-md border">
            <Table className="">
              {/* <TableCaption>A list of summary recent sales.</TableCaption> */}
              <TableHeader>
                <TableRow className="">
                  <TableHead className="">Currency</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Rate</TableHead>
                  <TableHead className="text-right">Amount in THB</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {total.map((total) => (
                  <TableRow key={total.currency}>
                    <TableCell className="font-medium ">
                      {total.currency}
                    </TableCell>
                    <TableCell className="text-right">
                      {total.quantity}
                    </TableCell>
                    <TableCell className="text-right">{total.amount}</TableCell>
                    <TableCell className="text-right">{total.rate}</TableCell>

                    <TableCell className="text-right">{total.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
