export const getUserByFp = async (fp: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${fp}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Don't cache user data
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
