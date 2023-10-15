import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/deals";

export const fetchDeals = async () => {
  const response = await axios.get();
  console.log(response.data.data);
  return response.data.data;
};
