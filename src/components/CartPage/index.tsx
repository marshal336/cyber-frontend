"use client";
import styles from "./Cart.module.scss";
import CartDrawerItem from "@/components/CartDrawer/CartDrawerItem";
import CartSum from "@/components/CartSum";
import { useCartStore } from "@/services/store/cart";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Container from "../Container/Container";

export default function CartPage() {
  const { push } = useRouter();
  const { cart } = useCartStore((state) => state);
  const { plusOrMinus, remove, getCart } = useCartStore((state) => state);

  useEffect(() => {
    getCart();

    if (cart?.cartItems.length === 0) {
      push("/");
    }
  }, [cart?.cartItems.length]);

  return (
    <div className={styles.cart}>
      <Container className="flex flex-col px-5">
        <div className={styles.cartTitle}>
          <h2>Shopping Cart</h2>
        </div>
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            <div className="flex flex-col gap-1">
              {cart?.cartItems.map((item) => (
                <CartDrawerItem
                  className="w-[300px]"
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
          <CartSum total={cart?.total} />
        </div>
      </Container>
    </div>
  );
}
