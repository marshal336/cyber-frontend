import { CartList, Category, Hero, Sale, Tehnology } from "@/components";
import React from "react";

export default function Home() {


  return (
    <>
      <Hero />
      <Tehnology />
      <Category />
      <CartList isValidTab />
      <Sale />
    </>
  );
}
