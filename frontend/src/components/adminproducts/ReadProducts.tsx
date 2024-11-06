import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

export default function ReadProducts() {
  return (
    <div className="flex flex-col gap-2 border divide-y-2">
      <div className="grid grid-cols-9 p-2">
        <div className="col-span-1 font-bold text-lg">ID</div>
        <div className="col-span-1 font-bold text-lg">Rasm</div>
        <div className="col-span-1 font-bold text-lg">Nomi</div>
        <div className="col-span-1 font-bold text-lg">Ma'lumot</div>
        <div className="col-span-1 font-bold text-lg">Narx</div>
        <div className="col-span-1 font-bold text-lg">Miqdor</div>
        <div className="col-psan-1 font-bold text-lg">Bo'lim</div>
        <div className="col-psan-1 font-bold text-lg">Xarakat</div>
      </div>
      <div className="grid grid-cols-9 px-2 divide-x-2">
        <div className="col-span-1 p-2">#1</div>
        <div className="col-span-1 p-2">Img</div>
        <div className="col-span-1 p-2">Mahsulot 1</div>
        <div className="col-span-1 p-2">zo'r mahsulot</div>
        <div className="col-span-1 p-2">500$</div>
        <div className="col-span-1 p-2">5 ta</div>
        <div className="col-psan-1 p-2">Bo'lim 1</div>
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
