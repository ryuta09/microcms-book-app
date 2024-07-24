import { getNewsList } from "@/lib/microcms";
import NewsList from "../_components/NewsList";
import Pagination from "../_components/Pagination";
import SearchField from "../_components/SearchField";

export default async function News() {
  const { contents: news, totalCount } = await getNewsList();
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
