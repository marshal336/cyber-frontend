"use client"
import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
interface IQueryProviderProps {
    className?: string
}
export default function QueryProvider({ className, children }: React.PropsWithChildren<IQueryProviderProps>) {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )

}