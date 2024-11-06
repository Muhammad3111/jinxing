export default function AddCustomer() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <form className="grid grid-cols-3 gap-2">
        <input
          type="text"
          className="col-span-1 border rounded-md py-2 px-4 text-base"
          placeholder="Mijoz ismi"
        />
        <input
          type="text"
          className="col-span-1 border rounded-md py-2 px-4 text-base"
          placeholder="Telefon raqami"
        />
        <input
          type="text"
          className="col-span-1 border rounded-md py-2 px-4 text-base"
          placeholder="Parol"
        />
        <div className="col-span-3 flex justify-end">
          <button className="rounded-md bg-primary text-white text-lg px-4 py-2">
            Saqlash
          </button>
        </div>
      </form>
    </div>
  );
}
