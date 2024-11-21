"use client";
import Container from "@/components/Container/Container";
import styles from "./Step-three.module.scss";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Input,
} from "@/components/ui";
import { PAGES_DASHBOARD, tdId } from "@/utils";
import { Tabs } from "@radix-ui/react-tabs";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { axiosAuth } from "@/services/api/instance";
import { ITransaction } from "@/types/transaction.types";
import Cookies from "js-cookie";

const cardVariant = ["Credit Card", "PayPal", "PayPal Credit"];

interface IStepThreeProps {
  className?: string;
}

export default function StepThree({}: IStepThreeProps) {
  const discount = 100
  const { data } = useQuery({
    queryKey: ["getTransaction"],
    queryFn: async () => {
      try {
        const transactionId = Cookies.get(tdId);
        const { data } = await axiosAuth.post<ITransaction>(
          "payment/transaction/info",
          { transactionId }
        );
        return data;
      } catch (error) {}
    },
  });
  if (!data) return;
  return (
    <div className="">
      <Container className="px-4">
        <div className={styles.main}>
          <Card className="w-full flex flex-col gap-6">
            <CardHeader>
              <CardTitle className="text-2xl">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={styles.buyElems}>
                {data.user.cart.cartItems.map((item) => (
                  <div className={styles.buyElem}>
                    <div className="flex gap-4 items-center">
                      <img
                        src={item.productItemInfo.product.defaultImage}
                        alt="iproduct"
                        width={40}
                        height={40}
                      />
                      <h3>{item.productItemInfo.product.title}</h3>
                    </div>
                    <p>${item.productItemInfo.price}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 my-6">
                <div className={styles.info}>
                  <h4>Address</h4>
                  <h3>
                    {data.country} {data.city} {data.street}
                  </h3>
                </div>
                <div className={styles.info}>
                  <h4>Shipment method</h4>
                  <h3>{data.shipmentMethod?.title}  {data.shipmentMethod?.description}</h3>
                </div>
              </div>
              <div>
                <div className={styles.totalSection}>
                  <div className={styles.item}>
                    <p>Subtotal</p>
                    <p>${data.user.cart.total}</p>
                  </div>
                  <div className={styles.itemOpa}>
                    <p>Discount</p>
                    <p>{discount}</p>
                  </div>
                  <div className={styles.total}>
                    <p>Total</p>
                    <p>${data.user.cart.total + discount}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={cardVariant[0]}>
                <h3 className="text-xl font-semibold">Credit Card</h3>
                <div className={styles.TabsContent}>
                  <img
                    className="rounded-2xl"
                    src={"/card.png"}
                    alt="card"
                    width={337}
                    height={188}
                  />
                  <div className={styles.inputs}>
                    <Input placeholder="Cardholder Name" />
                    <Input placeholder="Card Number" />
                    <Input placeholder="Exp.Date" />
                    <Input placeholder="CVV" />
                  </div>
                  <div className="flex gap-3 items-center font-semibold pb-12">
                    Same as billing address
                  </div>
                  <div className={styles.buttons}>
                    <Link href={`${PAGES_DASHBOARD.PAYMENT}/step-two`}>
                      <Button variant={"outline"} size={"lg"}>
                        Back
                      </Button>
                    </Link>
                    <Button className="w-[100px]" variant={"default"}>
                      Pay
                    </Button>
                  </div>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
