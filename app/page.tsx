import Image from "next/image";
import styles from "./global.module.css";
export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
      <p className={styles.description}>
        私たちは市場をリードしているグローバルテックカンパニーです。
      </p>
    </div>
  );
}
