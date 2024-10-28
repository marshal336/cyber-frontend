

export interface IUsePaginationState {
    page: number
    start: number
    end: number
    per_page: number
    setPage: (page: number) => void
}