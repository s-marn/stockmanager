import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function SaveConfig() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="h-10 px-4 py-2 bg-apptima_primary_text_hide rounded-md font-medium  hover:bg-apptima_primary_hover hover:text-apptima_primary_text_white">
            Save
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[900px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold bg-apptima_primary_text_hide w-24 p-2 animate-bounce rounded-full">
              Summary
            </DialogTitle>
            <div>
              {/* <br></br> */}
              <div>
                <div className="text-lg font-medium py-2 underline">
                  Favorite currency
                </div>
                <div>USD - United States Dollar</div>
                <div>CNY - Chinese Yuan</div>
                <div>KRW - South Korean won</div>
              </div>
              <br></br>
              <hr></hr>
              <br></br>
              <div>
                <div className="text-lg font-medium underline">
                  Weighted currency
                </div>
                <div className="grid grid-cols-4">
                  <div className="">
                    <div className="py-2 font-medium">Currency</div>
                    <div>
                      <div>USD - United States Dollar</div>
                      <div>CNY - Chinese Yuan</div>
                      <div>KRW - South Korean won</div>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="py-2 font-medium">Current Rate</div>
                    <div>
                      <div>35.60</div>
                      <div>4.94</div>
                      <div>0.027</div>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="py-2 font-medium">Weighted</div>
                    <div>
                      <div>+0.2%</div>
                      <div>+0.2%</div>
                      <div>+0.3%</div>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="py-2 font-medium">Weighted Currency</div>
                    <div>
                      <div>35.8</div>
                      <div>5.14</div>
                      <div>0.057</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <br></br>
                <hr></hr>
                <br></br>
                <div className="text-lg py-2 font-medium underline">
                  Minimum stock
                </div>

                <div className="grid grid-cols-4">
                  <div>
                    <div>USD - United States Dollar</div>
                    <div>CNY - Chinese Yuan</div>
                    <div>KRW - South Korean won</div>
                  </div>
                  <div className="text-end">
                    <div>1,000,000</div>
                    <div>10,000,000</div>
                    <div>200,000,000</div>
                  </div>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SaveConfig;
