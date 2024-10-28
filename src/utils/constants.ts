
export const excludedPaths = ['headphones', 'camera', 'watches']

export type Variant = {
    name: string
    value: 'all' | 'new-arrival' | 'best-seller' | 'discount'
}

export const Values: Variant[] = [
    {
        name: 'New Arrival',
        value: 'new-arrival'
    },
    {
        name: 'Bestseller',
        value: 'best-seller'
    },
]