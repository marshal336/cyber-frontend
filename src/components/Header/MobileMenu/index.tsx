"use client";
import Link from "next/link";
import styles from "./MobileMenu.module.scss";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui";
import { headerLinks } from "@/utils/data";
import CartDrawer from "@/components/CartDrawer/CartDrawer";
import { PAGES_DASHBOARD } from "@/utils";
import { useInputSearchStore } from "@/services/store/product/input-search";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { useCartStore } from "@/services/store/cart";

interface IMobileMenu {
  isValidProfileIcon?: boolean;
  isValidCartIcon?: boolean;
}

export default function MobileMenu({
  children,
  isValidCartIcon = true,
  isValidProfileIcon = true,
}: React.PropsWithChildren<IMobileMenu>) {
  const { cart } = useCartStore((state) => state);
  const { items } = useInputSearchStore((state) => state);

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="">
        <SheetHeader className={styles.header}>
          Menu
        </SheetHeader>
        <div className={styles.links}>
          {headerLinks.map(({ link, logo, title }) => (
            <Link href={link} className="flex gap-3  items-center">
              <div className="text-4xl">{logo}</div>
              <h3 className="text-2xl">{title}</h3>
            </Link>
          ))}
        </div>
        <div className="h-[2px] w-full bg-black/50 my-4" />
        <div className="mt-5 flex flex-col gap-2">
          <Link href={"/"} className="flex gap-2 items-center">
            <CiHeart className="text-4xl"/>
            <p className="text-2xl">Favorite</p>
          </Link>

          {isValidCartIcon && (
            <CartDrawer>
              <div className="relative flex gap-2 items-center">
                <CiShoppingCart className="text-4xl" />
                <p className="text-2xl">Cart</p>
                {cart && cart?.cartItems.length > 0 && (
                  <p className="absolute top-0 right-0 bg-red-400 rounded-full text-white px-[6px] py-[1px] text-xs ">
                    {cart?.cartItems.length}
                  </p>
                )}
              </div>
            </CartDrawer>
          )}

          {isValidProfileIcon && (
            <Link href={`/${PAGES_DASHBOARD.PROFILE}`} className="flex items-center gap-2">
              <CiUser className="text-4xl"/>
              <p className="text-2xl">Profile</p>
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
