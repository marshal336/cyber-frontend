
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

export function validPath(
    categoryTitle: string,
    productTitle: string,
    memory: string,
    color: string,
) {
    return `/catalog/${categoryTitle.toLowerCase()}/${productTitle.toLowerCase().replace(/\s+/g, '-')}-memory-${memory.toLowerCase()}-color-${color.toLowerCase()}`
}

export function parseName(fullName: string) {
    const parts = fullName.split('-');
    const body = {
        title: parts.slice(1, -5).join(' '),
        memory: parts[parts.length - 3].toUpperCase(),
        color: parts[parts.length - 1],
    };
    return body
}