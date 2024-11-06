import React from "react";
import { BiCategory } from "react-icons/bi";
import { CiBoxes, CiViewList } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi";

export default function Dashboard() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Statistika</h1>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex gap-2 items-center p-4 rounded-md shadow-md border group hover:bg-primary/50 duration-300 cursor-auto col-span-1">
          <HiOutlineUsers className="text-6xl group-hover:text-white" />
          <div className="flex flex-col gap-2 ">
            <h1 className="text-xl font-bold group-hover:text-white">
              1000 ta
            </h1>
            <p className="text-base text-gray-400 font-semibold group-hover:text-white">
              Mijozlar
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center p-4 rounded-md shadow-md border group hover:bg-primary/50 duration-300 cursor-auto col-span-1">
          <CiBoxes className="text-6xl group-hover:text-white" />
          <div className="flex flex-col gap-2 ">
            <h1 className="text-xl font-bold group-hover:text-white">
              1000 ta
            </h1>
            <p className="text-base text-gray-400 font-semibold group-hover:text-white">
              Mahsulotlar
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center p-4 rounded-md shadow-md border group hover:bg-primary/50 duration-300 cursor-auto col-span-1">
          <BiCategory className="text-6xl group-hover:text-white" />
          <div className="flex flex-col gap-2 ">
            <h1 className="text-xl font-bold group-hover:text-white">10 ta</h1>
            <p className="text-base text-gray-400 font-semibold group-hover:text-white">
              Bo'limlar
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center p-4 rounded-md shadow-md border group hover:bg-primary/50 duration-300 cursor-auto col-span-1">
          <CiViewList className="text-6xl group-hover:text-white" />
          <div className="flex flex-col gap-2 ">
            <h1 className="text-xl font-bold group-hover:text-white">100 ta</h1>
            <p className="text-base text-gray-400 font-semibold group-hover:text-white">
              Buyurtmalar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
