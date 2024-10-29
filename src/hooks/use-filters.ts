import { usePaginationStore } from "@/services/store/pagtinations"
import { useProductsStore } from "@/services/store/product/product"
import { useRouter, useSearchParams } from "next/navigation"
import qs from "qs"
import React from "react"
import { useSet } from "react-use"


export interface SearchParams {
    brandId: number
    memoryId: number
    screenTypeId: number
    page: number,
}

interface IUseFilters {
    sP: Partial<SearchParams>,
    category: string
}

export function useFilters({ sP, category }: IUseFilters) {
    const router = useRouter()
    const sp = useSearchParams() as unknown as Map<keyof SearchParams, string>
    const [select, setSelect] = React.useState('asc')
    const [brandId, { toggle: setBrandId }] = useSet(new Set<number>(
        sp.get('brandId')?.split(',').map(Number) ?? []
    ))
    const [memoryId, { toggle: setMemoryId }] = useSet(new Set<number>(
        sp.get('memoryId')?.split(',').map(Number) ?? []
    ))
    const [screenTypeId, { toggle: setScreenTypeId }] = useSet(new Set<number>(
        sp.get('screenTypeId')?.split(',').map(Number) ?? []
    ))
    const getByCategory = useProductsStore(state => state.getByCategory)
    const getBySearchParams = useProductsStore(state => state.getBySearchParams)

    const { page, setPage } = usePaginationStore(state => state)
    const items = useProductsStore(state => state.items)
        .filter(item => item.category.title.toLowerCase().includes(category))

    React.useEffect(() => {
        getByCategory(category)
        setPage(Number(sp.get('page')) > 0 ? Number(sp.get('page')) : 1)
    }, [])

    React.useEffect(() => {
        const data = {
            brandId: Array.from(brandId),
            memory: Array.from(memoryId),
            screenType: Array.from(screenTypeId),
            page
        };

        const searchParams = qs.stringify(data, { arrayFormat: 'comma', })

        router.push(`?${searchParams}`, {
            scroll: false
        })

        getBySearchParams(sP)

    }, [
        sP.brandId,
        sP.memoryId,
        sP.screenTypeId,
        sP.page,
        page,
        brandId,
        memoryId,
        screenTypeId
    ])

    return {
        items,
        brandId,
        memoryId,
        screenTypeId,
        setSelect,
        setBrandId,
        setMemoryId,
        setScreenTypeId,
    }
}