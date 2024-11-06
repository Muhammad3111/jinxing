import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import Modal from "../modal/Modal";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <div className="px-24 py-4 flex justify-between items-center shadow-lg sx:hidden">
      <div className="flex items-center gap-2">
        <img src="./logo.png" alt="logo" className="w-10 h-10 object-cover" />
        <h1 className="text-xl text-primary font-bold">
          <span className="text-secondary">Jin</span>Xing
        </h1>
      </div>
      <div className="flex gap-10 items-center">
        <ul className="flex text-base font-semibold gap-4">
          <li className="text-black hover:text-primary duration-300">
            Bosh Sahifa
          </li>
          <li className="text-black hover:text-primary duration-300">
            Biz haqimizda
          </li>
          <li className="text-black hover:text-primary duration-300">
            Mahsulotlar
          </li>
          <li className="text-black hover:text-primary duration-300">Aloqa</li>
        </ul>
        <div className="relative">
          <input
            type="text"
            className="round-full py-2 pl-4 pr-8 border-2 focus:border-2 focus:border-primary focus:outline-none rounded-full text-base"
            placeholder="Mahsulotlar izlash"
          />
          <IoSearch className="absolute right-3 top-3 text-xl" />
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-4 py-2 text-base rounded-full text-black hover:bg-primary/50 hover:text-white duration-300 inline-flex items-center gap-2"
            onClick={openModal}
          >
            <LuUser2 className="text-xl" /> Kirish
          </button>
          {isOpen && <Modal isOpen={isOpen} onClose={onClose} />}
          <button className="px-4 py-2 text-base rounded-full text-black hover:bg-primary/50 hover:text-white duration-300 inline-flex items-center gap-2">
            <IoIosHeartEmpty className="text-xl" />
            Saralangan
          </button>
          <button className="flex gap-2 items-center rounded-full text-black text-base hover:bg-primary/50 hover:text-white duration-300 px-4 py-2">
            <div className="relative">
              <IoCartOutline className="text-2xl" />
              <span className="rounded-full w-4 h-4 bg-secondary text-white flex items-center justify-center text-[12px] absolute -top-2 -right-2">
                2
              </span>
            </div>
            Savat
          </button>
        </div>
      </div>
    </div>
  );
}
