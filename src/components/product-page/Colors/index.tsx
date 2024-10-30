"use client"
import React from 'react'
import styles from './Colors.module.scss'
import { IProductItemInfoColors } from '@/types'
import Link from 'next/link'
import { validPath } from '@/utils'

interface IColorsProps {
    colors: IProductItemInfoColors[]
    productColorId: number
    categoryTitle: string
    productTitle: string
    memory: string
}

export default function Colors({ ...data }: IColorsProps) {


    return (
        <div className={styles.colors}>
            <p>Select color :</p>
            <div className={styles.colorsArray}>
                {data.colors.map(({ title, color, id }) => (
                    <Link
                        href={`${validPath(data.categoryTitle, data.productTitle, data.memory, title)}`}
                        style={{ background: `${color}` }}
                        className={`w-8 h-8 ${data.productColorId === id && 'border-stone-500 border-[6px]'}`}
                        key={id}
                    />
                ))}
            </div>
        </div>
    )

}