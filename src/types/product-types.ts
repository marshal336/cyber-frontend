import { SearchParams } from "@/hooks"

export interface DefaultProduct {
    id: number
    title: string
    bestSeller: number
    categoryId: number
    colorId: number
    discount: number
    defaultImage: string
    createdAt: string
    updatedAt: string
    colors: IProductItemInfoColors[]
    memory: IProductItemInfoMemorys[]
    category: IProductCategory
}
export interface IProduct extends DefaultProduct {
    productItemInfo: IProductItemInfo[]
}
export interface IProductItemInfoColors {
    id: number
    color: string
    title: string
    createdAt: string
    updatedAt: string
}
export interface IProductCategory {
    id: number
    title: string
    createdAt: string
    updatedAt: string
}
export interface IProductItemInfoBrand {
    id: number
    title: string
    createdAt: string
    updatedAt: string
}

export interface IProductItemInfoImages {
    id: number
    imgUrl: string[]
    createdAt: string
    updatedAt: string
}
export interface IProductItemInfoMemorys {
    id: number
    title: string
    price: number
    createdAt: string
    updatedAt: string
}
export interface IProductItemInfoScreenType {
    id: number
    title: string
    createdAt: string
    updatedAt: string
}
export interface IProductItemInfo {
    id: number
    screenSize: string
    CPU: string
    cores: number
    mainCamera: string
    frontCamera: string
    battery: number
    screenTypeId: number
    brandId: number
    productId: number
    price: number
    totalPrice: number
    description: string
    screenResolution: string
    createdAt: string
    updatedAt: string
    colors: IProductItemInfoColors[]
    memory: IProductItemInfoMemorys[]
    brand: IProductItemInfoBrand
    imagesUrl: IProductItemInfoImages[]
    product: IProduct
    screenType: IProductItemInfoScreenType
}

export interface IFindByArgs {
    title: string
    memory: string
    color: string
}

export interface IUseProductState {
    items: IProduct[],
    loading: boolean
    error: boolean
    total: number
    getBySearchParams: (searchParams: Partial<SearchParams>) => Promise<void>
    getByCategory: (categoryName: string) => Promise<void>
    updateItemQuantity: (id: number, quantity: number) => Promise<void>
    addCartItem: (id: number) => Promise<void>
    removeCartItem: (id: number) => Promise<void>
    getByNewArrival: () => Promise<void>
    getByBestSeller: () => Promise<void>
    getAllProducts: () => Promise<void>
}