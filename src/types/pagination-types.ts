

export interface IUsePaginationState {
    start: number
    page: number
    setStart: (page: number) => void
    setPage: (activePage?: number) => void
}