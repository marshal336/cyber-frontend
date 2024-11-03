import styles from './Cart.module.scss'
import { Metadata } from 'next';
import { cartItems } from '@/utils/data';
import CartDrawerItem from '@/components/CartDrawer/CartDrawerItem';
import CartSum from '@/components/CartSum';

export const metadata: Metadata = {
  title: "Cart | Cyber Shop",
};;

export default function CartPage() {
  return (
    <div className={styles.cart}>
      <div className={styles.cartTitle}>
        <h2>Shopping Cart</h2>
      </div>
      <div className={styles.cartContent}>
        <div>
          {cartItems.map((item) =>
            <CartDrawerItem {...item} />
          )}
        </div>
        <CartSum />
      </div>
    </div>
  );
}
