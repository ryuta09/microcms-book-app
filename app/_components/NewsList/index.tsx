import Image from "next/image";
import styles from "./index.module.css";
import { News } from "@/lib/microcms";
import Category from "../Category";
import Date from "../Date";
import Link from "next/link";
type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません</p>;
  } else {
    return (
      <>
        <ul>
          {news.map((article) => (
            <li key={article.id} className={styles.list}>
              <Link href={`/news/${article.id}`} className={styles.link}>
                <Image
                  className={styles.image}
                  src={"/no-image.png"}
                  width={1200}
                  height={630}
                  alt="No Image"
                />
                <dl className={styles.content}>
                  <dt className={styles.title}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <Category category={article.category} />
                    <Date  date={article.publishedAt ?? article.createdAt}/>
                  </dd>
                </dl>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
