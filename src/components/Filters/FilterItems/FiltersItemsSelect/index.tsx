"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui"

interface IFiltersItemsSelectProps {
    className?: string
    items: string[]
    setSelect?: (select: string) => void
}

export default function FiltersItemsSelect({
    className,
    children,
    items,
    setSelect
}: React.PropsWithChildren<IFiltersItemsSelectProps>) {

    return (
        <div className={className}>
            <Select onValueChange={setSelect}>
                <SelectTrigger>
                    <SelectValue placeholder={children} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{children}</SelectLabel>
                        {items.map(item => (
                            <SelectItem key={item} value={item}>{item}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )

}