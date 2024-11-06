import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type ProductTypes = {
  id: number;
  title: string;
  img: string;
  info: string;
  price: string;
  oldPrice?: string;
};

export default function Products() {
  const products: ProductTypes[] = [
    {
      id: 1,
      title:
        "Compressor unit for wellhead gas recovery and pipelinepressurization",
      img: "https://omo-oss-image.thefastimg.com/portal-saas/pg2024062816574382380/cms/image/4b7456a6-994d-4d1c-a4ce-ce2f8cc0097b.jpg",
      info: "Skid-mounted compressor unit shall be designed and produced according to API STD 618, API SPEC 11P, ISO13631, GB/T20322, GB/T25359, and enterprise standard CX2018 Technical Regulations for Skid-mounted",
      price: "400",
      oldPrice: "600",
    },
    {
      id: 2,
      title:
        "Compressor unit for wellhead gas recovery and pipelinepressurization",
      img: "https://omo-oss-image.thefastimg.com/portal-saas/pg2024062816574382380/cms/image/4b7456a6-994d-4d1c-a4ce-ce2f8cc0097b.jpg",
      info: "Skid-mounted compressor unit shall be designed and produced according to API STD 618, API SPEC 11P, ISO13631, GB/T20322, GB/T25359, and enterprise standard CX2018 Technical Regulations for Skid-mounted",
      price: "400",
      oldPrice: "600",
    },
    {
      id: 3,
      title:
        "Compressor unit for wellhead gas recovery and pipelinepressurization",
      img: "https://omo-oss-image.thefastimg.com/portal-saas/pg2024062816574382380/cms/image/4b7456a6-994d-4d1c-a4ce-ce2f8cc0097b.jpg",
      info: "Skid-mounted compressor unit shall be designed and produced according to API STD 618, API SPEC 11P, ISO13631, GB/T20322, GB/T25359, and enterprise standard CX2018 Technical Regulations for Skid-mounted",
      price: "400",
      oldPrice: "600",
    },
    {
      id: 4,
      title:
        "Compressor unit for wellhead gas recovery and pipelinepressurization",
      img: "https://omo-oss-image.thefastimg.com/portal-saas/pg2024062816574382380/cms/image/4b7456a6-994d-4d1c-a4ce-ce2f8cc0097b.jpg",
      info: "Skid-mounted compressor unit shall be designed and produced according to API STD 618, API SPEC 11P, ISO13631, GB/T20322, GB/T25359, and enterprise standard CX2018 Technical Regulations for Skid-mounted",
      price: "400",
      oldPrice: "600",
    },
  ];
  return (
    <div className="px-24 py-10 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Mahsulotlar</h1>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-span-1 rounded-md shadow-lg border overflow-hidden"
          >
            <div className="w-full h-44 relative">
              <div className="p-1 rounded-full absolute right-2 top-2 bg-primary">
                <IoIosHeartEmpty className="text-xl cursor-pointer text-white hover:scale-110 duration-300" />
              </div>
              <img
                src={product.img}
                alt="compressor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col p-4 gap-2">
              <h1 className="text-lg font-bold line-clamp-2">
                {product.title}
              </h1>
              <p className="text-sm font-normal line-clamp-3">{product.info}</p>
              <strong className="text-xl font-bold text-red-600">
                <del className="text-gray-400 text-lg font-normal">
                  {product.oldPrice}$
                </del>{" "}
                /{product.price}$
              </strong>
              <div className="flex justify-between">
                <button className="text-lg font-semibold inline-flex gap-2 items-center hover:text-primary duration-300">
                  Batafsil <MdKeyboardDoubleArrowRight className="text-xl" />
                </button>
                <button className="rounded-full bg-primary text-white p-2 hover:bg-primary/50 hover:text-black duration-300">
                  <IoBagAddOutline className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
