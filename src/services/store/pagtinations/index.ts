import { IUsePaginationState } from "@/types";
import { create } from "zustand";

export const usePaginationStore = create<IUsePaginationState>((set, get) => ({
    page: 1,
    per_page: 8,
    start: 0,
    end: 0,
    setPage: (page: number) => {
        const { per_page } = get()
        const start = (page - 1) * (per_page)
        const end = start + per_page
        set({ end, start })
    }
}))