import axios from "axios";

export const getCurrency = async () => {
  const response = await axios.get(
    "https://v6.exchangerate-api.com/v6/b246ff58644d810fd08686b3/latest/USD"
  );
  return response.data;
};
