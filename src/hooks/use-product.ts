import { useProductsStore } from "@/services/store/product/product"
import { Variant } from "@/utils"
import React from "react"

export function useProduct(key: Variant['value']) {
    const getAllProducts = useProductsStore(state => state.getAllProducts)
    const getByNewArrival = useProductsStore(state => state.getByNewArrival)
    const getByBestSeller = useProductsStore(state => state.getByBestSeller)
    const items = useProductsStore(state => state.items)

    const actions = {
        all: getAllProducts,
        'new-arrival': getByNewArrival,
        'best-seller': getByBestSeller,
        'discount': () => { },
    };
    const action = actions[key];

    React.useEffect(() => {
        if (action) {
            action();
        }
    }, [key])

    return {
        items
    }
}