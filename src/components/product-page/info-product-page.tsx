"use client"
import React from "react"
import styles from './Product.module.scss'
import Colors from "./Colors"
import Characteristics from "./Characteristics"
import Delivery from "./Delivery"
import Memory from "./Memory"
import { Button } from "../ui"
import { IProduct } from "@/types"
import { characteristicsLogos } from "@/utils/data"

interface IInfoProductPageProps extends IProduct { }

export default function InfoProductPage({ ...data }: IInfoProductPageProps) {
    // const [index, setIndex] = React.useState(0)
    // const [memory, setMemory] = React.useState(0)
    // const [input, setInput] = React.useState(50)
    // const [price, setPrice] = React.useState(0)
    // const [color, setColor] = React.useState(0)
    // const [more, setMore] = React.useState(false)
    // const [comment, setComment] = React.useState(false)

    const items = characteristicsLogos.map(({ item }, i) => ({
        item,
        title: data.productItemInfo[i + 1]
    }))
    console.log(items);

    return (
        <div className={styles.info}>
            <h2>{data.title}</h2>
            <div className={styles.price}>
                <p className={`text-4xl text-black`}>${data.productItemInfo[0].price}</p>
            </div>

            <Colors colors={data.productItemInfo[0].colors} />
            <Memory memorys={data.productItemInfo[0].memory} />

            {/* <Characteristics  /> */}

            <div className={styles.descriprion}>{data.productItemInfo[0].description}</div>

            <div className={styles.buttons}>
                {['Add to Wishlist', 'Add to Card'].map((el, i) => (
                    <Button size={'lg'} key={i} variant={i === 0 ? 'outline' : 'default'}>{el}</Button>
                ))}
            </div>

            <Delivery />

        </div>
    )

}

