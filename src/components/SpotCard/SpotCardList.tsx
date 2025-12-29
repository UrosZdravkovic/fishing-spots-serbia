import type { FishingSpot } from '../../data/fishingSpots';
import SpotCard from './SpotCard';

type SpotListProps = {
  spots: FishingSpot[];
  onSpotClick?: (spot: FishingSpot) => void;
  isLoading?: boolean;
  emptyMessage?: string;
}

export default function SpotCardList({
  spots,
  onSpotClick,
  isLoading = false,
  emptyMessage = 'Nema pronađenih pecališta',
}: SpotListProps) {
  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-sky-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-gray-600">Učitavanje pecališta...</p>
        </div>
      </div>
    );
  }

  // Empty state
  if (spots.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🎣</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {emptyMessage}
          </h3>
          <p className="text-gray-600">
            Pokušajte da promenite filter ili pretražite druge regije.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full'>
      {/* Results count */}
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-600">
          Pronađeno <span className="font-semibold text-gray-900">{spots.length}</span>{' '}
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
