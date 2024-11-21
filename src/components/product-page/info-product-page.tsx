"use client";
import styles from "./Product.module.scss";
import Colors from "./Colors";
import Characteristics from "./Characteristics";
import Delivery from "./Delivery";
import Memory from "./Memory";
import Cookies from "js-cookie";
import { Button } from "../ui";
import { IProductItemInfo } from "@/types";
import { characteristicsLogos } from "@/utils/data";
import { useCartStore } from "@/services/store/cart";
import { TOKENS } from "@/utils";
import { useRouter } from "next/navigation";

interface IInfoProductPageProps extends IProductItemInfo {}

export default function InfoProductPage({ ...data }: IInfoProductPageProps) {
  const { push } = useRouter();
  const { create } = useCartStore((state) => state);
  const accessToken = Cookies.get(TOKENS.ACCESS_TOKEN);

  function isLoginUser() {
    if (!accessToken || accessToken === '') {
      push('/auth');
    } else {
      create(data.id);
    }
  }

  return (
    <div className={styles.info}>
      <h2>{data.product.title}</h2>
      <div className={styles.price}>
        <p className={`text-4xl text-black`}>${data.totalPrice}</p>
      </div>

      <Colors
        memory={data.memory[0].title}
        categoryTitle={data.product.category.title}
        productTitle={data.product.title}
        productColorId={data.product.colorId}
        colors={data.product.colors}
      />

      <Memory
        memoryId={data.memory[0].id}
        categoryTitle={data.product.category.title}
        color={data.colors[0].title}
        productTitle={data.product.title}
        memorys={data.product.memory}
      />

      <div className={styles.characteristics}>
        <Characteristics
          title="Screen size"
          value={data.screenSize}
          logo={characteristicsLogos[0].item}
        />
        <Characteristics
          title="CPU"
          value={data.CPU}
          logo={characteristicsLogos[1].item}
        />
        <Characteristics
          title="Number of Cores"
          value={data.cores}
          logo={characteristicsLogos[2].item}
        />
        <Characteristics
          title="Main camera"
          value={data.mainCamera}
          logo={characteristicsLogos[3].item}
        />
        <Characteristics
          title="Front-camera"
          value={data.frontCamera}
          logo={characteristicsLogos[4].item}
        />
        <Characteristics
          title="Battery capacity"
          value={data.battery}
          logo={characteristicsLogos[5].item}
        />
      </div>

      <div className={styles.descriprion}>{data.description}</div>

      <div className={styles.buttons}>
        <Button size={"lg"} variant={"outline"}>
          Add to Wishlist
        </Button>
        <Button onClick={isLoginUser} size={"lg"} variant={"default"}>
          Add to Card
        </Button>
      </div>

      <Delivery />
    </div>
  );
}
