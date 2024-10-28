import React from 'react'
import { cn } from '@/lib/utils'

export default function Product({ params }: { params: { id: string } }) {

    return (
        <div>{params.id}</div>
    )

}