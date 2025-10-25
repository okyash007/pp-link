import axios from "axios";
import Blocks from "./Blocks";

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

  return (
    <div className="max-w-2xl mx-auto">
      <Blocks blocks={creator.tipPage.blocks} data={creator} />
    </div>
  );
};

export default page;

export const dynamic = "force-static";
