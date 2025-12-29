import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { defaultFilterState, type FilterState } from './types';
import PermitToggle from './PermitToggle';
import WaterTypeSelect from './WaterTypeSelect';
import SeasonSelect from './SeasonSelect';

type FiltersProps = {
  filters: FilterState;
  onApply: (filters: FilterState) => void;
};

export default function FiltersBar({ filters, onApply }: FiltersProps) {
  const [draftFilters, setDraftFilters] = useState<FilterState>(filters);

  function handlePermitChange(value: FilterState['permitRequired']) {
    setDraftFilters({ ...draftFilters, permitRequired: value });
  }

  function handleWaterTypeChange(value: FilterState['waterType']) {
    setDraftFilters({ ...draftFilters, waterType: value });
  }

  function handleSeasonChange(value: FilterState['season']) {
    setDraftFilters({ ...draftFilters, season: value });
  }

  const handleApplyFilters = () => {
    onApply(draftFilters);
  };

  const handleClearFilters = () => {
    setDraftFilters(defaultFilterState);
    onApply(defaultFilterState);
  };

  const hasChanges = JSON.stringify(draftFilters) !== JSON.stringify(filters);
  const hasActiveFilters = JSON.stringify(filters) !== JSON.stringify(defaultFilterState);

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-border">
      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-6">
          <PermitToggle value={draftFilters.permitRequired} onChange={handlePermitChange} />
          <WaterTypeSelect value={draftFilters.waterType} onChange={handleWaterTypeChange} />
          <SeasonSelect value={draftFilters.season} onChange={handleSeasonChange} />
        </div>

        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <Button
              onClick={handleClearFilters}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700"
            >
              Obriši filtere
            </Button>
          )}
          <Button
            onClick={handleApplyFilters}
            size="sm"
            disabled={!hasChanges}
            className="transition-opacity"
          >
            Primeni
          </Button>
        </div>
      </div>
    </div>
  );
}