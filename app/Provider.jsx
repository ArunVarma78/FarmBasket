"use client";

import { Toaster } from "sonner";
import Header from "./_components/Header";
import { CartUpdateContext } from "./_context/CartUpdateContext";
import { useState } from "react";

export default function Provider({ children }) {
  const [updateCart, setUpdateCart] = useState(false);
  return (
    <CartUpdateContext.Provider value={{ updateCart, setUpdateCart }}>
      <div className="px-10 md:px-20 relative">
        <Header />
        <Toaster />
        {children}
      </div>
    </CartUpdateContext.Provider>
  );
}
