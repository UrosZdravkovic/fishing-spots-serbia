import { useState } from 'react';
import { Waves, ChevronDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import type { WaterType } from '@/data/fishingSpots';
import type { WaterTypeFilter } from './types';

const WATER_TYPES: { value: WaterType; label: string }[] = [
    { value: 'Reka', label: 'Reka' },
    { value: 'Jezero', label: 'Jezero' },
    { value: 'Akumulacija', label: 'Akumulacija' },
    { value: 'Bara', label: 'Bara' },
    { value: 'Kanal', label: 'Kanal' },
];

type WaterTypeSelectProps = {
    value: WaterTypeFilter;
    onChange: (value: WaterTypeFilter) => void;
};

export default function WaterTypeSelect({ value, onChange }: WaterTypeSelectProps) {
    const [open, setOpen] = useState(false);
    const isAllSelected = value === null;

    const handleCheckboxChange = (type: WaterType, checked: boolean) => {
        if (isAllSelected) {
            onChange([type]);
        } else if (checked) {
            const newValue = [...value, type];
            onChange(newValue.length === WATER_TYPES.length ? null : newValue);
        } else {
            const newValue = value.filter((t) => t !== type);
            onChange(newValue.length === 0 ? null : newValue);
        }
    };

    const isChecked = (type: WaterType) => {
        return isAllSelected || value.includes(type);
    };

    const getDisplayText = () => {
        if (isAllSelected) return 'Sve';
        if (value.length === 1) return value[0];
        return `${value.length} izabrano`;
    };

    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <Waves className="w-4 h-4 text-primary" />
                <span>Tip vode:</span>
            </div>

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="min-w-35 justify-between font-normal"
                    >
                        {getDisplayText()}
                        <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-45 p-2 bg-bg-secondary" align="start">
                    <div className="flex flex-col gap-1">
                        {WATER_TYPES.map((type) => (
                            <label
                                key={type.value}
                                className="flex items-center gap-2 cursor-pointer rounded-md px-2 py-1.5 hover:bg-gray-100 text-sm"
                            >
                                <Checkbox
                                    checked={isChecked(type.value)}
                                    onCheckedChange={(checked) =>
                                        handleCheckboxChange(type.value, checked === true)
                                    }
                                />
                                <span>{type.label}</span>
                            </label>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
