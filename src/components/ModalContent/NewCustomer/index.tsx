import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaRegImages } from "react-icons/fa6";
import React from "react";

function NewCustomer() {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="h-10 border p-2 text-center flex items-center rounded-md bg-foreground text-white text-sm font-medium">
            New Customer
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>New Customer</AlertDialogTitle>
            <div className="space-y-2">
              <div>
                <Select>
                  <SelectTrigger className="w-[227px]">
                    <SelectValue placeholder="Prefix" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mr">Mr.</SelectItem>
                    <SelectItem value="miss">Miss</SelectItem>
                    <SelectItem value="mrs">Mrs.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-2">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="firstname">Firstname</Label>
                  <Input
                    type="firstname"
                    id="firstname"
                    placeholder="Firstname"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="lastname">Lastname</Label>
                  <Input type="lastname" id="lastname" placeholder="Lastname" />
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="tel">Tel</Label>
                  <Input type="tel" id="tel" placeholder="Tel" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="idpass">ID / Passport No.</Label>
                  <Input
                    type="idpass"
                    id="idpass"
                    placeholder="ID / Passport No."
                  />
                </div>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div>
              <div className="font-semibold">Attach Image</div>
              <div className="text-9xl flex justify-center p-4 text-muted-foreground">
                <FaRegImages />
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="">Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-apptima_primary_hover">
              Save
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default NewCustomer;
