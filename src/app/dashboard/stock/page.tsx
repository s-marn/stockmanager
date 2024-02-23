"use client";
import React, { useState } from "react";
import Datepicker  from "@/components/ui/datepicker";
import DataExport  from "@/components/ui/data-export";
import Webcam  from "@/components/ui/webcam";

const initDatas = [
  { id: "1", name: "USD" },
  { id: "2", name: "CNY" },
  { id: "3", name: "KRW" },
];

function Configuration() {
  const [currency, setCurrency] = useState(initDatas);

  const handleOnDragEnd = (result: any) => {
    const items = [...currency];
    const [item] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, item);
    setCurrency(items);
  }
  return (
    <div>
      <div className="grid px-4 grid-cols-3 space-x-6">
      <div><h1 className="text-2xl font-bold">Stock Management</h1>
      Start Date
      <br></br>
      <Datepicker />
      </div>
      <div className="pt-8">
        End Date
        <br></br>
        <Datepicker />
        </div>
        <div className="pt-8">
        <br></br>
        <DataExport />
        </div>
      </div>
      <br></br>
      <Webcam />
      <hr></hr>
      <br></br>
      <br></br>
    </div>
  );
}

export default Configuration;
