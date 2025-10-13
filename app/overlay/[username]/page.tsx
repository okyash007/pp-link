import axios from "axios";
import Client from "./Client";

const getCreator = async (username: string) => {
  try {
    const creator = await axios.get(
      `${process.env.API_URL}/creator/${username}`
    );
    return creator.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;

  const creator = await getCreator(username);
  if (!creator) {
    return <div>Creator not found</div>;
  }
  return <Client creatorId={creator.creator_id} />;
};

export default page;

export const dynamic = "force-static";
