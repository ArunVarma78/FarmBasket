"use client";
import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";

export default function CategoryList() {
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
  return <div>CategoryList</div>;
}
