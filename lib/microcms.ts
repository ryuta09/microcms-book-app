import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is not set");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is not set");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getMermbersList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Member>({
    endpoint: "members",
    queries,
  });
  return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0 
      }
    }
  });
  return detailData;
};

export const getCategoryDetail = async (contentId: string, queries?:MicroCMSQueries) => {
  const detailsData = await client.getListDetail<Category>({
    endpoint: 'category',
    contentId,
    queries
  })
  return detailsData
}

// 全てのコンテンツを取得
export const getAllNewsList = async () => {
  const listData = await client.getAllContents<News>({
    endpoint: 'news'
  })
  return listData
}

// 全てのカテゴリーを取得
export const getAllCategory = async () => {
  const listData = await client.getAllContents<Category>({
    endpoint: 'category'
  })
  return listData
}