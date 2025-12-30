import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { defaultFilterState, type FilterState } from './types';
import PermitToggle from './PermitToggle';
import WaterTypeSelect from './WaterTypeSelect';
import SeasonSelect from './SeasonSelect';
import { Filter, X } from 'lucide-react';

type FiltersProps = {
  filters: FilterState;
  onApply: (filters: FilterState) => void;
};

export default function FiltersBar({ filters, onApply }: FiltersProps) {
  const [draftFilters, setDraftFilters] = useState<FilterState>(filters);
  const [isExpanded, setIsExpanded] = useState(false);

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
    setIsExpanded(false);
  };

  const handleClearFilters = () => {
    setDraftFilters(defaultFilterState);
    onApply(defaultFilterState);
  };

  const hasChanges = JSON.stringify(draftFilters) !== JSON.stringify(filters);
  const hasActiveFilters = JSON.stringify(filters) !== JSON.stringify(defaultFilterState);

  // Count active filters for badge
  const activeFilterCount = [
    filters.permitRequired !== null,
    filters.waterType !== null,
    filters.season !== null,
  ].filter(Boolean).length;

  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm border border-border">
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between md:hidden"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-700">Filteri</span>
          {activeFilterCount > 0 && (
            <span className="bg-primary text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        <X
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isExpanded ? 'rotate-0' : 'rotate-45'
          }`}
        />
      </button>

      {/* Filter content - always visible on desktop, collapsible on mobile */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          md:max-h-none md:opacity-100 md:visible
          ${isExpanded ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible md:max-h-none md:opacity-100 md:visible'}
        `}
      >
        <div className="p-4 pt-0 md:pt-4 border-t border-border md:border-t-0">
          {/* Filters grid - stacks on mobile, row on desktop */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
            {/* Filter controls */}
            <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end md:gap-6">
              <PermitToggle value={draftFilters.permitRequired} onChange={handlePermitChange} />
              <WaterTypeSelect value={draftFilters.waterType} onChange={handleWaterTypeChange} />
              <SeasonSelect value={draftFilters.season} onChange={handleSeasonChange} />
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 pt-3 md:pt-0 border-t border-border md:border-t-0">
              {hasActiveFilters && (
                <Button
                  onClick={handleClearFilters}
                  variant="ghost"
                  size="sm"
                  className="flex-1 md:flex-none text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4 mr-1" />
                  Obriši
                </Button>
              )}
              <Button
                onClick={handleApplyFilters}
                size="sm"
                disabled={!hasChanges}
                className="flex-1 md:flex-none transition-opacity"
              >
                Primeni
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}