import axios from "axios";

export const getTips = async (creatorId: string, createdAt?: string) => {
  try {
    const url = createdAt
      ? `${process.env.NEXT_PUBLIC_API_URL}/tip/${creatorId}?created_at=${createdAt}`
      : `${process.env.NEXT_PUBLIC_API_URL}/tip/${creatorId}`;
    const res = await axios.get(url);
    if (res.status !== 200) {
      return null;
    }
    return res.data.data;
  } catch (error) {
    return null;
  }
};
