"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import FiltersItemsSelect from './FiltersItemsSelect'
import Cart from '../../Cart/Cart'
import { IProduct } from '@/types'
import { CustomPagination } from './Pagination'

interface IFilterItemsProps {
    className?: string
    itemsLength: number
    items: IProduct[]
    paginationItems: number[]
    per_page: number
    setSelect?: (select: string) => void
}

export default function FilterItems({ ...data }: IFilterItemsProps) {

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
                <div className="flex lg:justify-start gap-1 justify-center flex-wrap">
                    {data.items.map(item => (
                        <Cart
                            key={item.id}
                            defaultImage={item.defaultImage}
                            categoryTitle={item.category.title}
                            id={item.id}
                            price={item.productItemInfo[0].price}
                            title={item.title}
                        />
                    ))}
                </div>
                <CustomPagination
                    items={data.paginationItems}
                    per_page={data.per_page}
                />
            </div>
        </div>
    )

}