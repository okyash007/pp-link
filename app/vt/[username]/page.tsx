"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Params = {
  username: string;
};

const page = async ({ params }: { params: Promise<Params> }) => {
  const { username } = await params;
  revalidatePath(`/${username}`);
  redirect(`/${username}`);
};

export default page;
