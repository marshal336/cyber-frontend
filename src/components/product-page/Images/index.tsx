"use client"
import React from 'react'
import styles from './Images.module.scss'
import { IProductItemInfoImages } from '@/types'
import { cn } from '@/lib/utils'

interface IImagesProps {
    logos: IProductItemInfoImages['imgUrl']
}

export default function Images({ ...data }: IImagesProps) {
    const [imgId, setImgId] = React.useState(0)

    return (
        <div className={styles.wrapperLogos}>
            <div className={styles.subLogos}>
                {data.logos.map((src, i) => (
                    <div key={i} className={cn('cursor-pointer', imgId === i && 'bg-white/50 border border-black/10')}>
                        <img
                            onClick={() => setImgId(i)}
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
                    src={data.logos[imgId]}
                    alt="iphone"
                    width={416}
                    height={516} />
            </div>
        </div>
    )

}