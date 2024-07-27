import { getNewsDetail } from "@/lib/microcms";
import "./page.module.css";
import Article from "@/app/_components/Article";
import { notFound } from "next/navigation";
import { Metadata } from "next";
type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.thumbnail?.url ?? '']
    },
  };
}

export default async function NewsDetail({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return <Article data={data} />;
}