import React from "react"
import styles from './Hero.module.scss'
import { Button } from "../ui/button"
import Container from "../Container/Container"
import { cn } from "@/lib/utils"

interface IHeroProps {

}

export default function Hero({ }: IHeroProps) {

    return (
        <div className={cn(styles.root, 'heroGradient')}>
            <Container className={styles.container}>
                <div className={styles.info}>
                    <h2 className={styles.h2}>Pro.Beyond.</h2>
                    <h1 className={styles.h1}>IPhone 14 <span>Pro</span></h1>
                    <p className={styles.p}>Created to change everything for the better. For everyone</p>
                    <Button variant={'ghost'} size={'lg'}>Shop Now</Button>
                </div>
                <div>
                    <img src={'/Iphone.png'} alt="iphone" width={406} height={632} className="max-w-full" />
                </div>
            </Container>
        </div>
    )

}