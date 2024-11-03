import { IProductItemInfo } from "./product-types"

export interface ICart {
    id: string
    total: number
    userId: string
    createdAt: string
    updatedAt: string
    cartItems: ICartItem[]
}

export interface ICartItem {
    id: string
    quantity: number
    productItemInfoId: number
    cartId: string
    createdAt: string
    updatedAt: string
    productItemInfo: Omit<IProductItemInfo, 'colors' | 'brand' | 'screenType' | 'imagesUrl'>
}

export interface IUseCartState {
    cart: ICart | null,
    loading: boolean
    error: boolean,
    getCart: () => Promise<void>
    remove: (cartItemId: string) => Promise<void>
    create: (productInfoId: number) => Promise<void>
    plusOrMinus: (values: {
        type: 'plus' | 'minus';
        cartItemId: string;
    }) => Promise<void>
}