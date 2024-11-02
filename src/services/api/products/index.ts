import { IProduct } from "@/types";
import { axiosClassic } from "../instance";
import { PAGES_DASHBOARD } from "@/utils";
import { SearchParams } from "@/hooks";

export const Products = {
    getAllProducts: async () => {
        const { data } = await axiosClassic.get<IProduct[]>(PAGES_DASHBOARD.PRODUCT)
        return data
    },
    findAllProductsByNames: async (title: string) => {
        const { data } = await axiosClassic.get<IProduct[]>(`${PAGES_DASHBOARD.PRODUCT}/by-title`, { params: { title } })
        return data
    },
    getByNewArrival: async () => {
        const { data } = await axiosClassic.get<IProduct[]>(`${PAGES_DASHBOARD.PRODUCT}/new-arrival`)
        return data
    },
    getByBestSeller: async () => {
        const { data } = await axiosClassic.get<IProduct[]>(`${PAGES_DASHBOARD.PRODUCT}/best-seller`)
        return data
    },
    getByCategory: async (categoryName: string) => {
        const { data } = await axiosClassic.get<IProduct[]>(`${PAGES_DASHBOARD.PRODUCT}/category/${categoryName}`)
        return data
    },
    getBySearchParams: async (searchParams: Partial<SearchParams>) => {
        const { data } = await axiosClassic.get<IProduct[]>(`${PAGES_DASHBOARD.FIND_BY}`, { params: { ...searchParams } })
        return data
    }
}
