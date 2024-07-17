import NewsList from "@/app/_components/NewsList";
import { getCategoryDetail, getNewsList } from "@/lib/microcms";
import { notFound } from "next/navigation";
import Category from "../../../_components/Category";
import { NEWS_LIST_LIMIT } from "@/app/_constans";
type Props = {
  params: {
    id: string;
  };
};
export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });
  return (
    <>
      <p>
        <Category category={category} />の記事一覧
      </p>
      <NewsList news={news} />
    </>
  );
}
