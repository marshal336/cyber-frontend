import { Checkbox } from '@/components/ui';
import React from 'react';

export interface FilterChecboxProps {
    text: string;
    value: string;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
    name?: string
    itemsLength?: number
}

export default function FilterChecbox({
    text,
    value,
    onCheckedChange,
    checked,
    name,
    itemsLength
}: FilterChecboxProps) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded-[3px] w-4 h-4 border-gray-300"
                id={`checkbox-${String(value)}-${String(name)}`}
            />
            <label htmlFor={`checkbox-${String(value)}-${String(name)}`} className="leading-none cursor-pointer flex-1">
                {text} {itemsLength}
            </label>
        </div>
    );
};
