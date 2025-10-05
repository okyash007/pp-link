import Client from "./Client";

const page = async ({ params }: { params: { username: string } }) => {
  const { username } = await params;

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
      <Client username={username} />;
    </div>
  );
};

export default page;

export const dynamic = "force-static";
