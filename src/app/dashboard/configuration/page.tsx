"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SaveConfig from "@/components/ModalContent/SaveConfig";
import { FiAlignCenter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
// import DragAndDrop from "../../../components/DragAndDrop";

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
  };
  return (
    <div>
      {/* ------------------Favorite Currency----------------- */}
      {/* <div className="grid grid-cols-2">
        <div>
          <div className="px-4">
            <div className=" font-medium py-1">Favorited Currency</div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="cny">CNY</SelectItem>
                <SelectItem value="krw">KRW</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex justify-end py-2">
              <Button
                size={"sm"}
                className="bg-apptima_primary_text_hide hover:bg-apptima_primary_hover hover:text-apptima_primary_text_white text-apptima_primary"
              >
                Add favorite currency
              </Button>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <div className="mx-6  font-medium py-1">Favorited List</div>
          <div className="bg-white  h-20 mx-6">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="currency">
                {(provided) => (
                  <div
                    className="flex flex-col "
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {currency.map((el, idx) => {
                      // console.log(el);
                      return (
                        <Draggable key={el.id} draggableId={el.id} index={idx}>
                          {(provided) => (
                            <span
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <div className=" border flex justify-between px-2 py-1">
                                <div>{el.name}</div>
                                <div className="flex items-center space-x-2 text-lg">
                                  <FiAlignCenter />
                                  <div className="text-destructive cursor-pointer">
                                    <IoMdClose />
                                  </div>
                                </div>
                              </div>
                            </span>
                          )}
                        </Draggable>
                      );
                    })}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div> */}
      {/* <br></br>
      <hr></hr>
      <br></br> */}
      <div className="grid px-4 grid-cols-2 space-x-6">
        <div>Weighted currency</div>
        <div>Special weighted currency</div>
      </div>
      <br></br>
      <div className="grid grid-cols-2 space-x-2">
        <div className="px-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="gbw" placeholder="Global weighted" />
            <Button
              size={"sm"}
              className="bg-apptima_primary_text_hide hover:bg-apptima_primary_hover hover:text-apptima_primary_text_white text-apptima_primary"
            >
              Use global weighted
            </Button>
          </div>
          <div className="text-xs py-1 text-gray-700">
            <div>You can set all of currency weight by 'Global weight</div>
            <div>
              But if you need to weighted in specific currency, you can edit it
              manually in them box.
            </div>
          </div>
          <br></br>
          <div className="grid grid-cols-5 border  px-2">
            {/* <div>
              <Label htmlFor="weight">USD - United States Dollar</Label>
              <Input type="weight" id="weight" placeholder="weight" />
            </div>
            <div>
              <Label htmlFor="weight">CNY - Chinese Yuan</Label>
              <Input type="weight" id="weight" placeholder="weight" />
            </div>
            <div>
              <Label htmlFor="weight">KRW - South Korean won</Label>
              <Input type="weight" id="weight" placeholder="weight" />
            </div> */}
            <div className="col-span-2 space-y-2 border-r">
              <div className="h-10 flex items-center border-b">Currency</div>

              <div className="h-10 flex items-center">
                USD - United States Dollar
              </div>
              <div className="h-10 flex items-center">CNY - Chinese Yuan</div>
              <div className="h-10 flex items-center">
                KRW - South Korean won
              </div>
            </div>
            <div className="text-end space-y-2 border-r space-x-2">
              <div className="h-10 flex items-center  border-b">
                <div className="text-apptima_primary_text_white">_</div>Current
                rate
              </div>

              <div className="h-10 flex items-center">35.6</div>
              <div className="h-10 flex items-center">35.6</div>
              <div className="h-10 flex items-center">35.6</div>
            </div>
            <div className="text-end space-y-2 space-x-1 border-r">
              <div className="h-10 flex items-center justify-center border-b ">
                <div className="text-apptima_primary_text_white">_</div>Weighted
                Buy
              </div>
              <div className="space-y-2 pb-2 flex justify-center flex-col items-center">
                <Input type="weight" placeholder="weight" className="w-24" />
                <Input type="weight" placeholder="weight" className="w-24" />
                <Input type="weight" placeholder="weight" className="w-24" />
              </div>
            </div>
            <div className="text-end space-y-2 space-x-1">
              <div className="h-10 flex items-center justify-center  border-b ">
                <div className="text-apptima_primary_text_white">_</div>Weighted
                Sell
              </div>
              <div className="space-y-2 pb-2 flex justify-center flex-col items-center">
                <Input type="weight" placeholder="weight" className="w-24" />
                <Input type="weight" placeholder="weight" className="w-24" />
                <Input type="weight" placeholder="weight" className="w-24" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="sgbw" placeholder="Special Global weighted" />
              <Button
                size={"sm"}
                className="bg-apptima_primary_text_hide hover:bg-apptima_primary_hover hover:text-apptima_primary_text_white text-apptima_primary"
              >
                Use global weighted
              </Button>
            </div>
            <div className="text-xs py-1 text-gray-700">
              <div>You can set all of currency weight by 'Global weight</div>
              <div>
                But if you need to weighted in specific currency, you can edit
                it manually in them box.
              </div>
            </div>
            <br></br>
            {/* <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="weight">100USD - United States Dollar</Label>
                <Input type="weight" id="weight" placeholder="weight" />
              </div>
              <div>
                <Label htmlFor="weight">1,000CNY - Chinese Yuan</Label>
                <Input type="weight" id="weight" placeholder="weight" />
              </div>
              <div>
                <Label htmlFor="weight">10,000KRW - South Korean won</Label>
                <Input type="weight" id="weight" placeholder="weight" />
              </div>
            </div> */}
            <div className="grid grid-cols-5 border  px-2">
              <div className="col-span-2 space-y-2 border-r">
                <div className="h-10 flex items-center border-b">Currency</div>

                <div className="h-10 flex items-center">
                  100USD - United States Dollar
                </div>
                <div className="h-10 flex items-center">
                  1,000CNY - Chinese Yuan
                </div>
                <div className="h-10 flex items-center">
                  10,000KRW - South Korean won
                </div>
              </div>
              <div className="text-end space-y-2 border-r space-x-2">
                <div className="h-10 flex items-center  border-b">
                  <div className="text-apptima_primary_text_white">_</div>
                  Current rate
                </div>

                <div className="h-10 flex items-center">35.6</div>
                <div className="h-10 flex items-center">35.6</div>
                <div className="h-10 flex items-center">35.6</div>
              </div>
              <div className="text-end space-y-2 space-x-1 border-r">
                <div className="h-10 flex items-center justify-center border-b ">
                  <div className="text-apptima_primary_text_white">_</div>
                  Weighted Buy
                </div>
                <div className="space-y-2 pb-2 flex justify-center flex-col items-center">
                  <Input type="weight" placeholder="weight" className="w-24" />
                  <Input type="weight" placeholder="weight" className="w-24" />
                  <Input type="weight" placeholder="weight" className="w-24" />
                </div>
              </div>
              <div className="text-end space-y-2 space-x-1 ">
                <div className="h-10 flex items-center justify-center border-b ">
                  <div className="text-apptima_primary_text_white">_</div>
                  Weighted Sell
                </div>
                <div className="space-y-2 pb-2 flex justify-center flex-col items-center">
                  <Input type="weight" placeholder="weight" className="w-24" />
                  <Input type="weight" placeholder="weight" className="w-24" />
                  <Input type="weight" placeholder="weight" className="w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="px-4">
        <div>Minimum Stock</div>
        <br></br>
        <div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <Label htmlFor="amount">USD - United States Dollar</Label>
              <Input type="amount" id="amount" placeholder="amount" />
            </div>
            <div>
              <Label htmlFor="amount">CNY - Chinese Yuan</Label>
              <Input type="amount" id="amount" placeholder="amount" />
            </div>
            <div>
              <Label htmlFor="amount">KRW - South Korean won</Label>
              <Input type="amount" id="amount" placeholder="amount" />
            </div>
            <div>
              <Label htmlFor="amount">JPY - Japan yen</Label>
              <Input type="amount" id="amount" placeholder="amount" />
            </div>
            <div>
              <Label htmlFor="amount">EGP - Europe </Label>
              <Input type="amount" id="amount" placeholder="amount" />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="px-4">
        {/* <Button>SAVE</Button> */}
        <SaveConfig />
      </div>
    </div>
  );
}

export default Configuration;
