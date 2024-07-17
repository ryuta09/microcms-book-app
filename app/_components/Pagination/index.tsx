import { NEWS_LIST_LIMIT } from "@/app/_constans";
import styles from "./index.module.css";
import Link from "next/link";
type Props = {
  totalCount: number;
  current?: number;
};

export default function Pagination({ totalCount, current = 1 }: Props) {
  const pages = Array.from(
    {
      length: Math.ceil(totalCount / NEWS_LIST_LIMIT),
    },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            {/* <Link href={`/new/p/${p}`} className={styles.item}>
              {p}
            </Link> */}
            {current !== p ? (
              <Link href={`/news/p/${p}`} className={styles.item}>
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
