import { ICart } from "@/types"
import { axiosAuth } from "../instance"


export const Cart = {
    getCart: async () => {
        const { data } = await axiosAuth.get<ICart>('/cart')
        return data
    },
    plusOrMinus: async (values: { type: 'plus' | 'minus', cartItemId: string }) => {
        const { data } = await axiosAuth.put<ICart>('/cart/minus|plus', values)
        return data
    },
    remove: async (cartItemId: string) => {
        const { data } = await axiosAuth.delete<ICart>('/cart', { data: { cartItemId } })
        return data
    },
    create: async (productInfoId: number) => {
        const { data } = await axiosAuth.post<ICart>('/cart', { productInfoId })
        return data
    }
}