import { IFilters, IProductItemInfoScreenType } from "@/types"
import { instance } from "../instance"
import { PAGES_DASHBOARD } from "@/utils"


export const Filters = {
    getFilters: async () => {
        const { data } = await instance.get<IFilters>(PAGES_DASHBOARD.FILTERS)
        return data
    }
}