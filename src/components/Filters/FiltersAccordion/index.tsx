"use client"
import React from 'react'
import FilterChecbox from '../FilterCheckBox'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui'
import { CustomInput } from '@/components'
import { IFilters } from '@/types'

interface IFiltersAccordionProps {
    className?: string
    value: string
    items: IFilters['brands'] | IFilters['memorys'] | IFilters['screenType']
    input?: string,
    isValidInput?: boolean
    activeId?: Set<number>,
    itemsLength?: number
    setInput?: (input: string) => void
    setActiveId?: (id: number) => void
}

export default function FiltersAccordion({ ...data }: IFiltersAccordionProps) {
    return (
        <AccordionItem value={data.value}>
            <div>
                <AccordionTrigger className='hover:no-underline border-b text-lg'>{data.value}</AccordionTrigger>
                <AccordionContent className='flex flex-col gap-3 pt-4'>

                    {data.isValidInput && <CustomInput
                        className='w-full h-10 mx-auto'
                        input={data.input}
                        setInput={data.setInput} />}

                    {data.items
                        .map(item => (
                            <FilterChecbox
                                itemsLength={data.itemsLength}
                                checked={data.activeId?.has(item.id)}
                                onCheckedChange={() => data.setActiveId?.(item.id)}
                                key={item.id}
                                text={item.title}
                                value={String(item.id)}
                                name={item.title}
                            />
                        ))}
                </AccordionContent>
            </div>
        </AccordionItem>
    )

}