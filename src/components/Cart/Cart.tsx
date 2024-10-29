"use client"
import Image from "next/image"
import React from "react"
import Link from "next/link"
import styles from './Cart.module.scss'
import { Card, CardContent, Button } from "@/components/ui"
import { CiHeart } from "react-icons/ci";
import { cn } from "@/lib/utils"
import { PAGES_DASHBOARD } from "@/utils"


interface ICartProps {
    id: number;
    title: string;
    defaultImage: string
    price: number
    bestSeller?: number
    discount?: number
    categoryTitle: string
}

export default function Cart({ ...data }: ICartProps) {
    const [hover, setHover] = React.useState(false)

    return (
        <Link href={`${PAGES_DASHBOARD.CATALOG}/${data.categoryTitle.toLowerCase()}/${data.id}`}>
            <Card
                onMouseEnter={() => setHover(!hover)}
                onMouseLeave={() => setHover(false)}
                className={styles.cart}>
                {hover && <CiHeart className={cn(styles.heart)} />}
                {data.bestSeller && (<p className="absolute top-1 left-1 bg-red-600 text-white text-sm px-2 py-1 rounded-xl">BestSeller</p>)}
                <CardContent className={cn(styles.cardContent)}>
                    <div className="w-[160px] h-[130px] flex justify-center mx-auto">
                        <img src={data.defaultImage} alt="iphone" className="max-w-fill" />
                    </div>

                    <p>{data.title}</p>

                    <b className="text-xl">{data.price} $</b>

                    <Button variant={'default'} size={'lg'} className="bg-black">Buy now</Button>
                </CardContent>
            </Card>
        </Link>

    )

}

