import React from 'react'
import Images from '@/components/product-page/Images'
import { Container } from '@/components'
import { InfoProductPage } from '@/components/product-page'
import { axiosClassic } from '@/services/api/instance'
import { IFindByArgs, IProductItemInfo } from '@/types'
import { parseName } from '@/utils'


async function getItem(body: IFindByArgs) {
    try {
        const { data } = await axiosClassic.post<IProductItemInfo>(`/products/`, body)
        return data
    } catch (error) {
        console.log(error);
    }
}

export default async function Product({ params }: { params: { fullName: string } }) {
    const body = parseName(params.fullName)
    const data = await getItem(body)

    if (!data) return

    return (
        <div className="max-w-[1440px] mx-auto px-4 py-4">
            <Container>
                <div className="md:py-[50px] py-[40px] flex lg:flex-row flex-col xl:gap-12 gap-4 justify-around items-center xl:justify-center">
                    <Images logos={data.imagesUrl[0].imgUrl} />
                    <InfoProductPage {...data} />
                </div>
            </Container>
        </div>
    )

}