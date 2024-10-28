import { IProductItemInfoBrand, IProductItemInfoMemorys, IProductItemInfoScreenType } from "./product-types"


export interface IFilters {
    brands: IProductItemInfoBrand[]
    memorys: IProductItemInfoMemorys[]
    screenType: IProductItemInfoScreenType[]
}

export interface IUseFiltersState {
    items: IFilters,
    loading: boolean
    error: boolean
    getFilters: () => Promise<void>
}