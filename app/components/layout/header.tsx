import Link from "next/link";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useUser();
  return (
    <header className="bg-white shadow-sm py-4 px-8 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-bold text-emerald-600">
          Shoply
        </Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
        <Link href="/wishlist">Wishlist</Link>
        <Link href="/order-history">Order History</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <div className="flex items-center gap-4">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <>
            <SignInButton />
            <SignUpButton />
          </>
        )}
      </div>
    </header>
  );
}
