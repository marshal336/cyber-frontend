import { HTMLInputTypeAttribute } from "react";
import styles from "./ProfileInput.module.scss";
import { IProfileInputs } from "..";

interface IProfileInpputProps {
  className?: string;
  name: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  key: keyof Partial<IProfileInputs>;
  readOnly?: boolean;
  setInputsValue(key: keyof Partial<IProfileInputs>, v?: string): void;
}

export default function ProfileInpput({
  name,
  placeholder,
  type,
  value,
  key,
  readOnly,
  setInputsValue,
}: IProfileInpputProps) {
  return (
    <div className={styles.input}>
      <span>{name}</span>
      <input
        value={value}
        onChange={(e) => setInputsValue?.(key, e.target.value)}
        placeholder={placeholder}
        type={type}
        readOnly={readOnly}
      />
    </div>
  );
}
