'use client'
import React, { Children } from 'react'
import { cn } from '@/lib/utils'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui'
import Link from 'next/link'
import Container from '../Container/Container'
import { usePathname } from 'next/navigation'

interface IBreadcrumbLinksProps {
    className?: string
}

export default function BreadcrumbLinks({ className }: IBreadcrumbLinksProps) {
    const paths = usePathname();
    const pathNames = paths.split('/').filter((path) => path);
    const pathItems = pathNames
        .map((path, i) => ({
            name: path,
            path: pathNames.slice(0, i + 1).join('/'),
        }));

    return (
        <Container className={cn(className, 'justify-start lg:flex hidden py-10 px-4 ')}>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-gray-400' href={'/'}>Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {pathItems.map((item) => (
                        <React.Fragment key={item.name}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {item.name === 'catalog' ? (
                                    <span className='text-gray-400'>
                                        {item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}</span>
                                ) : (
                                    <BreadcrumbLink>
                                        <Link
                                            className={pathItems[pathItems.length - 1].name === item.name ? 'text-black' : 'text-gray-400'}
                                            href={`/${item.path}`}>
                                            {item.name.toLowerCase()}
                                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb >
        </Container >
    )

}