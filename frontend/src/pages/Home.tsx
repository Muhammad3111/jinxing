import Slider from "../components/banner/Banner";
import Categroies from "../components/category/Categroies";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/products/Products";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Navbar />
      <Slider />
      <Categroies />
      <Products />
    </div>
  );
}
