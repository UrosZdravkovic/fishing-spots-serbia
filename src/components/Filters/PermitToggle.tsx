import { Shield } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import type { PermitFilter } from './types';

type PermitToggleProps = {
  value: PermitFilter;
  onChange: (value: PermitFilter) => void;
};

export default function PermitToggle({ value, onChange }: PermitToggleProps) {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
        <Shield className="w-4 h-4 text-primary" />
        <span>Dozvola:</span>
      </div>

      <div className="flex gap-0.5 bg-gray-100 rounded-lg p-0.5 w-full md:w-auto">
        <Toggle
          pressed={value === null}
          onPressedChange={() => onChange(null)}
          size="sm"
          className="flex-1 md:flex-none rounded-md px-3 data-[state=on]:bg-primary data-[state=on]:text-white data-[state=off]:hover:bg-gray-200"
        >
          Sve
        </Toggle>
        <Toggle
          pressed={value === true}
          onPressedChange={() => onChange(true)}
          size="sm"
          className="flex-1 md:flex-none rounded-md px-3 data-[state=on]:bg-primary data-[state=on]:text-white data-[state=off]:hover:bg-gray-200"
        >
          Potrebna
        </Toggle>
        <Toggle
          pressed={value === false}
          onPressedChange={() => onChange(false)}
          size="sm"
          className="flex-1 md:flex-none rounded-md px-3 text-xs md:text-sm data-[state=on]:bg-primary data-[state=on]:text-white data-[state=off]:hover:bg-gray-200"
        >
          Nije potrebna
        </Toggle>
      </div>
    </div>
  );
}