import { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function AddProduct() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-5">
      <form className="grid grid-cols-2 gap-2 grid-rows-4">
        <input
          type="text"
          className="col-span-1 row-span-1 border rounded-md py-2 px-4 text-base"
          placeholder="Mahsulot nomi"
        />
        <input
          type="text"
          className="col-span-1 border rounded-md py-2 px-4 text-base"
          placeholder="Qo'shimcha ma'lumot"
        />

        {/* Image Upload Area */}
        <div className="col-span-1 row-span-3 flex flex-col items-center">
          <label
            htmlFor="fileInput"
            className="relative w-full h-40 flex items-center justify-center rounded-md border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 transition-colors"
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded Preview"
                className="w-full h-full object-contain rounded-md"
              />
            ) : (
              <FaImage className="text-gray-400 text-6xl" />
            )}
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
        <input
          type="text"
          className="col-span-1 row-span-1 border rounded-md py-2 px-4 text-base"
          placeholder="Mahsulot narxi"
        />
        <input
          type="number"
          className="col-span-1 row-span-1 border rounded-md py-2 px-4 text-base"
          placeholder="Mahsulot miqdori"
        />
        <select
          name=""
          id=""
          className="col-span-1 row-span-1 border rounded-md py-2 px-4 text-base"
        >
          <option value="" disabled selected hidden>
            Bo'limni tanlang
          </option>
        </select>
        <div className="col-span-2 flex justify-end">
          <button className="rounded-md bg-primary text-white text-lg px-4 py-2">
            Saqlash
          </button>
        </div>
      </form>
    </div>
  );
}
