"use client"
import React from 'react'
import styles from './Colors.module.scss'
import { IProductItemInfoColors } from '@/types'

interface IColorsProps {
    colors: IProductItemInfoColors[]
}

export default function Colors({ ...data }: IColorsProps) {

    return (
        <div className={styles.colors}>
            <p>Select color :</p>
            <div className={styles.colorsArray}>
                {data.colors.map(({ color, id }) => (
                    <p
                        style={{ background: `${color}` }}
                        className={`w-8 h-8 border-black border`}
                        key={id}
                    />
                ))}
            </div>
        </div>
    )

}