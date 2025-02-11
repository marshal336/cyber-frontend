"use client";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import Three from "@/components/Payment/Step-three";

interface IPaymentProps {
  className?: string;
}

export default function Payment({ }: IPaymentProps) {
  // const stripePromies = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
  return (
    // <Elements stripe={stripePromies}>
    <Three />
    // </Elements>
  );
}
