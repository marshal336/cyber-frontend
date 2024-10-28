import React from "react"
import styles from './Footer.module.scss'
import Image from "next/image"
import Menu from "./Menu"
import { footerLogos } from "@/utils/data"

interface IFooterProps { }

export default function Footer({ }: IFooterProps) {

    return (
        <footer className={styles.root}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <Image src={"/cyber-white.png"} alt="logo" width={65} height={22} />
                    <h2>We are a residential interior design firm <br className="block " /> located in Portland. Our boutique-studio offers  <br className="block" />  more than</h2>
                </div>
                <Menu styles={styles} />
            </div>
            <div className={styles.logos}>
                {footerLogos.map((el, i) =>
                    <React.Fragment key={i}>
                        {el.logo}
                    </React.Fragment>
                )}
            </div>
        </footer>
    )

}
