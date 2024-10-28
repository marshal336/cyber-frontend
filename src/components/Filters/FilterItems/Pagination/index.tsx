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

interface ICustomPagination {
    items: number[]
}

export function CustomPagination({
    items,
}: ICustomPagination) {
    const maxPages = Math.ceil((items.length * 2) / 8)
    const { setStart } = usePaginationStore(state => state)

    return (
        <Pagination>
            <PaginationContent>
                {items
                    .slice(0, maxPages < 3 ? maxPages : 3)
                    .map((_, i) => (
                        <PaginationItem key={i + 1} className="cursor-pointer">
                            <PaginationLink
                                onClick={() => setStart(i + 1)}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem className="cursor-pointer">
                    <PaginationLink
                        onClick={() => setStart(maxPages)}>
                        {maxPages}
                    </PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
