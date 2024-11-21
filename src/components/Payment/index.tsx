import React, { PropsWithChildren } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

interface IPaymentProps {
  className?: string;
}

export default function Payment({
  children,
}: PropsWithChildren<IPaymentProps>) {
  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
//   console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  
  return <Elements stripe={stripe}>{children}</Elements>;
}
