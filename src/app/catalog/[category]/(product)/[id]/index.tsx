"use client"
import React from "react"
import styles from './Post.module.scss'
import { Comments, Details, Info, Logos, Reviews, } from "./utils";
import { Button } from "@/components/ui";
import { IoIosArrowDown } from "react-icons/io";
import { Input } from "@/components/ui";
import { Container } from "@/components";

interface IPageProps { id?: string }

const logos = [
    'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1b_7.jpg',
    'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1b_7.jpg',
    'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1b_7.jpg',
    'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1b_7.jpg',
]

export default function Page({ id }: IPageProps) {
    const [index, setIndex] = React.useState(0)
    const [memory, setMemory] = React.useState(0)
    const [input, setInput] = React.useState(50)
    const [price, setPrice] = React.useState(0)
    const [color, setColor] = React.useState(0)
    const [more, setMore] = React.useState(false)
    const [comment, setComment] = React.useState(false)

    return (
        <div className={styles.root}>
            <Container>
                <div className={styles.main}>
                    <Logos logos={logos} index={index} setIndex={setIndex} styles={styles} />
                    <Info
                        descriprion="sdsdsds"
                        Battery={3}
                        FrontCamera={'3'}
                        MainCamera={'3'}
                        cpu={'3'}
                        screenSize={'3'}
                        memorys={[2]}
                        colors={["#000", '#0CDA', '#2afd']}
                        title={'dd'}
                        styles={styles}
                        memory={memory}
                        color={color}
                        price={2}
                        setPrice={setPrice}
                        setMemory={setMemory}
                        setColor={setColor} />
                </div>
                <Details
                    screenSize={'dddddd'}
                    description={'dddddd'}
                    screenResolution={'dddddd'}
                    screenType={'dddddd'}
                    styles={styles} />
                <Button
                    variant={'outline'}
                    size={'lg'}
                    className={styles.button}
                    onClick={() => setMore(!more)}>
                    <p>View More</p>
                    <IoIosArrowDown />
                </Button>
                {more && <Details
                    styles={styles}
                    screenSize={"dsd"}
                    description={"dsd"}
                    screenResolution={"dsd"}
                    screenType={"dsd"} />}
                <Reviews input={input} styles={styles} />
                <Input placeholder="Leave Comment" className="h-[64px]" />
                <Comments styles={styles} />
                <Comments styles={styles} />
                <Comments styles={styles} />
                {comment && (
                    <>
                        <Comments styles={styles} />
                        <Comments styles={styles} />
                        <Comments styles={styles} /></>
                )}
                <Button
                    variant={'outline'}
                    size={'lg'}
                    className={styles.button}
                    onClick={() => setComment(!comment)}>
                    <p>View More</p>
                    <IoIosArrowDown className={`${comment && 'rotate-180'}`} />
                </Button>
                <div className={styles.related}>
                    <h3 className={styles.h3}>Related Products</h3>
                    <div className={styles.cards}>
                    </div>
                </div>
            </Container>
        </div>
    )

}

