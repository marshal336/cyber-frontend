import React from 'react'
import { productPageDeliveryLinks as links } from '@/utils/data'
import styles from './Delivery.module.scss'

interface IDeliveryProps {
}

export default function Delivery({ }: IDeliveryProps) {

    return (
        <div className={styles.delivery}>
            {links.map(({ item, subTitle, title }, i) => (
                <div className={styles.deliveryItem} key={i}>
                    {item}
                    <p>
                        <span>{title}</span>
                        <span>{subTitle}</span>
                    </p>
                </div>
            ))}
        </div>
    )

}