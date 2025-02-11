'use client'
import React, { useEffect, useState } from 'react'
import Filters from '@/components/Filters/Filters'
import { Container, FilterItems } from '@/components'
import { SearchParams, useFilters } from '@/hooks'


export default function Category({ params, searchParams }: { params: Promise<{ category: string }>, searchParams: Promise<SearchParams> }) {
    const [category, setCategory] = useState<string>('');
    const [search, setSearch] = useState<Partial<SearchParams>>({});

    useEffect(() => {
        const fetchCategory = async () => {
            const result = await params;
            setCategory(result.category);
        };
        const fetchSearchParams = async () => {
            const result = await searchParams;
            setSearch(result);
        };

        fetchCategory();
        fetchSearchParams();
    }, [params, searchParams]);

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
        sP: search,
        category
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
                setSelect={s => setSelect(s)}
                items={items}
                className="w-full flex-1"
                itemsLength={items.length} />

        </Container>
    )

}