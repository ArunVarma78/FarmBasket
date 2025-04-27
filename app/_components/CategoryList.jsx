"use client";

import { useEffect, useRef, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

export default function CategoryList() {
  const listRef = useRef(null);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  /**
   * Used to get Category List
   */
  const getCategoryList = () => {
    GlobalApi.GetCategory().then((res) => {
      console.log(res.categories);
      setCategoryList(res.categories);
    });
  };

  const scrollRightHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        className="flex justify-center gap-4 overflow-auto scrollbar-hide"
        style={{
          overflow: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        ref={listRef}
      >
        {categoryList &&
          categoryList.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28 
              hover:border-primary hover:bg-orange-100 cursor-pointer group"
            >
              <Image
                src={category.icon?.url}
                alt={category.name}
                width={40}
                height={40}
                className="group-hover:scale-125 transition-all duration-200"
              />
              <h2 className="text-sm font-medium group-hover:text-green-600">
                {category.name}
              </h2>
            </div>
          ))}
      </div>
      <div></div>
      <ArrowRightCircle
        className="md:hidden absolute -right-10 top-9 bg-green-600 rounded-full text-white h-8 w-8 cursor-pointer"
        onClick={() => scrollRightHandler()}
      />
    </div>
  );
}
