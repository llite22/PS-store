'use client'
import { FC } from "react";
import { useRouter } from "next/navigation"
import { updateSearchParams } from "@/utils/search.params";
import { SearchParamsProps } from "@/api/Games";

interface SearchParams {
  searchParams: SearchParamsProps
}


const Pagination:FC<SearchParams> = ({searchParams}) => {
    const router = useRouter()

    const totalPages: number = 5;
    const pageNumbers: number[] = Array.from(Array(totalPages), (_, index: number) => index + 1);

  return (
    <div className="flex justify-center mt-8 mb-8">
              {pageNumbers.map((pageNumber: number) =>
                pageNumber === parseInt(searchParams.page || "1") ? (
                  <button
                    key={pageNumber}
                    className="mx-1 w-10 h-10 rounded bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    {pageNumber}
                  </button>
                ) : (
                  <button
                    key={pageNumber}
                    onClick={() => {
                      const newPathnamePage: string = updateSearchParams("page", `${pageNumber}`);
                      router.push(newPathnamePage);
                    }}
                    className="mx-1 w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 text-black"
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
  )
}
export default Pagination