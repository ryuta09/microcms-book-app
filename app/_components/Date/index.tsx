import Image from "next/image";
import styles from "./index.module.css";
import { formartDate } from "@/lib/utils";

type Props = {
  date: string;
};
export default function Date({ date }: Props) {
  return (
    <>
      <span className={styles.date}>
        <Image src={"/clock.svg"} width={16} height={16} priority alt="" />
        {formartDate(date)}
      </span>
    </>
  );
}
