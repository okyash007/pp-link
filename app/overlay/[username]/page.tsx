import Client from "./Client";

const getCreator = async (username: string) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/creator/${username}/overlay`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching creator:", error);
    return null;
  }
};

const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;

  const creator = await getCreator(username);
  if (!creator) {
    return <div>Creator not found</div>;
  }
  return <Client creator={creator} blocks={creator.overlay.blocks} username={username} />;
};

export default page;

export const dynamic = "force-dynamic";
