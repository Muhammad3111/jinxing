import { useNavigate } from "react-router-dom";
import ReadCustomers from "../components/customers/ReadCustomers";

export default function Customers() {
  const navigate = useNavigate();
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mijozlar</h1>
        <button
          onClick={() => navigate("/add-customer")}
          className="text-base text-white rounded-md bg-primary py-2 px-4"
        >
          Mijoz qo'shish
        </button>
      </div>
      <ReadCustomers />
    </div>
  );
}
