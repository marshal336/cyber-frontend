"use client";
import Container from "@/components/Container/Container";
import { Button } from "@/components/ui";
import { PAGES_DASHBOARD, tdId } from "@/utils";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Step-twop.module.scss";
import MethodItem from "./MethodItem";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosAuth, axiosClassic } from "@/services/api/instance";
import { ITransaction } from "@/types/transaction.types";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface IStepTwoProps {
  className?: string;
}
export interface IShipmentMethod {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export default function StepTwo({ }: IStepTwoProps) {
  const [activeId, setActiveId] = useState(1);
  const router = useRouter();

  // useQuery({
  //   queryKey: ["getTransaction"],
  //   queryFn: async () => {
  //     try {
  //       const transactionId = Cookies.get(tdId);
  //       const { data } = await axiosAuth.post<ITransaction>(
  //         "payment/transaction/info",
  //         { transactionId }
  //       );
  //       setActiveId(data.shipmentMethodId ?? 1);
  //       return data;
  //     } catch (error) {}
  //   },
  // });

  // const { data } = useQuery({
  //   queryKey: ["shipMent"],
  //   queryFn: async () => {
  //     try {
  //       const { data } = await axiosClassic.get<IShipmentMethod[]>(
  //         "/payment/shipping"
  //       );
  //       return data;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
  // });

  // const { mutate } = useMutation({
  //   mutationKey: ["setId"],
  //   mutationFn: async (
  //     data: Pick<ITransaction, "shipmentMethodId" | "status" | "transactionId">
  //   ) => {
  //     try {
  //       await axiosAuth.put("/payment/transaction/update", data);
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
  // });

  // function transaction() {
  //   const transactionId = Cookies.get(tdId);
  //   if (!transactionId) router.push("/");
  //   if (transactionId) {
  //     mutate({ shipmentMethodId: activeId, status: "PENDING", transactionId });
  //   }
  //   router.push(`${PAGES_DASHBOARD.PAYMENT}${PAGES_DASHBOARD.STEP_THREE}`);
  // }

  return (
    <div className="">
      <Container className="px-4">
        <div className={styles.snipnet}>
          <h2>Shipment Method</h2>
          <div className={styles.methods}>
            {[...new Array(3)].map((_, i) => (
              <MethodItem
                className={activeId !== i ? "opacity-50" : ""}
                onCheckedChange={() => setActiveId(i)}
                checked={activeId === i}
                dateDelivery={'Date Delivery'}
                name={'name delivery'}
                value={(1 + i).toString()}
              />
            ))}
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            onClick={() => {
              router.push(
                `${PAGES_DASHBOARD.PAYMENT}${PAGES_DASHBOARD.STEP_ONE}`
              );
            }}
            variant={"outline"}
            size={"lg"}
          >
            Back
          </Button>
          <Button
            onClick={() => {
              router.push(`${PAGES_DASHBOARD.PAYMENT}${PAGES_DASHBOARD.STEP_THREE}`);
            }}
            variant={"default"} size={"lg"}>
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
}
