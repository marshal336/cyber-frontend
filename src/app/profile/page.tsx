"use client"
import React from 'react'
import { Container } from '@/components'
import { useMutation, useQuery } from '@tanstack/react-query'
import { User } from '@/services/api/user'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui'
import { PAGES_DASHBOARD } from '@/utils'


export default function Profile() {
    const { push } = useRouter()

    const { data, isLoading, error, } = useQuery({
        queryKey: ['profile'],
        queryFn: () => User.profile(),
    })
    const { mutate } = useMutation({
        mutationKey: ['profile'],
        mutationFn: () => User.logout(),
    })

    React.useEffect(() => {
        if (!data && !isLoading && error) {
            push('/auth')
        }
    }, [data, isLoading, error])

    function logout() {
        mutate()
        push(PAGES_DASHBOARD.HOME)
    }

    if (!data) return

    return (
        <div className="">
            <Container className='flex flex-col gap-3 px-4'>
                <div className="">{data.id}</div>
                <div className="">{data.fullName}</div>
                <div className="">{data.role}</div>
                <div className="">{data.createdAt}</div>
                <div className="">{data.updatedAt}</div>
                <Button onClick={logout} className='w-[200px]'>logOut</Button>
            </Container>
        </div>
    )

}