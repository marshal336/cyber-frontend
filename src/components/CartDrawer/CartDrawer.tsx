"use client";
import { PropsWithChildren, useEffect } from "react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui";
import Link from "next/link";
import { PAGES_DASHBOARD } from "@/utils";
import CartDrawerItem from "./CartDrawerItem";
import { useCartStore } from "@/services/store/cart";
import NoItems from "./no-items";
import { useRouter } from "next/navigation";

interface ICartDrawerProps {
  className?: string;
}

export default function CartDrawer({
  className,
  children,
}: PropsWithChildren<ICartDrawerProps>) {
  const { cart } = useCartStore((state) => state);
  const { getCart, plusOrMinus, remove } = useCartStore((state) => state);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between flex-1 h-full ">
          {cart && cart.cartItems.length > 0 && (
            <SheetHeader>
              <SheetTitle>In basket {cart?.cartItems.length} items</SheetTitle>
            </SheetHeader>
          )}

          <div className="overflow-auto h-full">
            {(!cart || cart.cartItems.length === 0) && <NoItems />}
            <div className="flex flex-col">
              {cart?.cartItems.map((item) => (
                <CartDrawerItem
                className=""
                  key={item.id}
                  img={item.productItemInfo.product.defaultImage}
                  name={item.productItemInfo.product.title}
                  price={item.productItemInfo.price}
                  quantity={item.quantity}
                  memoryPrice={item.productItemInfo.memory[0].price}
                  memory={item.productItemInfo.memory[0].title}
                  setType={(type) => plusOrMinus({ type, cartItemId: item.id })}
                  onDelete={() => remove(item.id)}
                />
              ))}
            </div>
          </div>

          <SheetFooter className="w-full ">
            <div className="flex flex-col gap-4 w-full py-4">
              <span>Total: {cart?.total}$</span>
              <Link href={`${PAGES_DASHBOARD.CART}`}>
                <Button className="w-full">Cart</Button>
              </Link>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
