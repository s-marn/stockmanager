"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { PopoverProps } from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";
// import { Button } from "@/registry/new-york/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Customer } from "../../../data/customer";
import { Button } from "@/components/ui/button";
// import { Command } from "@/components/ui/command"

interface CustomerSelectorProps extends PopoverProps {
  customers: Customer[];
}

export function CustomerSelector({
  customers,
  ...props
}: CustomerSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedCustomer, setSelectedCustomer] = React.useState<Customer>();
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Load a preset..."
          aria-expanded={open}
          className="flex-1 justify-between w-full"
        >
          {selectedCustomer ? selectedCustomer.name : "Type name customer..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] p-0">
        <Command>
          <CommandInput placeholder="Search Customer..." />
          <CommandEmpty>No customer found.</CommandEmpty>
          <CommandGroup heading="Name Customer">
            {customers.map((customer) => (
              <CommandItem
                key={customer.id}
                onSelect={() => {
                  setSelectedCustomer(customer);
                  setOpen(false);
                }}
              >
                {customer.name}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedCustomer?.id === customer.id
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
          {/* <CommandGroup className="pt-0">
            <CommandItem onSelect={() => router.push("/examples")}>
              More examples
            </CommandItem>
          </CommandGroup> */}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
