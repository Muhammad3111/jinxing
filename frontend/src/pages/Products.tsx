import ReadProducts from "../components/adminproducts/ReadProducts";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mahsulotlar</h1>
        <button
          onClick={() => navigate("/add-product")}
          className="text-base text-white rounded-md bg-primary py-2 px-4"
        >
          Mahsulot qo'shish
        </button>
      </div>
      <ReadProducts />
    </div>
  );
}
