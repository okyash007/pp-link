import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;
  
  // Revalidate the user path
  revalidatePath(`/${username}`);
  
  // Redirect to the user page
  redirect(`/${username}`);
}
