"use client"
import React from 'react'
import styles from './Memory.module.scss'
import { IProductItemInfoMemorys } from '@/types'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { validPath } from '@/utils'

interface IMemoryProps {
    memorys: IProductItemInfoMemorys[]
    color: string
    categoryTitle: string
    productTitle: string
    memoryId: number
}

export default function Memory({ ...data }: IMemoryProps) {

    return (
        <div className={styles.memorys}>
            {data.memorys.map(({ id, title, }, i) => (
                <Link
                    href={`${validPath(data.categoryTitle, data.productTitle, title, data.color)}`}
                    className={cn(styles.memory, data.memoryId === (i + 1) && "border border-black/10", 'text-black')}
                    key={id}>{title}</Link>
            ))}
        </div>
    )

}