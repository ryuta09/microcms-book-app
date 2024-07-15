import Image from "next/image";
import styles from "./global.module.css";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import { News, getNewsList } from "@/lib/microcms";
import { TOP_NEWS_LIST } from "./_constans";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIST
  })
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgImg}
          src={"/img-mv.jpg"}
          width={4000}
          height={1200}
          alt=""
        />
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents}/>
        <div className={styles.newsLink}>
            <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
