"use client"
import React from 'react'
import { Container } from '@/components'
import { useQuery } from '@tanstack/react-query'
import { User } from '@/services/api/user'
import { useRouter } from 'next/navigation'
import { TOKENS } from '@/utils'
import Cookies from 'js-cookie'


export default function Profile() {
    const { push } = useRouter()
    const accessToken = Cookies.get(TOKENS.ACCESS_TOKEN)

    const { data } = useQuery({
        queryKey: ['profile'],
        queryFn: () => User.profile(),
    })
    React.useEffect(() => {
        if (!data && !accessToken) {
            push('/auth')
        }
    }, [data, accessToken])

    if (!data) return

    return (
        <div className="">
            <Container className='flex flex-col gap-3'>
                <div className="">{data.id}</div>
                <div className="">{data.fullName}</div>
                <div className="">{data.role}</div>
                <div className="">{data.createdAt}</div>
                <div className="">{data.updatedAt}</div>
            </Container>
        </div>
    )

}