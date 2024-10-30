"use client"
import React from "react"
import styles from './Discount.module.scss'
import Cart from "@/components/Cart/Cart"
import Container from "@/components/Container/Container"
import { useProduct } from "@/hooks"

interface IDiscountProps { }

export default function Discount({ }: IDiscountProps) {
    const { items } = useProduct('discount')

    return (
        <div className={styles.root}>
            <Container className={styles.container}>
                <h2>Discounts up to -50%</h2>
                <div className={styles.cards}>
                    {items.map(item => (
                        <Cart
                            categoryTitle={item.title}
                            memory={item.memory[0].title}
                            color={item.productItemInfo[0].colors[0].title}
                            key={item.id}
                            id={item.id}
                            defaultImage={item.defaultImage}
                            price={item.productItemInfo[0].price}
                            productTitle={item.title}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )

}
