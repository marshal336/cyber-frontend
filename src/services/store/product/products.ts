import { SearchParams } from '@/hooks'
import { Products } from '@/services/api'
import { IUseProductState } from '@/types/product-types'
import { create } from 'zustand'

export const useProductsStore = create<IUseProductState>((set, get) => ({
    items: [],
    error: false,
    loading: false,
    total: 0,
    getAllProducts: async () => {
        try {
            set({ error: false, loading: true })
            const data = await Products.getAllProducts()
            set({ items: data })
        } catch (error) {
            console.log('getAllProducts', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    },
    getByNewArrival: async () => {
        try {
            set({ error: false, loading: true })
            const data = await Products.getByNewArrival()
            set({ items: data })
        } catch (error) {
            console.log('getByNewArrival', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    },
    getByBestSeller: async () => {
        try {
            set({ error: false, loading: true })
            const data = await Products.getByBestSeller()
            set({ items: data })
        } catch (error) {
            console.log('getByBestSeller', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    },
    getByCategory: async (categoryName: string) => {
        try {
            set({ error: false, loading: true })
            const data = await Products.getByCategory(categoryName)
            set({ items: data })
        } catch (error) {
            console.log('categoryName', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    },
    getBySearchParams: async (searchParams: Partial<SearchParams>,) => {
        try {
            set({ error: false, loading: true })
            const data = await Products.getBySearchParams(searchParams)
            set({ items: data })
        } catch (error) {
            console.log('categoryName', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    },
}))