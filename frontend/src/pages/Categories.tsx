import ReadCategory from "../components/categories/ReadCategory";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Bo'limlar</h1>
        <button
          onClick={() => navigate("/add-category")}
          className="text-base text-white rounded-md bg-primary py-2 px-4"
        >
          Bo'lim qo'shish
        </button>
      </div>
      <ReadCategory />
    </div>
  );
}
