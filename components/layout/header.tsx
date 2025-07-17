"use client";

import Link from "next/link";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import {
  ShoppingCart,
  Home,
  User,
  Heart,
  History,
  PlusCircle,
  LogIn,
  LogOut,
  List,
  CreditCard,
} from "lucide-react";

export default function Header() {
  const { user, isSignedIn } = useUser();
  const adminEmails = [
    "billupaji51@gmail.com",
    "bharathipriyadarshinibarikbts@gmail.com",
  ];
  const isAdmin =
    isSignedIn &&
    adminEmails.includes(user?.primaryEmailAddress?.emailAddress || "");

  return (
    <header className="backdrop-blur-md bg-white/70 border-b border-emerald-100 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-extrabold text-emerald-600 tracking-tight hover:scale-105 transition-transform"
          >
            <ShoppingCart className="h-7 w-7" />
            Shoply
          </Link>
          <NavLink
            href="/products"
            label="Products"
            icon={<List className="h-5 w-5" />}
          />
          {isSignedIn && (
            <NavLink
              href="/cart"
              label="Cart"
              icon={<ShoppingCart className="h-5 w-5" />}
            />
          )}
          {isSignedIn && (
            <NavLink
              href="/checkout"
              label="Checkout"
              icon={<CreditCard className="h-5 w-5" />}
            />
          )}
          {isSignedIn && (
            <NavLink
              href="/wishlist"
              label="Wishlist"
              icon={<Heart className="h-5 w-5" />}
            />
          )}
          {isSignedIn && (
            <NavLink
              href="/order-history"
              label="Orders"
              icon={<History className="h-5 w-5" />}
            />
          )}
          <NavLink
            href="/profile"
            label="Profile"
            icon={<User className="h-5 w-5" />}
          />
          {isAdmin && (
            <a
              href="#add-product"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition-colors"
            >
              <PlusCircle className="h-5 w-5" /> Add Product
            </a>
          )}
        </div>
        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="flex gap-2">
              <SignInButton>
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors shadow">
                  <LogIn className="h-4 w-4" /> Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-emerald-500 text-emerald-600 font-semibold hover:bg-emerald-50 transition-colors shadow">
                  <User className="h-4 w-4" /> Sign Up
                </button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-100 transition-colors duration-150"
    >
      {icon} <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}
