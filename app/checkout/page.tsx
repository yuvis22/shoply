import { auth, redirectToSignIn } from "@clerk/nextjs";

export default function CheckoutPage() {
  const { userId } = auth();
  if (!userId) return redirectToSignIn();
  return <div className="p-8">Checkout flow goes here!</div>;
}
