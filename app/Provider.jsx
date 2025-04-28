"use client";

import { Toaster } from "sonner";
import Header from "./_components/Header";
import { CartContext } from "./_context/CartContext";
import { useState } from "react";

export default function Provider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="px-10 md:px-20 relative">
        <Header />
        <Toaster />
        {children}
      </div>
    </CartContext.Provider>
  );
}
