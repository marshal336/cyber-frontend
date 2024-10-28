import { IUsePaginationState } from "@/types";
import { useSearchParams } from "next/navigation";
import { create } from "zustand";



export const usePaginationStore = create<IUsePaginationState>((set, get) => ({
    page: 1,
    start: 0,
    setPage: (page) => set({ page }),
    setStart: (s) => {
        const start = (s - 1) * 8
        set({ start, page: s })
    },
}))