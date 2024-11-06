import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

export default function ReadCategory() {
  return (
    <div className="flex flex-col gap-2 border divide-y-2">
      <div className="grid grid-cols-4 p-2">
        <div className="col-span-1 font-bold text-lg">ID</div>
        <div className="col-span-1 font-bold text-lg">Bo'lim nomi</div>
        <div className="col-span-1 font-bold text-lg">Qo'shimcha ma'lumot</div>
        <div className="col-psan-1 font-bold text-lg">Xarakat</div>
      </div>
      <div className="grid grid-cols-4 px-2 divide-x-2">
        <div className="col-span-1 p-2">#1</div>
        <div className="col-span-1 p-2">Bo'lim 1</div>
        <div className="col-span-1 p-2">Qo'shimcha izoh</div>
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
