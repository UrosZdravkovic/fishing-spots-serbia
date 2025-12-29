import { useState, useMemo } from 'react';
import SpotCardList from './components/SpotCard/SpotCardList';
import { fishingSpots } from './data/fishingSpots';
import type { FishingSpot } from './data/fishingSpots';
import type { FilterState } from './components/Filters/types';
import FiltersBar from './components/Filters/FiltersBar';
import { filterSpots, getFiltersFromStorage, saveFiltersToStorage } from '@/helpers';


function App() {
  const [selectedSpot, setSelectedSpot] = useState<FishingSpot | null>(null);
  const [filters, setFilters] = useState<FilterState>(getFiltersFromStorage);

  const handleSpotClick = (spot: FishingSpot) => {
    setSelectedSpot(spot);
  };

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
    saveFiltersToStorage(newFilters);
  };

  const spots = useMemo(() => filterSpots(fishingSpots, filters), [filters]);


  return (

    <div className="min-h-screen bg-bg-secondary">
      {/* Header */}
      <header className="bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Pecališta Srbije
          </h1>
          <p className="text-lg opacity-90">
            Nađi svoje mesto raja
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <FiltersBar filters={filters} onApply={handleApplyFilters} />

        {/* Selected spot indicator */}
        {selectedSpot && (
          <div className="mb-6 p-4 bg-blue-50 border border-primary rounded-lg">
            <p className="text-sm text-text">
              Izabrano:{' '}
              <span className="font-semibold">{selectedSpot.name}</span>
            </p>
          </div>
        )}

        {/* Spot List */}
        <SpotCardList spots={spots} onSpotClick={handleSpotClick} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm">
            © 2025 Pecališta Srbije - Vaš vodič kroz najlepša mesta za pecanje
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
