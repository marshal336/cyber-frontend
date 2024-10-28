'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui"
import { usePaginationStore } from "@/services/store/pagtinations"
import { useRouter } from "next/navigation"

interface ICustomPagination {
    items: number[]
    per_page: number
}

export function CustomPagination({
    items,
    per_page
}: ICustomPagination) {
    const router = useRouter()
    const maxPages = Math.ceil((items.length * 2) / per_page)
    const { setPage, page, end, start } = usePaginationStore(state => state)
    console.log(end, start);

    return (
        <Pagination>
            <PaginationContent>
                {items
                    .slice(0, maxPages < 3 ? maxPages : 3)
                    .map((_, i) => (
                        <PaginationItem key={i + 1} className="cursor-pointer">
                            <PaginationLink
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem className="cursor-pointer">
                    <PaginationLink>
                        {maxPages}
                    </PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
