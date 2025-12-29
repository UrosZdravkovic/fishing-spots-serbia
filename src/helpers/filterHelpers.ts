import type { FishingSpot } from '@/data/fishingSpots';
import type { FilterState } from '@/components/Filters/types';

/**
 * Filters fishing spots based on the provided filter state
 */
export function filterSpots(spots: FishingSpot[], filters: FilterState): FishingSpot[] {
  return spots.filter((spot) => {
    // Permit filter
    if (filters.permitRequired !== null && spot.permitRequired !== filters.permitRequired) {
      return false;
    }
    // Water type filter
    if (filters.waterType !== null && !filters.waterType.includes(spot.waterType)) {
      return false;
    }
    // Season filter - spot must have at least one matching season
    if (filters.season !== null && !spot.bestSeasons.some((s) => filters.season!.includes(s))) {
      return false;
    }
    return true;
  });
}
