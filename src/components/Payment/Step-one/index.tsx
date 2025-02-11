"use client";
import Container from "@/components/Container/Container";
import styles from "./Step-one.module.scss";
import SelectCountry from "@/components/InputCountry";
import Cookies from "js-cookie";
import "react-international-phone/style.css";
import { useState } from "react";
import { Button } from "@/components/ui";
import { PAGES_DASHBOARD, tdId } from "@/utils";
import { FaPencilAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { PhoneInput } from "react-international-phone";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosAuth } from "@/services/api/instance";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useRouter } from "next/navigation";
import { ITransaction } from "@/types/transaction.types";

interface IStepOneProps {
  className?: string;
}

export interface IAddress {
  country: string;
  phoneNumber: string;
  street: string;
}

export default function StepOne({ }: IStepOneProps) {
  const router = useRouter();
  const [address, setAddress] = useState<IAddress>({
    country: "",
    street: "",
    phoneNumber: "",
  });

  // useQuery({
  //   queryKey: ["getTransaction"],
  //   queryFn: async () => {
  //     try {
  //       const transactionId = Cookies.get(tdId);
  //       const { data } = await axiosAuth.post<ITransaction>(
  //         "payment/transaction/info",
  //         { transactionId }
  //       );
  //       setAddress({
  //         country: data.country ?? "",
  //         phoneNumber: data.phoneNumber ?? "",
  //         street: data.street ?? "",
  //       });
  //     } catch (error) { }
  //   },
  // });

  function setValueAddress(key: keyof Partial<IAddress>, value: string) {
    setAddress({
      ...address,
      [key]: value,
    });
  }

  const phoneUtil = PhoneNumberUtil.getInstance();
  const isPhoneValid = (phone: string) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };
  const isValidPhone = isPhoneValid(address.phoneNumber ?? "");

  // const { mutate: update } = useMutation({
  //   mutationKey: ["update"],
  //   mutationFn: async (
  //     data: Pick<
  //       ITransaction,
  //       "phoneNumber" | "country" | "status" | "street" | "transactionId"
  //     >
  //   ) => {
  //     try {
  //       await axiosAuth.put("/payment/transaction/update", data);
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
  // });

  // const { mutate: remove } = useMutation({
  //   mutationKey: ["remove"],
  //   mutationFn: async () => {
  //     try {
  //       const transactionId = Cookies.get(tdId);
  //       const { data } = await axiosAuth.delete<boolean>(
  //         "/payment/transaction/remove",
  //         { data: { transactionId } }
  //       );
  //       return data;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
  //   onSuccess: (data) => {
  //     if (data) {
  //       Cookies.remove(tdId);
  //       router.push(`${PAGES_DASHBOARD.CART}`);
  //     }
  //   },
  // });

  function removeTransaction() {
    // remove();
  }

  function submitTransaction() {
    router.push(`${PAGES_DASHBOARD.PAYMENT}${PAGES_DASHBOARD.STEP_TWO}`);
    // const transactionId = Cookies.get(tdId);
    // if (!transactionId) router.push("/");
    // if (isValidPhone && transactionId) {
    //   update({ ...address, status: "PENDING", transactionId });
    //   router.push(`${PAGES_DASHBOARD.PAYMENT}${PAGES_DASHBOARD.STEP_TWO}`);
    // }
  }
  return (
    <div>
      <Container className=" px-4">
        <h2 className="text-xl">Select Address</h2>
        <div className={styles.adress}>
          <div className={styles.item}>
            <div className={styles.info}>
              <div className={styles.Flex}>
                <SelectCountry
                  country={address.country}
                  setValueAddress={setValueAddress}
                />
                <input
                  value={address.street}
                  onChange={(e) => setValueAddress("street", e.target.value)}
                />
                <div className="">
                  <PhoneInput
                    className="items-center"
                    defaultCountry="ua"
                    value={address.phoneNumber}
                    onChange={(phone) => setValueAddress("phoneNumber", phone)}
                  />
                  {!isValidPhone && (
                    <div style={{ color: "red" }}>Phone is not valid</div>
                  )}
                </div>
              </div>
              <div className={styles.icon}>
                <FaPencilAlt />
                <IoCloseOutline />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            onClick={removeTransaction}
            type="button"
            variant={"default"}
            size={"lg"}
          >
            Back
          </Button>
          <Button
            onClick={submitTransaction}
            type="submit"
            variant={"default"}
            size={"lg"}
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
}
