import Blocks from "./Blocks";
import { Suspense } from "react";

const getCreator = async (username: string) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/creator/${username}`,
      {
        cache: "no-store", // Force dynamic rendering
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

  return (
    <div className="max-w-2xl mx-auto">
      <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
        <Blocks blocks={creator.tipPage.blocks} data={creator} />
      </Suspense>
    </div>
  );
};

export default page;

export const dynamic = "force-dynamic";
