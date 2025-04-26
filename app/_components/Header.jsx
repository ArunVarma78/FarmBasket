import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-5 bg-white shadow-md">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Farm Basket Logo"
          className="cursor-pointer"
          width={100}
          height={100}
        />
      </Link>

      <div className="flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full outline-none" />
        <Search className="text-gray-500" />
      </div>

      <div className="flex gap-5">
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="outline" className="cursor-pointer">
              Login
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button className="cursor-pointer">Sign Up</Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
