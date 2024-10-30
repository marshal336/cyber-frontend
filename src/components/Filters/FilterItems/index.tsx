"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import FiltersItemsSelect from './FiltersItemsSelect'
import Cart from '../../Cart/Cart'
import { IProduct } from '@/types'
import { CustomPagination } from './Pagination'
import { useProductsStore } from '@/services/store/product/products'
import { FaSpinner } from "react-icons/fa6";

interface IFilterItemsProps {
    className?: string
    itemsLength: number
    items: IProduct[]
    setSelect?: (select: string) => void
}

export default function FilterItems({ ...data }: IFilterItemsProps) {
    const { loading } = useProductsStore(state => state)

    if (loading) {
        return (
            <div className="w-full flex items-center justify-center">
                <FaSpinner className='animate-spin text-center text-7xl' />
            </div>
        )
    }
    return (
        <div className={cn(data.className, 'flex flex-col gap-6')}>
            <div className="flex gap-3 items-center max-lg:flex-col max-lg:items-start">
                <h2>Selected Products: <span className='font-bold'>{data.itemsLength}</span></h2>
                <FiltersItemsSelect
                    setSelect={select => data.setSelect?.(select)}
                    className='w-[256px]'
                    children={'Sort By'}
                    items={['Name', 'New', "Best Seller"]} />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex lg:justify-start gap-4 justify-center flex-wrap">
                    {(data.items.length <= 0 && loading) ? (
                        <div className='w-full text-center text-3xl'>
                            No items :(
                        </div>
                    ) : (
                        <>
                            {data.items.map(item => (
                                <Cart
                                    memory={item.productItemInfo[0].memory[0].title}
                                    color={item.productItemInfo[0].colors[0].title}
                                    key={item.id}
                                    defaultImage={item.defaultImage}
                                    categoryTitle={item.category.title}
                                    id={item.id}
                                    price={item.productItemInfo[0].price}
                                    title={item.title}
                                />
                            ))}
                        </>
                    )}
                </div>
                {data.items.length > 0 && (
                    <CustomPagination />
                )}
            </div>
        </div>
    )

}