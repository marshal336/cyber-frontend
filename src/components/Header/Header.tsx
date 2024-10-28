"use client"
import React from "react"
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from 'next/link';
import MobileMenu from "./MobileMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { headerLinks } from "../../utils/data";
import { CartDrawer, Container, CustomInput } from "..";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { useProductsStore } from "@/services/store/product/product";
import { time } from "console";
import HeaderInput from "./HeaderInput";
import { useInputSearchStore } from "@/services/store/product/input-search";


interface IHeaderProps { }

export default function Header({ }: IHeaderProps) {
    const [input, setInput] = React.useState("");
    const [focus, setFocus] = React.useState(false);
    const findAllProductsByNames = useInputSearchStore(state => state.findAllProductsByNames)
    const items = useInputSearchStore(state => state.items)


    React.useEffect(() => {
        findAllProductsByNames(input)
    }, [input])

    return (
        <header className={styles.root}>
            <Container className={styles.container}>

                <Link href={'/'}>
                    <Image src={"/cyber.svg"} alt="logo" width={65} height={22} />
                </Link>

                <HeaderInput
                    input={input}
                    items={items.slice(0, 5)}
                    setInput={setInput}
                    focus={focus}
                    setFocus={setFocus}
                />
                {focus && <div className="absolute inset-0 z-10 bg-black/50" />}
                <div className={styles.menu}>
                    <div className={styles.links}>
                        {headerLinks.map((el, i) => (
                            <Link key={i} href={el.link}>{el.title}</Link>
                        ))}
                    </div>
                    <div className={styles.icons}>
                        {/**
                         * Favirite modal!!!!!!!!!!!!!!!!!!
                         */}
                        <Link href={'/'}>
                            <CiHeart />
                        </Link>

                        <CartDrawer>
                            <CiShoppingCart className="text-[28px]" />
                        </CartDrawer>

                        <Link href={'/'}>
                            <CiUser />
                        </Link>
                    </div>
                </div>

                <div className={styles.mobileMenu}>
                    <MobileMenu
                        headerLinks={headerLinks}
                        children={<RxHamburgerMenu className={styles.burger} />} />
                </div>
            </Container>
        </header >
    );
}