import { Metadata } from "next";
import Payment from "./payment";

export const metadata: Metadata = {
  title: "Payment | Step Three",
};

export default function StepThree() {
  return <Payment />;
}
