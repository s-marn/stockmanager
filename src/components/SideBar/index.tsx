"use client";
import { Fragment, ReactNode, useMemo, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  PlusCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname } from "next/navigation";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface SidebarProps {
  children: ReactNode;
}

export default function SideBar({ children }: SidebarProps) {
  const pathName = usePathname();
  const currentPage = useMemo(() => pathName.split("/")[2], [pathName]);
  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: ChartPieIcon,
      current: currentPage === undefined,
    },
    {
      name: "Home",
      href: "/dashboard/home",
      icon: HomeIcon,
      current: currentPage === "home",
    },
    {
      name: "Create Sales",
      href: "/dashboard/create-sales",
      icon: PlusCircleIcon,
      current: currentPage === "create-sales",
    },
    {
      name: "Sales History",
      href: "/dashboard/sales-history",
      icon: DocumentTextIcon,
      current: currentPage === "sales-history",
    },
    {
      name: "Stock Management",
      href: "/dashboard/stock",
      icon: CalendarIcon,
      current: currentPage === "stock",
    },
    {
      name: "Configuration",
      href: "/dashboard/configuration",
      icon: Cog6ToothIcon,
      current: currentPage === "configuration",
    },
    //   { name: "wait", href: "#", icon: CalendarIcon, current: false },
    //   { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
    //   { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
  ];
  return (
    <>
      <div className="h-screen">
        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-apptima_primary px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <div className="text-apptima_primary_text_white text-4xl font-semibold">
                T2C
              </div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-apptima_primary_hover text-apptima_primary_text_white"
                              : "text-apptima_primary_text_hide hover:text-apptima_primary_text_white hover:bg-apptima_primary_hover",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-apptima_primary_text_white"
                                : "text-apptima_primary_text_hide group-hover:text-apptima_primary_text_white",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-apptima_primary_text_hide hover:bg-apptima_primary_hover hover:text-apptima_primary_text_white"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-apptima_primary_text_hide group-hover:text-apptima_primary_text_white"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72  h-full flex flex-col">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch justify-end lg:gap-x-6">
              {/* <div className="flex w-5/6 justify-center">
                <Select>
                  <div className="flex items-center ">
                    <SelectTrigger className="w-[180px] flex items-center ">
                      <SelectValue placeholder="All Branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Branch</SelectItem>
                      <SelectItem value="b1">Branch 1</SelectItem>
                      <SelectItem value="b2">Branch 2</SelectItem>
                    </SelectContent>
                  </div>
                </Select>
              </div> */}

              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1702700415763-3ad5a9bdde48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Admin admin
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10  flex-1">
            <div className="px-4 sm:px-6 lg:px-8  h-full  ">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
