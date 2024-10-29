"use client"
import React from 'react'
import styles from './Memory.module.scss'
import { IProductItemInfoMemorys } from '@/types'

interface IMemoryProps {
    memorys: IProductItemInfoMemorys[]
}

export default function Memory({ ...data }: IMemoryProps) {

    return (
        <div className={styles.memorys}>
            {data.memorys.map(({ id, title, }, i) => (
                <div
                    className={`${styles.memory} border border-black text-black`}
                    key={id}>{title}</div>
            ))}
        </div>
    )

}