import { getNewsList } from "@/lib/microcms"
import NewsList from "../_components/NewsList";

export default async function News() {

  const {contents: news} = await getNewsList();
  return(
    <>
      <NewsList news={news} />
    </>
  )
}