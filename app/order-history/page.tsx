import { auth, redirectToSignIn } from "@clerk/nextjs";

export default function OrderHistoryPage() {
  const { userId } = auth();
  if (!userId) return redirectToSignIn();
  return <div className="p-8">Your order history goes here!</div>;
}
