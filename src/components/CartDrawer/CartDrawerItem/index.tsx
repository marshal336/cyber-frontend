import React from 'react'
import styles from './CartDrawerItems.module.scss'
import { CiTrash } from 'react-icons/ci';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface ICartDrawerItemProps {
    className?: string
    img: string;
    name: string;
    price: number;
    quantity: number;
    memory: string;
    memoryPrice: number;
    setType?: (type: 'plus' | 'minus') => void
    onDelete?: () => void
}

export default function CartDrawerItem({ ...data }: ICartDrawerItemProps) {

    return (
        <div className={cn(styles.cartItem, data.className)}>
            <div className={styles.cartImage}>
                <img src={data.img} />
            </div>

            <div className={styles.cartElements}>
                <div className={styles.cartInfo}>
                    <h2>{data.name} {data.memory}</h2>
                </div>

                <div className={styles.cartAddition}>
                    <div className={styles.cartCount}>
                        <Button onClick={() => data.setType?.('minus')}>-</Button>
                        <span>{data.quantity}</span>
                        <Button onClick={() => data.setType?.('plus')}>+</Button>
                    </div>
                    <div className={styles.cartPrice}>
                        <h3>${data.price + data.memoryPrice}</h3>
                    </div>
                    <CiTrash
                        onClick={() => data.onDelete?.()}
                        className='text-xl cursor-pointer' />
                </div>
            </div>
        </div>
    )

}