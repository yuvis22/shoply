import { auth, redirectToSignIn } from "@clerk/nextjs";

export default function CartPage() {
  const { userId } = auth();
  if (!userId) return redirectToSignIn();
  return <div className="p-8">Your cart goes here!</div>;
}
