"use client"
import React from 'react'
import { cn } from '@/lib/utils'

interface IContainerProps {
    className?: string
}

export default function Container({ className, children }: React.PropsWithChildren<IContainerProps>) {

    return <div className={cn(className, 'max-w-[1440px] mx-auto')}>{children}</div>

}