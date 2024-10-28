'use client'
import React from 'react'
import Filters from '@/components/Filters/Filters'
import { Container, FilterItems } from '@/components'
import { SearchParams, useFilters } from '@/hooks'


export default function Category({ params, searchParams }: { params: { category: string }, searchParams: SearchParams }) {

    const {
        items,
        brandId,
        memoryId,
        screenTypeId,
        setBrandId,
        setMemoryId,
        setScreenTypeId,
        setSelect
    } = useFilters({
        sP: searchParams,
        category: params.category
    })

    return (
        <Container className="flex gap-11 px-5 sm:flex-row flex-col mb-5">
            <Filters
                brandId={brandId}
                memoryId={memoryId}
                screenTypeId={screenTypeId}
                setBrandId={setBrandId}
                setMemoryId={setMemoryId}
                setScreenTypeId={setScreenTypeId}
            />
            <FilterItems
                paginationItems={Array.from({ length: items.length }).map((_, i) => i + 1)}
                setSelect={s => setSelect(s)}
                items={items}
                className="w-full flex-1"
                itemsLength={items.length} />

        </Container>
    )

}