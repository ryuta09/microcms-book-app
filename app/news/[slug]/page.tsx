import { getNewsDetail } from "@/lib/microcms"
import './page.module.css'
import Article from "@/app/_components/Article"
import { notFound } from "next/navigation"
type Props = {
  params: {
    slug: string
  }
}
export default async function NewsDetail({params}: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound)
  
  return(
    <Article data={data} />
  )
}