"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui'

interface ICartDrawerProps {
    className?: string
}

export default function CartDrawer({ className, children }: React.PropsWithChildren<ICartDrawerProps>) {

    return (
        <Sheet >
            <SheetTrigger>
                {children}
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>In basket 0 items</SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )

}