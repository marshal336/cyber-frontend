import { CartList, Category, Hero, Sale, Tehnology } from "@/components";
import Banner from "@/components/Banner";
import React from "react";

export default function Home() {


  return (
    <>
      <Hero />
      <Tehnology />
      <Category />
      <CartList isValidTab />
      <Banner />
      {/* <CartList isValidDiscount /> */}
      <Sale />
    </>
  );
}
