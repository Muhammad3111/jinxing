import { BiCategory } from "react-icons/bi";
import { CiBoxes, CiViewList } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const changeLink = (link: string) => {
    navigate(link);
  };
  return (
    <div className="w-72 bg-white h-screen shadow-md border flex flex-col gap-4 p-4">
      <div className="flex items-center gap-2">
        <img src="./logo.png" alt="logo" className="w-10 h-10 object-cover" />
        <h1 className="text-xl text-primary font-bold">
          <span className="text-secondary">Jin</span>Xing
        </h1>
      </div>
      <ul className="mt-10 flex flex-col gap-2">
        <li
          onClick={() => changeLink("/dashboard")}
          className={`text-lg font-semibold py-2 rounded-md flex items-center gap-2 ${
            location.pathname === "/dashboard"
              ? "bg-primary text-white"
              : " text-black"
          } hover:bg-primary/50 px-4 hover:text-white duration-300 cursor-pointer`}
        >
          <MdOutlineDashboard />
          Bosh Sahif
        </li>
        <li
          onClick={() => changeLink("/orders")}
          className={`text-lg font-semibold py-2 rounded-md flex items-center gap-2 ${
            location.pathname === "/orders" ||
            location.pathname === "/add-order"
              ? "bg-primary text-white"
              : " text-black"
          } hover:bg-primary/50 px-4 hover:text-white duration-300 cursor-pointer`}
        >
          <CiViewList />
          Buyurtmalar
        </li>
        <li
          onClick={() => changeLink("/categories")}
          className={`text-lg font-semibold py-2 rounded-md flex items-center gap-2 ${
            location.pathname === "/categories" ||
            location.pathname === "/add-category"
              ? "bg-primary text-white"
              : " text-black"
          } hover:bg-primary/50 px-4 hover:text-white duration-300 cursor-pointer`}
        >
          <BiCategory />
          Bo'limlar
        </li>
        <li
          onClick={() => changeLink("/products")}
          className={`text-lg font-semibold py-2 rounded-md flex items-center gap-2 ${
            location.pathname === "/products" ||
            location.pathname === "/add-product"
              ? "bg-primary text-white"
              : " text-black"
          } hover:bg-primary/50 px-4 hover:text-white duration-300 cursor-pointer`}
        >
          <CiBoxes />
          Mahsulotlar
        </li>
        <li
          onClick={() => changeLink("/customers")}
          className={`text-lg font-semibold py-2 rounded-md flex items-center gap-2 ${
            location.pathname === "/customers" ||
            location.pathname === "/add-customer"
              ? "bg-primary text-white"
              : " text-black"
          } hover:bg-primary/50 px-4 hover:text-white duration-300 cursor-pointer`}
        >
          <HiOutlineUsers />
          Mijozlar
        </li>
        <li
          onClick={() => changeLink("/expenses")}
          className={`text-lg font-semibold py-2 rounded-md flex items-center gap-2 ${
            location.pathname === "/expenses" ||
            location.pathname === "/add-expense"
              ? "bg-primary text-white"
              : " text-black"
          } hover:bg-primary/50 px-4 hover:text-white duration-300 cursor-pointer`}
        >
          <GrMoney />
          Chiqim
        </li>
      </ul>
    </div>
  );
}
