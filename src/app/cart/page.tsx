import CartPage from '@/components/CartPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cart | Cyber Shop",
};

export default function Cart() {
  return <CartPage />
}
