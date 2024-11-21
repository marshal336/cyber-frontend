import { IProductItemInfo } from "@/types";
import DetailItem from "./DetailItem";
import styles from "./Details.module.scss";

interface IDetailsProps {
  className?: string;
  title: string;
  description: string;
  info: IProductItemInfo;
}

export default function Details({ description, title, info }: IDetailsProps) {
  return (
    <div className={styles.details}>
      <h2 className={styles.h2}>{title}</h2>
      <p className={styles.p}>{description}</p>
      <DetailItem title="Screen" info={info}/>
    </div>
  );
}
