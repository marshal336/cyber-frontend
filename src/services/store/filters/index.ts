import { Filters } from "@/services/api/filters";
import { IUseFiltersState } from "@/types";
import { create } from "zustand";

export const useFiltersStore = create<IUseFiltersState>((set, get) => ({
    items: {
        brands: [],
        memorys: [],
        screenType: []
    },
    error: false,
    loading: false,
    total: 0,
    getFilters: async () => {
        try {
            set({ error: false, loading: true })
            const data = await Filters.getFilters()
            set({ items: data })
        } catch (error) {
            console.log('getFilters', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    }
}))