import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;
  
  // Revalidate the overlay path
  revalidatePath(`/overlay/${username}`);
  
  // Redirect to the overlay
  redirect(`/overlay/${username}`);
}
