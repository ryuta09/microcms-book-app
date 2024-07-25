import { getNewsDetail } from "@/lib/microcms"
import './page.module.css'
import Article from "@/app/_components/Article"
import { notFound } from "next/navigation"
type Props = {
  params: {
    slug: string
  }
  searchParams: {
    dk?: string
  }
}

export const revalidate = 60                      ;

export default async function NewsDetail({params, searchParams}: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk
  }).catch(notFound)
  
  return(
    <Article data={data} />
  )
}