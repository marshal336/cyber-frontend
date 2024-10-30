import React from 'react'
import styles from './Characteristics.module.scss'

interface ICharacteristicsProps {
    logo: React.JSX.Element
    title: string
    value: React.ReactNode
}

export default function Characteristics({ ...data }: ICharacteristicsProps) {

    return (
        <div className={styles.characteristicsItem}>
            {data.logo}
            <p>
                <span>{data.title}</span>
                <span>{data.value}</span>
            </p>
        </div>
    )

}