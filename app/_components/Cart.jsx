import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

export default function Cart({ cart }) {
  if (!cart || cart.length === 0) {
    return (
      <div className="text-center text-gray-500 p-5">
        🛒 Your cart is empty. Start adding some items!
      </div>
    );
  }

  const CalculateCartAmount = () => {
    let total = 0;
    cart.forEach((product) => {
      total = total + product.price;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <h2 className="font-medium mb-2">Orders</h2>

      {cart.map((product, index) => (
        <div
          key={index}
          className="flex justify-between items-center gap-6 border py-2 px-4 mt-2 rounded"
        >
          <div className="flex gap-2 items-center">
            <Image
              src={product.productImage}
              alt={product.productName}
              width={40}
              height={40}
              className="h-[40px] w-[40px] rounded-lg object-contain"
            />
            <p className="font-medium">{product?.productName}</p>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="font-medium">&#8377; {product?.price}</h2>
            <X className="h-4 w-4 text-red-500 cursor-pointer hover:scale-125" />
          </div>
        </div>
      ))}

      <Button className="cursor-pointer bg-green-600 hover:bg-green-700 w-full mt-4">
        Checkout &#8377; {CalculateCartAmount()}
      </Button>
    </div>
  );
}
