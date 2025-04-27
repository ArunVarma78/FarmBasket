import Image from "next/image";
import React from "react";

export default function InventoryItems({ inventory }) {
  return (
    <div
      className="p-3 border-2
    hover:border rounded-xl
    hover:border-green-600 cursor-pointer
    hover:bg-orange-50"
    >
      <Image
        src={inventory.banner?.url}
        alt={inventory.name}
        width={500}
        height={150}
        className="h-[150px] rounded-xl object-contain"
      />

      <div className="mt-2">
        <h2 className="font-medium text-lg">{inventory.name}</h2>
      </div>
    </div>
  );
}
