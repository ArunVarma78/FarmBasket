import React, { Suspense } from "react";
import CategoryList from "./_components/CategoryList";
import InventoryList from "./_components/InventoryList";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading categories...</div>}>
        <CategoryList />
      </Suspense>
      <Suspense fallback={<div>Loading inventory...</div>}>
        <InventoryList />
      </Suspense>
    </div>
  );
}
