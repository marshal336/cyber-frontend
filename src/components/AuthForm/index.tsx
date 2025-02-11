"use client";
import React, { useEffect } from "react";
import FormFieldCustom from "./FormFieldCustom";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Button,
  Form,
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PAGES_DASHBOARD, TOKENS, formSchema } from "@/utils";
import { IAuth } from "@/types";
import { User } from "@/services/api/user";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import Cookies from "js-cookie";

interface IAuthFormProps {
  className?: string;
}
type Variant = "login" | "register";
const values: Variant[] = ["register", "login"];

export default function AuthForm({ className }: IAuthFormProps) {
  const [variant, setVariant] = React.useState<Variant>("register");
  const [index, setIndex] = React.useState(0);
  const accessToken = Cookies.get(TOKENS.ACCESS_TOKEN);

  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["userLogin"],
    mutationFn: (data: IAuth) => User.main(data, variant),
    onSuccess: (data) => {
      if (data) {
        toast.success("login successfull", {
          className: "bg-green-500 border-none text-white",
        });
        router.push(`${PAGES_DASHBOARD.PROFILE}`);
      }
    },
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (!accessToken) router.push(`${PAGES_DASHBOARD.PROFILE}`);
  }, [accessToken]);

  function onSubmit(data: z.infer<typeof formSchema>) {
    mutate(data);
    form.reset();
  }
  return (
    <div
      className={cn(
        className,
        "border rounded-lg border-black flex flex-col items-center p-4"
      )}
    >
      <h3 className="sm:text-4xl text-xl font-bold">
        {variant === "register" ? "Create Account" : "Log in"}
      </h3>
      <Tabs defaultValue={"register"} className="w-full">
        <TabsList className="flex gap-3 !bg-transparent">
          {values.map((value, i) => (
            <TabsTrigger
              className={cn(
                "!bg-transparent rounded-none capitalize sm:text-lg text-md text-black/90",
                i === index ? "border-b-[4px] border-b-black" : ""
              )}
              onClick={() => {
                setVariant(value);
                setIndex(i);
              }}
              value={variant}
            >
              {value}
            </TabsTrigger>
          ))}
        </TabsList>
        {values.map((value, i) => (
          <TabsContent value={value}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-2 px-4"
              >
                {variant === "register" && (
                  <FormFieldCustom control={form.control} name={"fullName"} />
                )}
                <FormFieldCustom control={form.control} name={"email"} />
                <FormFieldCustom control={form.control} name={"password"} />
                <div className="flex justify-between">
                  <Button type="submit" className="max-w-[100px] mt-6 mb-4">
                    Submit
                  </Button>
                  <Link href={PAGES_DASHBOARD.HOME}>
                    <Button className="max-w-[100px] mt-6 mb-4">Home</Button>
                  </Link>
                </div>
              </form>
            </Form>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
