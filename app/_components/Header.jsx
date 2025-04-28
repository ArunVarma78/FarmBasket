"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { useContext, useEffect } from "react";
import { CartContext } from "../_context/CartContext";
import GlobalApi from "../_utils/GlobalApi";
import Cart from "./Cart";

export default function Header() {
  const { user } = useUser();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    if (user) {
      GetUserCart();
    }
  }, [user]);

  const GetUserCart = () => {
    GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then(
      (resp) => {
        setCart(resp?.userCarts || []);
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
        <input
          type="text"
          className="bg-transparent w-full outline-none"
          placeholder="Search for products..."
        />
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
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex gap-2 items-center cursor-pointer">
                <ShoppingCart />
                <label className="p-1 px-3 rounded-full bg-slate-200">
                  {cart?.length || 0}
                </label>
              </div>
            </PopoverTrigger>

            <PopoverContent className="w-80 max-h-[450px] overflow-y-auto custom-scroll">
              <Cart cart={cart} />
            </PopoverContent>
          </Popover>

          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
