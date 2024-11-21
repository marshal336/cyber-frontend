import React from 'react'
import AuthForm from '@/components/AuthForm'

export default function Auth() {
    return (
        <div className="flex justify-center my-10 ">
            <AuthForm className='sm:w-[600px] w-[300px]' />
        </div>
    )
}