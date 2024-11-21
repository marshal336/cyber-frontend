"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui";
import { usePaginationStore } from "@/services/store/pagtinations";
import { useProductsStore } from "@/services/store/product/products";
import React from "react";

export function CustomPagination({}) {
  const { page } = usePaginationStore((state) => state);
  const { setStart } = usePaginationStore((state) => state);
  const { items } = useProductsStore((state) => state);
  return (
    <Pagination>
      <PaginationContent>
        {page !== 1 && (
          <PaginationItem
            onClick={() => setStart(page - 1)}
            className="cursor-pointer"
          >
            <PaginationPrevious className="px-3" />
          </PaginationItem>
        )}
        {[...new Array(1)].map((_, i) => (
          <PaginationItem key={i + 1} className="cursor-pointer">
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>
        ))}
        {items.length % 8 === 0 && (
          <PaginationItem
            onClick={() => setStart(page + 1)}
            className="cursor-pointer"
          >
            <PaginationNext className="px-3" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
