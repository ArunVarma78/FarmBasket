import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-5 mb-5">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/header-logo/web-logo.png"
          alt="Farm Basket Logo"
          className="cursor-pointer"
          width={100}
          height={100}
        />
      </Link>

      <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full outline-none" />
        <Search className="text-gray-500" />
      </div>

      <div className="flex gap-5 items-center">
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="outline" className="cursor-pointer">
              Login
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button className="cursor-pointer bg-green-600 hover:bg-green-700">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <div className="flex gap-2 items-center">
            <ShoppingCart />
            <label className="p-1 px-2 rounded-full bg-slate-200">12</label>
          </div>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
