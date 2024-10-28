import React from "react"
import styles from './Tehnology.module.scss'
import Image from "next/image"
import { Button } from "../ui/button"

interface ITehnologyProps {

}
export default function Tehnology({ }: ITehnologyProps) {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.colOne}>
                    <Image src={'/PlayStation.png'} alt="playstation" width={360} height={343} />
                    <div className={styles.info}>
                        <h1>Playstation 5</h1>
                        <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated <br />  I/O will redefine your PlayStation <br /> experience.</p>
                    </div>
                </div>

                <div className={styles.colTwo}>
                    <Image src={'/Bads.png'} alt="Bads" width={104} height={272} />
                    <div className={styles.info}>
                        <h1>Apple <br /> AirPods <br /> <span>Max</span></h1>
                        <p>Computational <br /> audio. <br /> Listen,<br />  it&apos;s powerful</p>
                    </div>
                </div>
                <div className={styles.colThree} >
                    <Image src={'/VR.png'} alt="VR" width={136} height={190} />
                    <div className={styles.info}>
                        <h1>Apple <br /> Vision <span>Pro</span></h1>
                        <p>An immersive <br /> way to <br /> experience <br /> entertainment</p>
                    </div>
                </div>
                <div className={styles.colFour}>
                    <div className={styles.info}>
                        <h1>Macbook <br /> <span>Air</span></h1>
                        <p>The new 15‑inch MacBook Air makes <br /> room for more <br />  of what you love with a spacious Liquid <br />  Retina display.</p>
                        <Button variant={'ghost'} size={'lg'} >Shop Now</Button>
                    </div>
                    <div className={styles.img}>
                        <Image src={'/MacBook.png'} alt="MacBook" width={659} height={459} />
                    </div>
                </div>
            </div>
        </div>
    )

}