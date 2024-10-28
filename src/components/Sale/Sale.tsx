import React from "react"
import styles from './Sale.module.scss'
import { Button } from "../ui/button"
import Image from "next/image"
import { bigSalelogos } from "@/utils/data"

interface ISaleProps { }


export default function Sale({ }: ISaleProps) {
    return (
        <div className={`${styles.root} saleBgGradient`}>
            {bigSalelogos.map((item, i) => (
                <div className={styles[`logo-${i + 1}`]} key={i}>
                    <img src={item.src} alt={'logo'} />
                </div>
            ))}
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1>Big Summer <br className="block sm:hidden" /> <span>Sale</span></h1>
                    <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                    <Button variant={'ghost'} size={'lg'}>Shop Now</Button>
                </div>
            </div>
        </div>
    )
}
