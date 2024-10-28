"use client"
import React from 'react'
import { TabsContent } from '@/components/ui'

interface ITabsContentItemProps {
    className?: string
    value: string
}

export default function TabsContentItem({ className, children, value }: React.PropsWithChildren<ITabsContentItemProps>) {

    return (
        <TabsContent value={value} className={className}>
            {children}
        </TabsContent>
    )

}