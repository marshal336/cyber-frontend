"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { CustomInput } from '@/components'
import { IProduct } from '@/types'
import Link from 'next/link'
import { useClickAway } from 'react-use'
import { validPath } from '@/utils'

interface IHeaderInputProps {
    input: string,
    focus?: boolean,
    className?: string
    items: IProduct[]
    setInput: (input: string) => void
    setFocus?: (focus: boolean) => void
}
export default function HeaderInput({
    input,
    className,
    focus,
    setInput,
    setFocus,
    items
}: IHeaderInputProps) {
    const ref = React.useRef(null)
    useClickAway(ref, () => {
        setFocus?.(false)
    })
    console.log(items);

    return (
        <>

            {focus && <div className="absolute !inset-0 z-10 bg-black/50 " />}
            <div ref={ref} className="w-full z-20 flex-1 relative border rounded-lg">
                <CustomInput
                    focus={focus}
                    input={input}
                    setFocus={setFocus}
                    setInput={setInput}
                    className="h-[56px] rounded-md"
                />
                {items.length > 0 &&
                    <div className={cn("absolute flex py-4 flex-col gap-4 w-full bg-white top-[110%] sm:h-[300px] h-[200px] z-20 transition-all invisible opacity-0 overflow-y-auto overflow-x-hidden duration-300 rounded-md left-0 -translate-y-1",
                        focus && 'translate-y-0 opacity-100 visible'
                    )}>
                        {items.map(item => (
                            <Link
                                onClick={() => setFocus?.(false)}
                                key={item.id}
                                href={`${validPath(item.category.title, item.title, item.memory[0].title, item.colors[0].title)}`}
                                className="flex px-5 justify-between items-center hover:scale-[1.01] py-3 transition-all">
                                <div className="flex gap-4 items-center">
                                    <div className="sm:w-10 sm:h-10 h-6 w-6">
                                        <img src={item.defaultImage} alt="logo" />
                                    </div>
                                    <h2 className={cn("font-bold sm:text-base text-xs",)}>{item.title}</h2>
                                </div>
                                <span className='sm:text-base text-xs hidden xls:block'>{item.productItemInfo[0].price} $</span>
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </>
    )

}