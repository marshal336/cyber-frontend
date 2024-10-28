"use client"
import { footerLinks } from "@/utils/data"
import Link from "next/link"
import React from "react"

interface IMenuProps {
    styles: any
}
export default function Menu({ styles }: IMenuProps) {

    return (
        <div className={styles.menu}>
            {footerLinks.map((item, i) => (
                <div key={i} className={styles.info}>
                    <h2>{item.title}</h2>
                    <ul>
                        {item.items.map((el, i) => (
                            <Link href={'/'} key={i}>{el.title}</Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )

}
