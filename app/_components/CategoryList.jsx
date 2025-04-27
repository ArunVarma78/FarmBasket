"use client";

import { useEffect, useRef, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CategoryList() {
  const listRef = useRef(null);
  const [categoryList, setCategoryList] = useState([]);

  const params = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setSelectedCategory(params.get("category") || "all");
  }, [params]);

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

  const scrollLeftHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
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
    <div className="relative mb-5">
      <div
        className="flex lg:justify-center gap-4 overflow-auto scrollbar-hide"
        style={{
          overflow: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        ref={listRef}
      >
        {categoryList &&
          categoryList.map((category, index) => (
            <Link
              href={`?category=` + category.slug}
              key={index}
              className={`flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28 
              hover:border-green-600 hover:bg-orange-100 cursor-pointer group
              ${
                selectedCategory == category.slug &&
                "text-green-600 border-green-600 bg-orange-50"
              }
              `}
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
            </Link>
          ))}
      </div>

      <ArrowLeftCircle
        className="lg:hidden absolute -left-10 top-9 bg-green-600 rounded-full text-white h-8 w-8 cursor-pointer"
        onClick={() => scrollLeftHandler()}
      />

      <ArrowRightCircle
        className="lg:hidden absolute -right-10 top-9 bg-green-600 rounded-full text-white h-8 w-8 cursor-pointer"
        onClick={() => scrollRightHandler()}
      />
    </div>
  );
}
