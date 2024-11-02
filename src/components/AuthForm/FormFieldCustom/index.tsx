import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui'
import { Control } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '@/utils'


interface IFormFieldCustomProps {
    className?: string
    name: keyof typeof formSchema.shape
    control: Control<z.infer<typeof formSchema>>
}

export default function FormFieldCustom({ className, name, control }: IFormFieldCustomProps) {

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='flex flex-col gap-[1px]'>
                    <FormLabel className='capitalize text-xs'>{name}</FormLabel>
                    <FormControl>
                        {name === 'password' ? (
                            <Input className='border border-black h-[46px] !bg-transparent' placeholder='password' type={'password'} {...field} />
                        ) : (
                            <Input className='border border-black h-[46px] !bg-transparent' placeholder={name} {...field} />
                        )}
                    </FormControl>
                    <FormMessage className='text-xs' />
                </FormItem>
            )}
        />
    )

}