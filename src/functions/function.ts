import axios from "axios";

export const getBlog = async (setState) => {
  const req = await axios.get("http://localhost:8888/");
  const res = req.data;

};
