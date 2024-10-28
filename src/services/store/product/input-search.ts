import { Products } from "@/services/api"
import { IProduct } from "@/types"
import { create } from "zustand"


interface IInputProduct {
    items: IProduct[],
    loading: boolean
    error: boolean
    findAllProductsByNames: (title: string) => Promise<void>
}
export const useInputSearchStore = create<IInputProduct>((set, get) => ({
    items: [],
    error: false,
    loading: false,
    findAllProductsByNames: async (title: string) => {
        try {
            set({ error: false, loading: true })
            const data = await Products.findAllProductsByNames(title)
            set({ items: data })
        } catch (error) {
            console.log('getAllProducts', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    },
}))