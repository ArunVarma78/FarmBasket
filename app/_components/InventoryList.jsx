"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import InventoryItems from "./InventoryItems";

export default function InventoryList() {
  const params = useSearchParams();
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
    getInventoryList(params.get("category") || "all");
  }, [params]);

  const getInventoryList = (category_) => {
    GlobalApi.GetInventory(category_).then((resp) => {
      setInventoryList(resp?.inventories);
    });
  };

  if (inventoryList.length == 0) {
    return <p>Oops! Nothing here at the moment</p>;
  }

  return (
    <div
      className="mb-10
    grid grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-7 mt-3"
    >
      {inventoryList.map((inventories, index) => (
        <InventoryItems key={index} inventory={inventories} />
      ))}
    </div>
  );
}
