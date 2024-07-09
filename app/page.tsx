import Image from "next/image";
import styles from "./global.module.css";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import { News } from "@/lib/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/05/19",
      createdAt: "2024/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/05/29",
      createdAt: "2024/05/29",
    },
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/06/06",
      createdAt: "2024/06/06",
    },
  ],
};

export default function Home() {
  const slicedata = data.contents.slice(0, 2);
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
        <NewsList news={slicedata}/>
        <div className={styles.newsLink}>
            <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
