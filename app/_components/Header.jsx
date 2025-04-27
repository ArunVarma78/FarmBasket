"use client";

import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedOut,
  SignedIn,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartUpdateContext } from "../_context/CartUpdateContext";
import GlobalApi from "../_utils/GlobalApi";

export default function Header() {
  const { user } = useUser();
  const { updateCart, setUpdateCart } = useContext(CartUpdateContext);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    user && GetUserCart();
  }, [updateCart, user]);

  const GetUserCart = () => {
    GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then(
      (resp) => {
        setCart(resp?.userCarts);
      }
    );
  };

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
            <label className="p-1 px-3 rounded-full bg-slate-200">
              {cart?.length}
            </label>
          </div>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
