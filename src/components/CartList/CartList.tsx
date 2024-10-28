"use client"
import Container from '../Container/Container'
import Discount from './Discount/Discount'
import Tabs from './Tabs/Tabs'

interface ICartListProps {
    isValidTab?: boolean
    isValidDiscount?: boolean
}


export default function CartList({ isValidTab, isValidDiscount }: ICartListProps) {

    return (
        <Container className='p-4'>
            {isValidTab && <Tabs />}
            {/* {isValidDiscount && <Discount items={items} />} */}
        </Container>

    )

}