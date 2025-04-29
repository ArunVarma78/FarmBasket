"use client";

import { CartContext } from "@/app/_context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext } from "react";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);

  const subTotal = () => {
    let total = 0;
    console.log(cart);
    cart.forEach((product) => {
      total = total + product.price;
    });
    return total;
  };

  const subTotalAmount = subTotal();
  const deliveryAmount = 40;
  //   const totalTaxAmount = subTotalAmount * 0.09;
  const totalAmount = subTotalAmount + deliveryAmount;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="font-bold text-2xl my-5">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Billing Details */}
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-xl font-bold">Billing Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone" />
            <Input placeholder="Zip" />
          </div>
          <Input placeholder="Address" className="w-full" />
        </div>

        {/* Total Cart */}
        <div className="bg-gray-100 rounded-md p-6">
          <h3 className="font-bold mb-4 border-b pb-2">
            Total Cart ({cart?.length})
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal :</span>
              <span>&#8377; {subTotalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery :</span>
              <span>&#8377; {deliveryAmount}</span>
            </div>
            {/* <div className="flex justify-between">
              <span>Tax (9%) :</span>
              <span>&#8377; {totalTaxAmount.toFixed(2)}</span>
            </div> */}
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total :</span>
              <span>&#8377; {totalAmount.toFixed(2)}</span>
            </div>
          </div>
          <Button className="cursor-pointer bg-green-600 hover:bg-green-700 w-full mt-4">
            Make Payment
          </Button>
        </div>
      </div>
    </div>
  );
}
