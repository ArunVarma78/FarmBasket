"use client";

import { CartUpdateContext } from "@/app/_context/CartUpdateContext";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export default function Product() {
  const params = usePathname();
  const [product, setProduct] = useState();
  const { user } = useUser();

  const { updateCart, setUpdateCart } = useContext(CartUpdateContext);

  useEffect(() => {
    GetInventoryProduct(params.split("/")[2]);
  }, []);

  const GetInventoryProduct = (inventoryProductSlug) => {
    GlobalApi.GetProduct(inventoryProductSlug).then((resp) => {
      setProduct(resp.inventory);
    });
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-500 text-xl">Loading Product...</p>
      </div>
    );
  }

  const addToCartHandler = (product) => {
    toast("Adding to Cart");
    const data = {
      email: user?.primaryEmailAddress?.emailAddress,
      name: product?.name,
      description: product?.description,
      productImage: product?.banner?.url,
      price: product?.price,
    };

    GlobalApi.AddToCart(data).then((resp) => {
      setUpdateCart(!updateCart);
      toast("Added to Cart");
    }),
      (error) => {
        toast("Error while adding into the cart", error);
      };
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      <div className="w-full md:w-1/2">
        <Image
          src={product.banner.url}
          width={300}
          height={300}
          className="w-full h-auto rounded-xl object-contain"
          alt={product.name}
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-4">{product.description}</p>

        <div className="mt-6 flex items-center gap-4">
          <span className="text-xl font-medium text-gray-800">
            &#8377; {product.price}
          </span>
          <Button
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-200 cursor-pointer"
            onClick={() => addToCartHandler(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
