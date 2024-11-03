import { Cart } from '@/services/api/cart'
import { IUseCartState } from '@/types'
import { create } from 'zustand'

export const useCartStore = create<IUseCartState>((set, get) => ({
    cart: null,
    error: false,
    loading: false,
    getCart: async () => {
        try {
            set({ error: false, loading: true })
            const data = await Cart.getCart()
            set({ cart: data })
        } catch (error) {
            console.log('getCart', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    },
    remove: async (cartItemId) => {
        try {
            set({ error: false, loading: true })
            const data = await Cart.remove(cartItemId)
            set({ cart: data })
        } catch (error) {
            console.log('remove', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    },
    plusOrMinus: async (values) => {
        try {
            set({ error: false, loading: true })
            const data = await Cart.plusOrMinus(values)
            set({ cart: data })
        } catch (error) {
            console.log('plusOrMinus', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    },
    create: async (productInfoId) => {
        try {
            set({ error: false, loading: true })
            const data = await Cart.create(productInfoId)
            set({ cart: data })
        } catch (error) {
            console.log('getCart', error);
            set({ error: true, })
        } finally {
            set({ loading: false })
        }
    }
}))