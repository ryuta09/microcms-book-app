import Image from "next/image";
import styles from "./global.module.css";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

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
        <ul>
          {slicedata.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                className={styles.image}
                  src={"/no-image.png"}
                  width={1200}
                  height={630}
                  alt="No Image"
                />
                <dl className={styles.content}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.tag}>{article.category.name}</span>
                    <span className={styles.date}>
                      <Image 
                        src={'/clock.svg'}
                        width={16}
                        height={16}
                        priority
                        alt=""
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
