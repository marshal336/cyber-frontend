"use client"
import React from "react"
import styles from './Discount.module.scss'
import Cart from "@/components/Cart/Cart"
import Container from "@/components/Container/Container"
import { IProduct } from "@/types"

interface IDiscountProps {
    items: IProduct[]
}

export default function Discount({ items }: IDiscountProps) {

    return (
        <div className={styles.root}>
            <Container className={styles.container}>
                <h2>Discounts up to -50%</h2>
                <div className={styles.cards}>
                    {items.map(item => (
                        <Cart
                            key={item.id}
                            id={item.id}
                            defaultImage={item.defaultImage}
                            price={item.productItemInfo[0].price}
                            title={item.title}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )

}
