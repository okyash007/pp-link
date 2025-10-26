import axios from "axios";

export const getLeaderboard = async (creatorId: string, limit?: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/tip/${creatorId}/leaderboard`;
    const res = await axios.get(url);
    if (res.status !== 200) {
      return null;
    }
    return res.data.data;
  } catch (error) {
    return null;
  }
};

