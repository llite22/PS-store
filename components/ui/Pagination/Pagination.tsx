'use client'
import { FC } from "react";
import { useRouter } from "next/navigation"
import { updateSearchParams } from "@/utils/searchParams";
import { SearchParamsProps } from "@/api/Games";
import styles from './Pagination.module.scss'

interface SearchParams {
  searchParams: SearchParamsProps
}


const Pagination:FC<SearchParams> = ({searchParams}) => {
    const router = useRouter()

    const totalPages: number = 4;
    const pageNumbers: number[] = Array.from(Array(totalPages), (_, index: number) => index + 1);

  return (
    <div className={styles.pagination}>
              {pageNumbers.map((pageNumber: number) =>
                pageNumber === parseInt(searchParams.page || "1") ? (
                  <button
                    key={pageNumber}
                    className={styles.square}
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
                    className={styles.squareAll}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
  )
}
export default Pagination