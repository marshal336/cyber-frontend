"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import styles from './Images.module.scss'
import { IProductItemInfoImages } from '@/types'

interface IImagesProps {
    logos: IProductItemInfoImages['imgUrl']
}

export default function Images({ ...data }: IImagesProps) {

    return (
        <div className={styles.wrapperLogos}>
            <div className={styles.subLogos}>
                {data.logos.map((src, i) => (
                    <div key={i} className={``}>
                        <img
                            src={src}
                            alt="iphone"
                            width={74}
                            height={76}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.mainLogo}>
                <img
                    src={data.logos ? data.logos[0] : ''}
                    alt="iphone"
                    width={416}
                    height={516} />
            </div>
        </div>
    )

}