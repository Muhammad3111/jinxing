import React, { useState, useRef, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("+998");
  const [show, setShow] = useState<boolean>(false);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Prefiksni saqlab qolamiz va faqat raqamlarni qabul qilamiz
    if (input.startsWith("+998")) {
      const rawNumber = input.replace(/\D/g, "").slice(3); // Faqat raqamlarni olib tashlaymiz va prefiksni saqlaymiz

      // Raqamlarni formatlash: 99 919-31-11
      const formattedNumber = rawNumber
        .replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2-$3-$4")
        .slice(0, 12);

      setPhoneNumber(`+998 ${formattedNumber}`);
    }
  };

  const handleSubmit = () => {
    console.log("Phone Number:", phoneNumber, "Password:", password);
    onClose(); // Modalni yopamiz
  };

  useEffect(() => {
    // Agar modal ochilgan bo'lsa va telefon raqami inputi mavjud bo'lsa, unga fokus o'rnatamiz
    if (isOpen && phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 relative">
        <button onClick={onClose}>
          <IoIosCloseCircleOutline className="text-gray-400 text-4xl absolute right-4 top-4" />
        </button>
        <div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">
              Telefon raqami:
            </label>
            <input
              type="text"
              value={phoneNumber}
              ref={phoneInputRef}
              onChange={handlePhoneChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mt-4 relative">
            <label className="block text-sm font-medium mb-2">
              Parol o'ylab toping:
            </label>
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {show ? (
              <IoEyeOutline
                className="absolute right-2 top-10 text-xl cursor-pointer"
                onClick={() => setShow(!show)}
              />
            ) : (
              <IoEyeOffOutline
                className="absolute right-2 top-10 text-xl cursor-pointer"
                onClick={() => setShow(!show)}
              />
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            disabled={phoneNumber.length < 17} // Agar hamma inputlar to‘ldirilmagan bo‘lsa yoki telefon raqami to‘liq bo'lmasa, tugmani o‘chirib qo‘yamiz
          >
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
