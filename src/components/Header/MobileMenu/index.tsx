import Link from "next/link"
import React from "react"
import styles from './MobileMenu.module.scss'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui"
import { headerLinks } from "@/utils/data"
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci"
import CartDrawer from "@/components/CartDrawer/CartDrawer"

interface IDropProps {
    headerLinks: typeof headerLinks
}
export default function MobileMenu({ headerLinks, children }: React.PropsWithChildren<IDropProps>) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none" >
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className={styles.root}>
                <DropdownMenuLabel className={styles.label}>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className={styles.separator} />
                <DropdownMenuItem className={styles.links}>
                    {headerLinks.map((el, i) => (
                        <Link href={el.link} className="flex items-center gap-3" key={i}>
                            <p className={styles.logo}>{el.logo}</p>
                            <h2 className={styles.title}>{el.title}</h2>
                        </Link>
                    ))}
                </DropdownMenuItem>
                <DropdownMenuSeparator className={styles.separator} />

                <div className={'flex flex-col'}>
                    <DropdownMenuItem className={styles.links}>
                        <Link href={'/'} className="flex items-center gap-3">
                            <CiHeart className={styles.logo} />
                            <p className={styles.title}>Favofite</p>
                        </Link>
                    </DropdownMenuItem>

                    <CartDrawer >
                        <div className="flex items-center gap-3 ml-[8px]">
                            <CiShoppingCart className={'text-3xl'} />
                            <p className={'text-2xl cursor-pointer'}>Cart</p>
                        </div>
                    </CartDrawer>

                    <DropdownMenuItem>
                        <Link href={'/'} className="flex items-center gap-3">
                            <CiUser className={'text-3xl'} />
                            <p className={'text-2xl cursor-pointer'}>Profile</p>
                        </Link>
                    </DropdownMenuItem>

                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}