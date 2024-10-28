"use client"
import React from "react"
import styles from './Filters.module.scss'
import { Accordion } from "../ui"
import { usePathname } from "next/navigation"
import { excludedPaths } from "@/utils"
import { cn } from "@/lib/utils"
import { useFiltersStore } from "@/services/store/filters"
import FiltersAccordion from "./FiltersAccordion"

interface IFiltersProps {
    brandId: Set<number>
    memoryId: Set<number>
    screenTypeId: Set<number>
    setBrandId: (id: number) => void
    setMemoryId: (id: number) => void
    setScreenTypeId: (id: number) => void
}

export default function Filters(data: Partial<IFiltersProps>) {
    const [input, setInput] = React.useState('');

    const getFilters = useFiltersStore(state => state.getFilters)
    const { brands, memorys, screenType } = useFiltersStore(state => state.items)


    const path = usePathname()
    const isExcludedPath = excludedPaths.some(pathPart => path.includes(pathPart));

    React.useEffect(() => {
        getFilters()
    }, [])

    return (
        <Accordion type='multiple' className={cn(styles.root,)}>
            <FiltersAccordion
                activeId={data.brandId}
                setActiveId={data.setBrandId}
                value="Brands"
                isValidInput
                items={brands}
                input={input}
                setInput={setInput} />

            {!isExcludedPath &&
                <FiltersAccordion
                    activeId={data.memoryId}
                    setActiveId={data.setMemoryId}
                    items={memorys}
                    value="Built-in memory" />}

            {!isExcludedPath &&
                <FiltersAccordion
                    activeId={data.screenTypeId}
                    setActiveId={data.setScreenTypeId}
                    value="Screen type"
                    items={screenType}
                    input={input}
                    setInput={setInput} />}
        </Accordion>
    )
}
