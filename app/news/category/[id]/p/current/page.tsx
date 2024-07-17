import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constans";
import { getCategoryDetail, getNewsList } from "@/lib/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string
    current: string;
  };
};

export default async function News({ params }: Props) {
  const current = parseInt(params.current, NEWS_LIST_LIMIT);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  const category = await getCategoryDetail(params.id).catch(notFound)
  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });
  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} basePath={`/news/category/${category.id}`}/>
    </>
  );
}
