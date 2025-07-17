import { auth, redirectToSignIn, UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  const { userId } = auth();
  if (!userId) return redirectToSignIn();
  return <UserProfile />;
}
