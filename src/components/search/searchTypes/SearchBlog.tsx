import React from "react";

import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation";

import fetchExceptBook from "@/server/fetchExceptBook";

import MoreButton from "@/components/button/MoreButton";
import EndData from "@/components/displaySearchState/EndData";
import NoSearchData from "@/components/displaySearchState/NoSearchData";
import BlogContents from "../contents/BlogContents";

export default function SearchBlog() {
  const params = useSearchParams();

  const typeParams = params.get('type');
  const queryParams = params.get('query');

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['blogData', typeParams, queryParams],
    queryFn: ({ pageParam = 0 }) => fetchExceptBook(typeParams, queryParams, 10, pageParam),
    select: (data) => data.pages.map(item => item.documents),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const lastDataPage = Math.ceil(lastPage.meta.pageable_count / 10);
      if (lastDataPage !== lastPageParam && lastDataPage !== 0)
        return allPages.length + 1;
    }
  })

  return (
    <React.Fragment>
      <ul className="search_result_box">
        {data?.map((item, index) => (
          <BlogContents key={index} data={item} />
        ))}

        {hasNextPage && <MoreButton fetchNextPage={fetchNextPage} />}
        {data && data[0].length > 0 && !hasNextPage && <EndData />}
        {data && data[0].length === 0 && !hasNextPage && <NoSearchData />}
      </ul>
    </React.Fragment>
  )
}