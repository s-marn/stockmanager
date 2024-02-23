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

function Page() {
  return (
    <div>
      <div className="text-4xl text-neutral-600 font-medium animate-bounce mb-6">
        <span className="border p-4 rounded-full bg-red-400">
          Exchange Rate
        </span>
      </div>
      <div className="px-4 underline">4 January 2021 UPDATE 04:26 PM</div>
      <br></br>
      <div className="grid grid-cols-3">
        <div className="border rounded-lg col-span-2">
          <Table>
            <TableCaption>4 January 2021 UPDATE 04:26 PM</TableCaption>
            <TableHeader className="">
              <TableRow className="grid grid-cols-3 text-lg bg-apptima_primary_text_hide hover:bg-apptima_primary_text_hide">
                <TableHead className="">Currency</TableHead>
                <TableHead className="">BUY</TableHead>
                <TableHead>SELL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="grid grid-cols-3 ">
                <TableCell className="font-medium flex space-x-2 items-center">
                  <img src="https://superrichrate2.ztidev.com/sprrate/api/v1/stream?path=flags%2Fspr__1485219212.png" />
                  <div className="">
                    <div>USD</div>
                    <div className="text-xs text-zinc-400 font-light">
                      United States
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-apptima_primary flex items-center ">
                  34.37
                </TableCell>
                <TableCell className="flex items-center">34.49</TableCell>
              </TableRow>
              <TableRow className="grid grid-cols-3 ">
                <TableCell className="font-medium flex space-x-2 items-center">
                  <img src="https://superrichrate2.ztidev.com/sprrate/api/v1/stream?path=flags%2Fspr__1485219366.png" />
                  <div className="">
                    <div>EUR</div>
                    <div className="text-xs text-zinc-400 font-light">
                      European Union
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-apptima_primary flex items-center">
                  34.37
                </TableCell>
                <TableCell className="flex items-center">34.49</TableCell>
              </TableRow>
              <TableRow className="grid grid-cols-3 ">
                <TableCell className="font-medium flex space-x-2 items-center">
                  <img src="https://superrichrate2.ztidev.com/sprrate/api/v1/stream?path=flags%2Fspr__1485451644.png" />
                  <div className="">
                    <div>GBP</div>
                    <div className="text-xs text-zinc-400 font-light">
                      United Kingdom
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-apptima_primary flex items-center">
                  34.37
                </TableCell>
                <TableCell className="flex items-center">34.49</TableCell>
              </TableRow>
              <TableRow className="grid grid-cols-3 ">
                <TableCell className="font-medium flex space-x-2 items-center">
                  <img src="https://superrichrate2.ztidev.com/sprrate/api/v1/stream?path=flags%2Fspr__1485599004.png" />
                  <div className="">
                    <div>CHF</div>
                    <div className="text-xs text-zinc-400 font-light">
                      Switzerland
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-apptima_primary flex items-center">
                  34.37
                </TableCell>
                <TableCell className="flex items-center">34.49</TableCell>
              </TableRow>
              <TableRow className="grid grid-cols-3 ">
                <TableCell className="font-medium flex space-x-2 items-center">
                  <img src="https://superrichrate2.ztidev.com/sprrate/api/v1/stream?path=flags%2Fspr__1485708690.png" />
                  <div className="">
                    <div>AUD</div>
                    <div className="text-xs text-zinc-400 font-light">
                      Australia
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-apptima_primary flex items-center">
                  34.37
                </TableCell>
                <TableCell className="flex items-center">34.49</TableCell>
              </TableRow>
              <TableRow className="grid grid-cols-3 ">
                <TableCell className="font-medium flex space-x-2 items-center">
                  <img src="https://superrichrate2.ztidev.com/sprrate/api/v1/stream?path=flags%2Fspr__1485708758.png" />
                  <div className="">
                    <div>JYP</div>
                    <div className="text-xs text-zinc-400 font-light">
                      Japan
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-apptima_primary flex items-center">
                  34.37
                </TableCell>
                <TableCell className="flex items-center">34.49</TableCell>
              </TableRow>
              <TableRow className="grid grid-cols-3 ">
                <TableCell className="font-medium flex space-x-2 items-center">
                  <img src="https://superrichrate2.ztidev.com/sprrate/api/v1/stream?path=flags%2Fspr__1485708912.png" />
                  <div className="">
                    <div>MYR</div>
                    <div className="text-xs text-zinc-400 font-light">
                      Malaysia
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-apptima_primary flex items-center">
                  34.37
                </TableCell>
                <TableCell className="flex items-center">34.49</TableCell>
              </TableRow>
              <TableRow className="grid grid-cols-3 ">
                <TableCell className="font-medium flex space-x-2 items-center">
                  <img src="https://superrichrate2.ztidev.com/sprrate/api/v1/stream?path=flags%2Fspr__1485708946.png" />
                  <div className="">
                    <div>SGD</div>
                    <div className="text-xs text-zinc-400 font-light">
                      Singapore
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-apptima_primary flex items-center">
                  34.37
                </TableCell>
                <TableCell className="flex items-center">34.49</TableCell>
              </TableRow>
              <TableRow className="grid grid-cols-3 ">
                <TableCell className="font-medium flex space-x-2 items-center">
                  <img src="https://superrichrate2.ztidev.com/sprrate/api/v1/stream?path=flags%2Fspr__1485708973.png" />
                  <div className="">
                    <div>HKD</div>
                    <div className="text-xs text-zinc-400 font-light">
                      Hong Kong
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-apptima_primary flex items-center">
                  34.37
                </TableCell>
                <TableCell className="flex items-center">34.49</TableCell>
              </TableRow>
              <TableRow className="grid grid-cols-3 ">
                <TableCell className="font-medium flex space-x-2 items-center">
                  <img src="https://superrichrate2.ztidev.com/sprrate/api/v1/stream?path=flags%2Fspr__1485708996.png" />
                  <div className="">
                    <div>CAD</div>
                    <div className="text-xs text-zinc-400 font-light">
                      Canada
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-apptima_primary flex items-center">
                  34.37
                </TableCell>
                <TableCell className="flex items-center">34.49</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Page;
