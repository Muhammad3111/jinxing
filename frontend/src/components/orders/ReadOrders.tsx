import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

export default function ReadOrders() {
  return (
    <div className="flex flex-col gap-2 border divide-y-2">
      <div className="grid grid-cols-9 p-2">
        <div className="col-span-1 font-bold text-lg">ID</div>
        <div className="col-span-1 font-bold text-lg">Mijoz</div>
        <div className="col-span-1 font-bold text-lg">Tel raqami</div>
        <div className="col-span-1 font-bold text-lg">Sana</div>
        <div className="col-span-1 font-bold text-lg">Jami narx</div>
        <div className="col-span-1 font-bold text-lg">Status</div>
        <div className="col-psan-1 font-bold text-lg">Manzil</div>
        <div className="col-psan-1 font-bold text-lg">Mahsulotlar</div>
        <div className="col-psan-1 font-bold text-lg">Xarakat</div>
      </div>
      <div className="grid grid-cols-9 px-2 divide-x-2">
        <div className="col-span-1 p-2">#1</div>
        <div className="col-span-1 p-2">Muhammad.K</div>
        <div className="col-span-1 p-2">
          <a href="tel:+998999193111" className="text-primary">
            +998999193111
          </a>
        </div>
        <div className="col-span-1 p-2">28/10/2024</div>
        <div className="col-span-1 p-2">500$</div>
        <div className="col-span-1 p-2">
          <span className="text-black bg-yellow-400/50 py-1 px-4 rounded-full">
            Faol
          </span>
        </div>
        <div className="col-psan-1 p-2">Oromgoh MFY</div>
        <div className="col-psan-1 p-2">3 ta</div>
        <div className="col-psan-1 p-2 flex items-center gap-2">
          <button className="bg-primary text-white rounded-full p-1">
            <MdOutlineEdit className="text-xl" />
          </button>
          <button className="bg-red-600 text-white rounded-full p-1">
            <IoTrashOutline className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
