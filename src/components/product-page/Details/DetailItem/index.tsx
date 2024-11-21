import { IProductItemInfo } from "@/types";
import styles from "./DetailItem.module.scss";

interface IDetailItemProps {
  className?: string;
  title: string;
  info: IProductItemInfo;
}

export default function DetailItem({ title, info }: IDetailItemProps) {
  console.log(info);

  return (
    <div className={styles.detailss}>
      <h2>{title}</h2>
      <div className={styles.detailItem}>
        {Object.entries(info)
          .slice(1, 13)
          .map(([name, value]) => (
            <>
              <div className={styles.separator}>
                <p>{name}</p>
                <p>{value}</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
