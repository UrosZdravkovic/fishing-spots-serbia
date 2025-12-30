import { useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

type SpotMapProps = {
  coordinates: {
    lat: number;
    lng: number;
  };
  name: string;
};

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '';

export default function SpotMap({ coordinates, name }: SpotMapProps) {
  const [hasError, setHasError] = useState(false);

  if (!MAPBOX_TOKEN) {
    return (
      <div className="w-full h-[250px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm">
        Mapbox token nije podešen
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="w-full h-[250px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm">
        Greška pri učitavanju mape
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 h-[250px]">
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: coordinates.lng,
          latitude: coordinates.lat,
          zoom: 12,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
        onError={() => setHasError(true)}
      >
        <NavigationControl position="top-right" />
        <Marker
          longitude={coordinates.lng}
          latitude={coordinates.lat}
          anchor="bottom"
        >
          <div className="text-primary" title={name}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 drop-shadow-md"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Marker>
      </Map>
    </div>
  );
}
