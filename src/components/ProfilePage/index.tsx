"use client";
import { User } from "@/services/api/user";
import { PAGES_DASHBOARD } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "../ui";
import Container from "../Container/Container";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";
import styles from "./ProfilePage.module.scss";
import ProfileInpput from "./ProfileInput";
import { toast } from "sonner";

interface IProfilePageProps {
  className?: string;
  data: Omit<IUser, "accessToken">;
  defaultValue?: string;
  name?: string;
}

export interface IProfileInputs {
  fullName: string;
  email: string;
  city: string;
  country: string;
  phoneNumber: string;
}

export default function ProfilePage({ ...data }: IProfilePageProps) {
  const [value, setValue] = useState<Partial<IProfileInputs>>({
    fullName: data.data.fullName ?? "",
    email: data.data.email ?? "",
    city: data.data.city ?? "",
    country: data.data.country ?? "",
    phoneNumber: data.data.phoneNumber ?? "",
  });

  function setInputsValue(key: keyof Partial<IProfileInputs>, v?: string) {
    setValue({
      ...value,
      [key]: v,
    });
  }
  const { push } = useRouter();
  const { mutate: profile } = useMutation({
    mutationKey: ["profile"],
    mutationFn: () => User.logout(),
  });
  const { mutate: changeP } = useMutation({
    mutationKey: ["changeP"],
    mutationFn: () => User.changeProfile(value),
    onSuccess: () => {
      toast.success("You re profile changed ", {
        className: "bg-green-500 text-white border-none",
      });
    },
  });

  function changeProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    changeP();
  }

  function logout() {
    profile();
    push(PAGES_DASHBOARD.HOME);
  }

  return (
    <div className="">
      <Container className="flex flex-col gap-3 p-4 my-5">
        <div className={styles.info}>
          <img
            src={data.data.pictures ?? "/undefiend-user.png"}
            alt=""
            className={styles.logo}
          />
          <div className={styles.inf}>
            <h3>{data.data.fullName}</h3>
            <p>{data.data.email}</p>
          </div>
        </div>
        <form onSubmit={changeProfile} className={styles.inputs}>
          {Object.entries(value).map(([key, v]) => (
            <ProfileInpput
              key={key as keyof IProfileInputs}
              name={key.toUpperCase()}
              placeholder="..."
              value={v}
              setInputsValue={(_, newValue) =>
                setInputsValue(key as keyof IProfileInputs, newValue)
              }
            />
          ))}
          <div className="flex gap-7 h-[52px] mt-8">
            <Button
              type="button"
              onClick={logout}
              className="w-full h-full text-xl"
            >
              logOut
            </Button>
            <Button variant={"outline"} className="w-full h-full text-xl">
              Apply
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
