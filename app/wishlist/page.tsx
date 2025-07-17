import { auth, redirectToSignIn } from "@clerk/nextjs";

export default function WishlistPage() {
  const { userId } = auth();
  if (!userId) return redirectToSignIn();
  return <div className="p-8">Your wishlist goes here!</div>;
}
