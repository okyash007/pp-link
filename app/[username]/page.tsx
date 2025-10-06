import Client from "./Client";
import CreatorCard from "./CreatorCard";

const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <CreatorCard />
      <div className="my-4">

      <Client username={username} />
      </div>
    </div>
  );
};

export default page;

export const dynamic = "force-static";
