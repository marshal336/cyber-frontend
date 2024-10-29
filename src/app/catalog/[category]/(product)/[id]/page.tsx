import React from 'react'
import Images from '@/components/product-page/Images'
import { Container } from '@/components'
import { InfoProductPage } from '@/components/product-page'
import { instance } from '@/services/api/instance'
import { IProduct } from '@/types'

async function getItem(id: number) {
    try {
        const { data } = await instance.get<IProduct>(`/products/${id}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export default async function Product({ params }: { params: { id: string } }) {
    const id = params.id.replace(/-/g, ' ').split(' ').pop()
    const data = await getItem(Number(id))

    if (!data) return

    return (
        <div className="max-w-[1440px] mx-auto px-4 py-4">
            <Container>
                <div className="md:py-[50px] py-[40px] flex lg:flex-row flex-col xl:gap-12 gap-4 justify-around items-center xl:justify-center">
                    <Images logos={data.productItemInfo[0].imagesUrl[0].imgUrl} />
                    <InfoProductPage {...data} />
                </div>
            </Container>
        </div>
    )

}