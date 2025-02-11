"use client";
import Container from "@/components/Container/Container";
import styles from "./Step-three.module.scss";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "@/components/ui";
import { PAGES_DASHBOARD } from "@/utils";
import { Tabs } from "@radix-ui/react-tabs";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { axiosAuth } from "@/services/api/instance";
import { FormEvent } from "react";
import { ICart, IUser } from "@/types";
import { useRouter } from "next/navigation";

const cardVariant = ["Credit Card", "PayPal", "PayPal Credit"];

interface IStepThreeProps {
  className?: string;
}

export default function StepThree({ }: IStepThreeProps) {
  const router = useRouter();
  const discount = 100;
  const { data: cartUser } = useQuery({
    queryKey: ["getCart"],
    queryFn: async () => {
      try {
        const { data } = await axiosAuth.get<ICart>(
          "/cart");
        return data;
      } catch (error) { }
    },
  });
  const { data: user } = useQuery({
    queryKey: ["getCart"],
    queryFn: async () => {
      try {
        const { data } = await axiosAuth.get<IUser>(
          "/profile");
        return data;
      } catch (error) { }
    },
  });


  // const { mutate } = useMutation({
  //   mutationKey: ["finish"],
  //   mutationFn: async () => {
  //     try {
  //       const card = elements?.getElement(CardElement);
  //       const { data: clientSecret } = await axiosAuth.post<string>(
  //         "/payment/transaction/finish",
  //         {
  //           transactionId,
  //         }
  //       );
  //       const paymentResult = await stripe?.confirmCardPayment(clientSecret, {
  //         payment_method: {
  //           card: card!,
  //           billing_details: {
  //             address: {
  //               city: data?.city,
  //             },
  //             email: data?.user.email,
  //             name: data?.user.fullName,
  //             phone: data?.phoneNumber,
  //           },
  //         },
  //       });
  //       if (paymentResult?.paymentIntent?.status === "succeeded") {
  //         Cookies.remove(tdId);
  //         router.push("/");
  //         toast.success("Оплата успешна!", {
  //           className: "bg-green-500 text-white border-none",
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // });
  function paymentSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // mutate();
  }
  // if (!data) return;
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
                {cartUser?.cartItems.map((item) => (
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
                    {user?.country} {user?.city}
                  </h3>
                </div>
                <div className={styles.info}>
                  <h4>Shipment method</h4>
                  <h3>
                    shipmentMethod
                    -------------
                  </h3>
                </div>
              </div>
              <div>
                <div className={styles.totalSection}>
                  <div className={styles.item}>
                    <p>Subtotal</p>
                    <p>${cartUser?.total}</p>
                  </div>
                  <div className={styles.itemOpa}>
                    <p>Discount</p>
                    <p>{discount}</p>
                  </div>
                  <div className={styles.total}>
                    <p>Total</p>
                    <p>${cartUser?.total && cartUser.total + discount}</p>
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
                    {/* <Input placeholder="Cardholder Name" />
                    <Input placeholder="Card Number" />
                    <Input placeholder="Exp.Date" />
                    <Input placeholder="CVV" /> */}
                  </div>
                  <div className="flex gap-3 items-center font-semibold pb-12">
                    Same as billing address
                  </div>
                  <div className={styles.buttons}>
                    <Link href={`${PAGES_DASHBOARD.PAYMENT}/${PAGES_DASHBOARD.STEP_TWO}`}>
                      <Button type="button" variant={"outline"} size={"lg"}>
                        Back
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        router.push('/')
                      }}
                      className="w-[100px]"
                      variant={"default"}
                    >
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
