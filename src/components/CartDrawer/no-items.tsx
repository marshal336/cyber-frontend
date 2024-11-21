"use client";
import React from "react";

interface INoItemsProps {
  className?: string;
}

export default function NoItems({}: INoItemsProps) {
  return (
    <div className="flex flex-col gap-10 items-center h-[300px] mt-10">
      <h1 className="text-xl font-semibold">No items :(</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3S8Kw9JCfStAkd0m-jhjIYvG3T9x0AOQiGw&s" alt="" />
    </div>
  );
}
