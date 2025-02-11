import React from "react";
import Images from "@/components/product-page/Images";
import Details from "@/components/product-page/Details";
import { Container } from "@/components";
import { InfoProductPage } from "@/components/product-page";
import { axiosClassic } from "@/services/api/instance";
import { IFindByArgs, IProductItemInfo } from "@/types";
import { parseName } from "@/utils";
import { notFound } from "next/navigation";

async function getItem(body: IFindByArgs) {
  try {
    const { data } = await axiosClassic.post<IProductItemInfo>(
      `/products`,
      body
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Product({
  params,
}: {
  params: Promise<{ fullName: string, category: string }>;
}) {
  const body = parseName((await params).fullName);
  const data = await getItem(body);

  if (!data) return notFound();

  return (
    <div>
      <Container>
        <div className="md:py-[50px] py-[40px] flex lg:flex-row flex-col xl:gap-12 gap-4 justify-around items-center xl:justify-center">
          <Images logos={data.imagesUrl[0].imgUrl} />
          <InfoProductPage {...data} />
        </div>
        <Details title="Details" description={data.description} info={data} />
      </Container>
    </div>
  );
}

