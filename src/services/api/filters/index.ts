import { IFilters, IProductItemInfoScreenType } from "@/types"
import { axiosClassic } from "../instance"
import { PAGES_DASHBOARD } from "@/utils"


export const Filters = {
    getFilters: async () => {
        const { data } = await axiosClassic.get<IFilters>(PAGES_DASHBOARD.FILTERS)
        return data
    }
}