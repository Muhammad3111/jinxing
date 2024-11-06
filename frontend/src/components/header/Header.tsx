import { useQuery } from "@tanstack/react-query";
import { getCurrency } from "../../apis/apis";
import { FaRegCircleUser } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { isLoading, data } = useQuery({
    queryKey: ["currency"],
    queryFn: getCurrency,
  });
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="w-full flex justify-between gap-4 items-center p-5 shodow-md border">
      <div className="flex items-center gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex items-center gap-4">
            <h1>Bugungi dollar kursi:</h1>
            <p className="flex items-center gap-2">
              $ <span className="font-bold">{data?.conversion_rates.USD}</span>{" "}
              = <span className="font-bold">{data?.conversion_rates.UZS}</span>{" "}
              so'm
            </p>
          </div>
        )}
      </div>
      <div
        className={`flex gap-2 items-center rounded-full py-2 px-4 cursor-pointer ${
          location.pathname === "/admin-profile" ? "bg-primary text-white" : ""
        } hover:bg-primary/50 hover:text-white duration-300`}
        onClick={() => navigate("/admin-profile")}
      >
        <FaRegCircleUser className="text-4xl" />
        <h1 className="text-lg font-semibold">Muhammad</h1>
      </div>
    </div>
  );
}
