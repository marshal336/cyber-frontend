"use client";
import styles from "./CartSum.module.scss";
import { Button, Input } from "../ui";
import { PAGES_DASHBOARD, tdId } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { axiosAuth } from "@/services/api/instance";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface ICartSum {
  total?: number;
}

export default function CartSum({ total }: ICartSum) {
  const router = useRouter();

  const { mutate, data: transactionId } = useMutation({
    mutationKey: ["create-transaction"],
    mutationFn: async () => {
      try {
        const { data } = await axiosAuth.post<string>("/payment/transaction/create");
        return data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (transactionId) => {
      if (transactionId) {
        Cookies.set(tdId, transactionId);
        router.push(`${PAGES_DASHBOARD.PAYMENT}/${PAGES_DASHBOARD.STEP_ONE}`);
      }
    },
  });

  function transaction() {
    mutate();
  }

  return (
    <div className={styles.cartSum}>
      <div className={styles.cartTitle}>
        <h2>Order Summary</h2>
      </div>
      <div className={styles.cartInput}>
        {/** Discount code/Promo Code are user model   */}
        <label>Discount code/Promo Code</label>
        <Input type="text" placeholder="Code" />
      </div>

      <div className={styles.cartSummary}>
        <div>
          <h3>Subtotal</h3>
          <p>${total}</p>
        </div>
        <div className={styles.cartTax}>
          {/** Discount are user model   */}
          <h3>Discount</h3>
          <p>$50</p>
        </div>

        <div>
          <h3>Total</h3>
          <p>${total}</p>
        </div>
      </div>
      <div className={styles.cartLink}>
        <Button onClick={transaction} variant={"default"}>
          Payment
        </Button>
      </div>
    </div>
  );
}
