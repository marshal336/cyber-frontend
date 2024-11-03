"use client"
import React from "react"
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from 'next/link';
import MobileMenu from "./MobileMenu";
import HeaderInput from "./HeaderInput";
import { RxHamburgerMenu } from "react-icons/rx";
import { headerLinks } from "../../utils/data";
import { CartDrawer, Container, CustomInput } from "..";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { useInputSearchStore } from "@/services/store/product/input-search";
import { PAGES_DASHBOARD } from "@/utils";
import { useCartStore } from "@/services/store/cart";


interface IHeaderProps {
    isValidProfileIcon?: boolean
    isValidCartIcon?: boolean
}

export default function Header({
    isValidProfileIcon = true,
    isValidCartIcon = true
}: IHeaderProps) {
    const [input, setInput] = React.useState("");
    const [focus, setFocus] = React.useState(false);
    const { findAllProductsByNames } = useInputSearchStore(state => state)
    const { items } = useInputSearchStore(state => state)
    const { cart } = useCartStore(state => state)

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

                        {isValidCartIcon && (
                            <CartDrawer>
                                <div className="relative">
                                    <CiShoppingCart className="text-[28px]" />
                                    {(cart && cart?.cartItems.length > 0) && (
                                        <p className="absolute top-0 right-0 bg-red-400 rounded-full text-white px-[6px] py-[1px] text-xs ">{cart?.cartItems.length}</p>
                                    )}
                                </div>
                            </CartDrawer>
                        )}

                        {isValidProfileIcon && (
                            <Link href={`/${PAGES_DASHBOARD.PROFILE}`}>
                                <CiUser />
                            </Link>
                        )}
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