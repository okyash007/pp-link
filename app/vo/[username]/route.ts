import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;
  
  // Extract search params from the request URL
  const url = new URL(request.url);
  const searchParams = url.searchParams.toString();
  
  // Revalidate the overlay path
  revalidatePath(`/overlay/${username}`);
  
  // Redirect to the overlay with search params preserved
  const redirectUrl = searchParams 
    ? `/overlay/${username}?${searchParams}`
    : `/overlay/${username}`;
  
  redirect(redirectUrl);
}
