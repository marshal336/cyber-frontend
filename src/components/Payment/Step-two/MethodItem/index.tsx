import { Checkbox } from "@/components/ui";
import styles from "./MethodItem.module.scss";
import { cn } from "@/lib/utils";

interface IMethodItemProps {
  className?: string;
  name?: string;
  value?: string;
  dateDelivery?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export default function MethodItem({ ...data }: IMethodItemProps) {
  return (
    <div className={cn(styles.method, data.className)}>
      <Checkbox
        onCheckedChange={data.onCheckedChange}
        checked={data.checked}
        className="rounded-full mt-[2px] w-6 h-6 border-gray-300"
        id={`checkbox-${data.name}-${String(data.value)}`}
      />
      <label
        htmlFor={`checkbox-${data.name}-${String(data.value)}`}
        className={styles.item}
      >
        <div className={styles.info}>
          <h2 className="font-bold text-xl">{data.name}</h2>
          <h2>{data.value}</h2>
        </div>
        <div className={styles.date}>{data.dateDelivery}</div>
      </label>
    </div>
  );
}
