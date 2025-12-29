import type { FilterState } from '@/components/Filters/types';
import { defaultFilterState } from '@/components/Filters/types';

const FILTERS_STORAGE_KEY = 'fishingSpots_filters';
const EXPIRY_TIME_MS = 3 * 60 * 1000; // 3 minutes in milliseconds

type StoredFilters = {
  filters: FilterState;
  expiresAt: number;
};

/**
 * Saves filters to localStorage with a 3-minute expiry
 */
export function saveFiltersToStorage(filters: FilterState): void {
  const data: StoredFilters = {
    filters,
    expiresAt: Date.now() + EXPIRY_TIME_MS,
  };
  localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(data));
}

/**
 * Retrieves filters from localStorage if not expired
 * Returns defaultFilterState if expired or not found
 */
export function getFiltersFromStorage(): FilterState {
  const stored = localStorage.getItem(FILTERS_STORAGE_KEY);

  if (!stored) {
    return defaultFilterState;
  }

  try {
    const data: StoredFilters = JSON.parse(stored);

    // Check if expired
    if (Date.now() > data.expiresAt) {
      localStorage.removeItem(FILTERS_STORAGE_KEY);
      return defaultFilterState;
    }

    return data.filters;
  } catch {
    localStorage.removeItem(FILTERS_STORAGE_KEY);
    return defaultFilterState;
  }
}

/**
 * Clears filters from localStorage
 */
export function clearFiltersFromStorage(): void {
  localStorage.removeItem(FILTERS_STORAGE_KEY);
}
