import { useEffect, useRef, useState } from 'react';
import type { FishingSpot } from '../../data/fishingSpots';
import SpotCard from './SpotCard';
import { Fish, MapPin, Search } from 'lucide-react';

type SpotListProps = {
  spots: FishingSpot[];
  onSpotClick?: (spot: FishingSpot) => void;
  isLoading?: boolean;
  emptyMessage?: string;
};

export default function SpotCardList({
  spots,
  onSpotClick,
  isLoading = false,
  emptyMessage = 'Nema pronađenih pecališta',
}: SpotListProps) {
  const [isPinging, setIsPinging] = useState(false);
  const prevCountRef = useRef(spots.length);

  // Ping animation when spots count changes
  useEffect(() => {
    if (prevCountRef.current !== spots.length) {
      setIsPinging(true);
      const timer = setTimeout(() => setIsPinging(false), 600);
      prevCountRef.current = spots.length;
      return () => clearTimeout(timer);
    }
  }, [spots.length]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
          <p className="mt-4 text-gray-600">Učitavanje pecališta...</p>
        </div>
      </div>
    );
  }

  // Empty state
  if (spots.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <Fish className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {emptyMessage}
          </h3>
          <p className="text-gray-500 mb-6">
            Pokušajte da promenite filter ili pretražite druge regije.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span>Promenite filtere</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Istražite regione</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Results count */}
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-600">
          Pronađeno{' '}
          <span
            className={`inline-flex items-center justify-center min-w-[2rem] px-2 py-0.5 rounded-full font-semibold transition-all duration-300 ${
              isPinging
                ? 'bg-primary text-white scale-110'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            {spots.length}
          </span>{' '}
          {spots.length === 1
            ? 'pecalište'
            : spots.length < 5
              ? 'pecališta'
              : 'pecališta'}
        </p>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {spots.map((spot) => (
          <SpotCard key={spot.id} spot={spot} onCardClick={onSpotClick} />
        ))}
      </div>
    </div>
  );
}
