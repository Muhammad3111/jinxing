import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface SelectedProduct extends Product {
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 200 },
  { id: 3, name: "Product C", price: 300 },
  { id: 4, name: "Product D", price: 400 },
  { id: 5, name: "Product E", price: 500 },
];

export default function AddOrder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredProducts([]);
    }
  };

  const handleAddProduct = (product: Product) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);
      if (existingProduct) {
        // Mavjud mahsulotning sonini oshirish
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        // Yangi mahsulot qo'shish
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setSearchTerm("");
    setFilteredProducts([]);
  };

  const handleQuantityChange = (
    event: React.MouseEvent,
    id: number,
    amount: number
  ) => {
    event.preventDefault();
    setSelectedProducts((prev) =>
      prev
        .map((product) =>
          product.id === id
            ? { ...product, quantity: Math.max(product.quantity + amount, 1) }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const handleRemoveProduct = (id: number) => {
    setSelectedProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const totalPrice = selectedProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="flex flex-col gap-4 p-5">
      <h1>Buyurtma qo'shish</h1>
      <form className="grid grid-cols-3 gap-2">
        <select
          name=""
          id=""
          className="col-span-1 border rounded-md py-2 px-4 text-base"
        >
          <option value="" disabled selected hidden>
            Mijozni tanlang
          </option>
        </select>
        <input
          type="date"
          className="col-span-1 border rounded-md py-2 px-4 text-base"
        />
        <input
          placeholder="Manzil"
          type="text"
          className="col-span-1 border rounded-md py-2 px-4 text-base"
        />

        {/* Qidiruv qismi */}
        <div className="col-span-3 flex flex-col gap-2 relative">
          <input
            type="text"
            placeholder="Mahsulot qidirish..."
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-md py-2 px-4 text-base"
          />
          {/* Qidiruv natijalari */}
          {filteredProducts.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto z-10">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleAddProduct(product)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {product.name} - ${product.price}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tanlangan mahsulotlar */}
        <div className="col-span-3 border rounded-md p-4">
          <h2 className="font-bold mb-2">Tanlangan mahsulotlar</h2>

          {selectedProducts.length === 0 ? (
            <div className="p-4">
              <h1 className="text-lg text-center font-semibold text-gray-400">
                Tanalangan mahsulotlar mavjud emas
              </h1>
            </div>
          ) : (
            selectedProducts.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center mb-2"
              >
                <p>
                  {product.name} - ${product.price} x {product.quantity}
                </p>
                <div className="flex items-center gap-4">
                  <p className="font-bold ml-4">
                    ${product.price * product.quantity}
                  </p>
                  <div className="flex items-center">
                    <button
                      onClick={(event) =>
                        handleQuantityChange(event, product.id, -1)
                      }
                      className="px-3.5 py-1 bg-primary rounded-full hover:bg-primary/50 text-white text-lg"
                    >
                      -
                    </button>
                    <span className="mx-2 text-lg font-bold">
                      {product.quantity}
                    </span>
                    <button
                      onClick={(event) =>
                        handleQuantityChange(event, product.id, 1)
                      }
                      className="px-3 py-1 bg-primary rounded-full hover:bg-primary/50 text-white text-lg"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="ml-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <IoTrashOutline className="text-xl" />
                  </button>
                </div>
              </div>
            ))
          )}
          <div className="border-t-2 flex justify-end">
            <span className="text-lg font-bold">Jami: {totalPrice}</span>
          </div>
        </div>
        <div className="col-span-3 flex justify-end">
          <button className="rounded-md bg-primary text-white text-lg px-4 py-2">
            Saqlash
          </button>
        </div>
      </form>
    </div>
  );
}
