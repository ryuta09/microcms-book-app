import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constans";
import { getNewsList } from "@/lib/microcms";
import { notFound } from "next/navigation";
import { type } from "os";

type Props = {
  params: {
    current: string;
  };
};

export default async function News({ params }: Props) {
  const current = parseInt(params.current, NEWS_LIST_LIMIT);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });
  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current}/>
    </>
  );
}
