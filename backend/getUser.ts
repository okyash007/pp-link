import axios from "axios";

export const getUserByFp = async (fp: string) => {
  try {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${fp}`);
  if (res.status !== 200) {
      return null;
    }
    return res.data.data;
  } catch (error) {
    return null;
  }
};
