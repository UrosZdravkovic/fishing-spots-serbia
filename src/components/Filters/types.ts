import type { WaterType, Season } from '@/data/fishingSpots';

export type PermitFilter = boolean | null;
export type WaterTypeFilter = WaterType[] | null; // null = show all, array = show only selected
export type SeasonFilter = Season[] | null; // null = show all, array = show only selected
export type FilterState = {
  permitRequired: PermitFilter;
  waterType: WaterTypeFilter;
  season: SeasonFilter;
};

export const defaultFilterState: FilterState = {
  permitRequired: null,
  waterType: null,
  season: null,
};