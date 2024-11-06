import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoHomeOutline, IoSearch } from "react-icons/io5";

export default function MobileMenu() {
  return (
    <div className="fixed bottom-0 left-0 p-4 rounded-full">
      <div className="flex items-center justify-between">
        <li>
          <IoHomeOutline className="text-xl" />
        </li>
        <li>
          <IoSearch className="text-xl" />
        </li>
        <li>
          <IoIosHeartEmpty className="text-xl" />
        </li>
        <li>
          <IoCartOutline className="text-xl" />
        </li>
      </div>
    </div>
  );
}
