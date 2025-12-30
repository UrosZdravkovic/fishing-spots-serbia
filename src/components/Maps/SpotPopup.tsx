import { Popup } from 'react-map-gl/mapbox';
import { type FishingSpot } from '@/data/fishingSpots';

type SpotPopupProps = {
  spot: FishingSpot;
  onClose: () => void;
  onViewDetails: () => void;
};

export default function SpotPopup({ spot, onClose, onViewDetails }: SpotPopupProps) {
  return (
    <Popup
      longitude={spot.coordinates.lng}
      latitude={spot.coordinates.lat}
      anchor="bottom"
      offset={40}
      onClose={onClose}
      closeOnClick={true}
    >
      <div className="p-2 min-w-50">
        <h3 className="font-semibold text-base mb-1">{spot.name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {spot.municipality}, {spot.region}
        </p>
        <p className="text-gray-500 text-xs mb-3 line-clamp-2">
          {spot.description}
        </p>
        <button
          onClick={onViewDetails}
          className="w-full bg-primary text-white text-sm py-1.5 px-3 rounded hover:bg-primary/90 transition-colors"
        >
          Pogledaj detalje
        </button>
      </div>
    </Popup>
  );
}
