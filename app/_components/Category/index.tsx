
import type { Category } from "@/lib/microcms";
import styles from "./index.module.css";

type Props =  {
  category: Category
}

export default function Category({category}:Props) {
  return(
    <>
    <span className={styles.tag}>{category.name}</span>
    </>
  )
}