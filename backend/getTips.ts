export const getTips = async (creatorId: string, createdAt?: string) => {
  try {
    const url = createdAt
      ? `${process.env.NEXT_PUBLIC_API_URL}/tip/${creatorId}?created_at=${createdAt}`
      : `${process.env.NEXT_PUBLIC_API_URL}/tip/${creatorId}`;
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
