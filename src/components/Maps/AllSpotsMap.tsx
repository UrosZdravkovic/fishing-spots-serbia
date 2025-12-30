import { useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { type FishingSpot } from '@/data/fishingSpots';
import SpotPopup from './SpotPopup';
import { MapPin } from 'lucide-react';

type AllSpotsMapProps = {
  spots: FishingSpot[];
  onSpotClick: (spot: FishingSpot) => void;
};

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '';

// Serbia center coordinates
const SERBIA_CENTER = {
  lat: 44.0165,
  lng: 21.0059,
};

export default function AllSpotsMap({ spots, onSpotClick }: AllSpotsMapProps) {
  const [selectedSpot, setSelectedSpot] = useState<FishingSpot | null>(null);
  const [hasError, setHasError] = useState(false);

  if (!MAPBOX_TOKEN) {
    return (
      <div className="w-full h-150 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm">
        Mapbox token nije podešen
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="w-full h-150 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm">
        Greška pri učitavanju mape
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 h-[600px]">
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: SERBIA_CENTER.lng,
          latitude: SERBIA_CENTER.lat,
          zoom: 7,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
        onError={() => setHasError(true)}
      >
        <NavigationControl position="top-right" />

        {spots.map((spot) => (
          <Marker
            key={spot.id}
            longitude={spot.coordinates.lng}
            latitude={spot.coordinates.lat}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedSpot(spot);
            }}
          >
            <div className="cursor-pointer text-primary hover:text-primary/80 transition-colors">
              <MapPin className="w-8 h-8 drop-shadow-md fill-current" />
            </div>
          </Marker>
        ))}

        {selectedSpot && (
          <SpotPopup
            spot={selectedSpot}
            onClose={() => setSelectedSpot(null)}
            onViewDetails={() => onSpotClick(selectedSpot)}
          />
        )}
      </Map>
    </div>
  );
}
