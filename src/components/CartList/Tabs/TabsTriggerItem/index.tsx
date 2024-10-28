"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { TabsTrigger } from '@/components/ui'
import { Variant } from '@/utils'

interface ITabsTriggerItemProps {
    className?: string
    name: string
    value: Variant['value']
    onClick?: (type: Variant['value']) => void
}

export default function TabsTriggerItem({ className, name, onClick, value }: ITabsTriggerItemProps) {

    return (
        <TabsTrigger
            value={name}
            className={cn(className)}
            onClick={() => onClick?.(value)}
        >{name}</TabsTrigger>
    )

}