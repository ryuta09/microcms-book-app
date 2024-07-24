import { getNewsList } from "@/lib/microcms"
import NewsList from "../_components/NewsList";
import Pagination from "../_components/Pagination";

export default async function News() {

  const {contents: news, totalCount} = await getNewsList();
  return(
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  )
}