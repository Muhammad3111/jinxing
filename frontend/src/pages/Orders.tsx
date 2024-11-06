import { useNavigate } from "react-router-dom";
import ReadOrders from "../components/orders/ReadOrders";

export default function Orders() {
  const navigate = useNavigate();
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Buyurtmalar</h1>
        <button
          onClick={() => navigate("/add-order")}
          className="text-base text-white rounded-md bg-primary py-2 px-4"
        >
          Buyurtma qo'shish
        </button>
      </div>
      <ReadOrders />
    </div>
  );
}
