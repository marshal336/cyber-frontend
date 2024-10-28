'use client'
import React from 'react';
import styles from './Tabs.module.scss'
import Cart from '@/components/Cart/Cart';
import TabsTriggerItem from './TabsTriggerItem';
import { TabsList, TabsTrigger, TabsContent, Tabs } from "@/components/ui";
import { cn } from '@/lib/utils';
import { TabsContentItem } from './TabsContentItem';
import { useProduct } from '@/hooks';
import { Values, Variant } from '@/utils';



export default function Tab() {
    const [key, setKey] = React.useState<Variant['value']>('new-arrival')
    const { items } = useProduct(key)

    return (
        <Tabs defaultValue={Values[0].name} className={styles.tab}>
            <TabsList className={styles.tabsList}>
                {Values.map(item => (
                    <TabsTriggerItem
                        key={item.name}
                        name={item.name}
                        value={item.value}
                        className={cn(styles.tabsTrigger, styles.valid, key === item.value && styles.inValid)}
                        onClick={type => setKey(type)}
                    />
                ))}
            </TabsList>
            {Values.map(item => (
                <TabsContentItem value={item.name} className='flex lg:justify-between justify-center flex-wrap gap-4'>
                    {items.slice(0, 4).map(item => (
                        <Cart
                            key={item.id}
                            id={item.id}
                            defaultImage={item.defaultImage}
                            price={item.productItemInfo[0].price}
                            title={item.title}
                            categoryTitle={item.category.title}
                            bestSeller={key === 'best-seller' ? item.bestSeller : undefined}
                        />
                    ))}
                </TabsContentItem>
            ))}
        </Tabs>
    )
}