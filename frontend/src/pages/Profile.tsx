const Orders = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <button className="text-lg py-2 rounded-full px-4 bg-gray-300">
          Barcha buyurtmalar
        </button>
        <button className="text-lg py-2 rounded-full px-4 bg-gray-300">
          To'lov qilinmagan
        </button>
        <button className="text-lg py-2 rounded-full px-4 bg-gray-300">
          Faol
        </button>
      </div>
      <div className="bg-gray-300 rounded-md p-4 flex flex-col">
        <div></div>
      </div>
    </div>
  );
};

export default function Profile() {
  return (
    <div className="px-24 py-10 flex flex-col gap-4">
      <h1 className="text-2xl">Muhammad Karimov</h1>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1">
          <button className="text-white text-lg font-semibold py-3 w-full rounded-md bg-primary">
            Buyurtmalarim
          </button>
          <button className="text-black text-lg font-semibold py-3 w-full rounded-md bg-transparent">
            Ma'lumotlarim
          </button>
        </div>
        <div className="col-span-4">
          <Orders />
        </div>
      </div>
    </div>
  );
}
