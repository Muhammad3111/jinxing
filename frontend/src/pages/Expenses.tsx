import ReadExpenses from "../components/expenses/ReadExpenses";
import { useNavigate } from "react-router-dom";

export default function Expenses() {
  const navigate = useNavigate();
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Xarajatlar</h1>
        <button
          onClick={() => navigate("/add-expense")}
          className="text-base text-white rounded-md bg-primary py-2 px-4"
        >
          Xarajat qo'shish
        </button>
      </div>
      <ReadExpenses />
    </div>
  );
}
