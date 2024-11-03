import Link from "next/link";
import styles from "./CartSum.module.scss";

export default function CartSum() {
  return (
    <div className={styles.cartSum}>
      <div className={styles.cartTitle}>
        <h2>Order Summary</h2>
      </div>
      <div className={styles.cartInput}>
        <label>Discount code/Promo Code</label>
        <input type="text" placeholder="Code" />
      </div>

      <div className={styles.cartInput}>
        <label>Your bonus card number</label>
        <div className={styles.cartInputContainer}>
          <input type="text" placeholder="Enter Card Number" />
          <button>Apply</button>
        </div>
      </div>

      <div className={styles.cartSummary}>
        <div>
          <h3>Subtotal</h3>
          <p>$1399</p>
        </div>
        <div className={styles.cartTax}>
          <h3>Estimated Tax</h3>
          <p>$50</p>
        </div>

        <div className={styles.cartTax}>
          <h3>Estimated shipping & Handling</h3>
          <p>$29</p>
        </div>

        <div>
          <h3>Total</h3>
          <p>$1478</p>
        </div>
      </div>
      <div className={styles.cartLink}>
        <Link href="/">Checkout</Link>
      </div>
    </div>
  );
}
