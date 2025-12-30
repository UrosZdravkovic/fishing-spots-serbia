import { useState } from 'react';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import type { Season } from '@/data/fishingSpots';
import type { SeasonFilter } from './types';

const SEASONS: { value: Season; label: string }[] = [
    { value: 'Proleće', label: 'Proleće' },
    { value: 'Leto', label: 'Leto' },
    { value: 'Jesen', label: 'Jesen' },
    { value: 'Zima', label: 'Zima' },
];

type SeasonSelectProps = {
    value: SeasonFilter;
    onChange: (value: SeasonFilter) => void;
};

export default function SeasonSelect({ value, onChange }: SeasonSelectProps) {
    const [open, setOpen] = useState(false);
    const isAllSelected = value === null;

    const handleCheckboxChange = (season: Season, checked: boolean) => {
        if (isAllSelected) {
            onChange([season]);
        } else if (checked) {
            const newValue = [...value, season];
            onChange(newValue.length === SEASONS.length ? null : newValue);
        } else {
            const newValue = value.filter((s) => s !== season);
            onChange(newValue.length === 0 ? null : newValue);
        }
    };

    const isChecked = (season: Season) => {
        return isAllSelected || value.includes(season);
    };

    const getDisplayText = () => {
        if (isAllSelected) return 'Sve';
        if (value.length === 1) return value[0];
        return `${value.length} izabrano`;
    };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
        <CalendarDays className="w-4 h-4 text-primary" />
        <span>Sezona:</span>
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-full md:w-auto min-w-35 justify-between font-normal"
          >
            {getDisplayText()}
            <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-45 p-2 bg-bg-secondary" align="start">
          <div className="flex flex-col gap-1">
            {SEASONS.map((season) => (
              <label
                key={season.value}
                className="flex items-center gap-2 cursor-pointer rounded-md px-2 py-1.5 hover:bg-gray-100 text-sm"
              >
                <Checkbox
                  checked={isChecked(season.value)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(season.value, checked === true)
                  }
                />
                <span>{season.label}</span>
              </label>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
