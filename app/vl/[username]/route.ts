import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;
  
  // Revalidate the overlay path
  revalidatePath(`/link/${username}`);
  
  // Redirect to the overlay
  redirect(`/link/${username}`);
}
