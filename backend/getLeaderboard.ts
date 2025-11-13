export const getLeaderboard = async (creatorId: string, limit?: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/tip/${creatorId}/leaderboard`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    const result = await res.json();
    return result.data;
  } catch (error) {
    return null;
  }
};

