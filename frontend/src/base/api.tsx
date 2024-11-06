import axios from "axios";

// Axios instance yaratish
const instance = axios.create({
  baseURL: "https://your-api-url.com/api/", // O'zingizning API URL manzilingiz
  timeout: 10000, // 10 soniya vaqt cheklovi
});

// Interceptors
instance.interceptors.request.use(
  (config) => {
    // Tokenni localStorage'dan olish va so'rovga qo'shish
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // So'rov xatosi bo'lsa
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // Javobni qayta ishlash
    return response.data; // Faqatgina ma'lumotni qaytarish
  },
  (error) => {
    // Javob xatosi bo'lsa
    if (error.response) {
      // Server javobi mavjud
      console.error("Error Response:", error.response.data);
    } else {
      // Serverga ulana olmadi
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;
