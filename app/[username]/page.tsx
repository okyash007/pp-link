import axios from "axios";
import Client from "./Client";
import CreatorCard from "./CreatorCard";

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

  const creatorData = await getCreator(username);
  if (!creatorData) {
    return <div>Creator not found</div>;
  }

  const { config, ...creator } = creatorData;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <CreatorCard creator={creator} />
      <div className="my-4">
        <Client creatorId={creator.creator_id} />
      </div>
    </div>
  );
};

export default page;

export const dynamic = "force-static";
