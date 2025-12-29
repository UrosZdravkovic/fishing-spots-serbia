import type { FishingSpot } from '../../data/fishingSpots';
import {
  MapPin,
  Star,
  Waves,
  Mountain,
  Droplets,
  Ship,
  Bird,
  Fish,
  Car,
  Bus,
  ParkingCircle,
  Utensils,
  Tent,
  Lightbulb,
  Shield,
} from 'lucide-react';

type SpotCardProps = {
  spot: FishingSpot;
  onCardClick?: (spot: FishingSpot) => void;
}

export default function SpotCard({ spot, onCardClick }: SpotCardProps) {
  const handleClick = () => {
    if (onCardClick) {
      onCardClick(spot);
    }
  };

  // Difficulty badge colors
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Lako':
        return 'bg-green-100 text-green-800';
      case 'Srednje':
        return 'bg-amber-100 text-amber-800';
      case 'Teško':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Water type icons using Lucide
  const getWaterIcon = (waterType: string, size: 'small' | 'large' = 'small') => {
    const iconClass = size === 'large' ? 'w-full h-full' : 'w-4 h-4';

    switch (waterType) {
      case 'Reka':
        return <Waves className={iconClass} />;
      case 'Jezero':
        return <Mountain className={iconClass} />;
      case 'Akumulacija':
        return <Droplets className={iconClass} />;
      case 'Bara':
        return <Bird className={iconClass} />;
      case 'Kanal':
        return <Ship className={iconClass} />;
      default:
        return <Droplets className={iconClass} />;
    }
  };

  return (
    <article
      onClick={handleClick}
      className="bg-bg rounded-lg overflow-hidden transition-[shadow,border-color] duration-200 hover:shadow-lg cursor-pointer border border-border hover:border-primary shadow-sm"
    >
      {/* Header with image placeholder */}
      <div className="h-40 bg-primary relative">
        {spot.imageUrl ? (
          <img
            src={spot.imageUrl}
            alt={spot.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="w-16 h-16">
              {getWaterIcon(spot.waterType, 'large')}
            </div>
          </div>
        )}

        {/* Rating badge */}
        {spot.rating && (
          <div className="absolute top-3 right-3 bg-white/95 px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="font-semibold text-gray-800">{spot.rating}</span>
          </div>
        )}

        {/* Permit required badge */}
        {spot.permitRequired && (
          <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium shadow-md flex items-center gap-1">
            <Shield className="w-3 h-3" />
            Dozvola
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title and location */}
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {spot.name}
          </h3>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {spot.municipality}, {spot.region}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {spot.description}
        </p>

        {/* Water type and difficulty */}
        <div className="flex gap-2 mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {getWaterIcon(spot.waterType)} {spot.waterType}
          </span>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
              spot.difficulty
            )}`}
          >
            {spot.difficulty}
          </span>
        </div>

        {/* Fish types */}
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-600 mb-2">Ribe:</p>
          <div className="flex flex-wrap gap-2">
            {spot.fishTypes.slice(0, 4).map((fish) => (
              <span
                key={fish}
                className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
              >
                <Fish className="w-3 h-3" />
                {fish}
              </span>
            ))}
            {spot.fishTypes.length > 4 && (
              <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                +{spot.fishTypes.length - 4} više
              </span>
            )}
          </div>
        </div>

        {/* Accessibility icons */}
        <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-200">
          <div
            className={`flex items-center gap-1 text-xs ${
              spot.accessibility.car ? 'text-gray-700' : 'text-gray-300'
            }`}
            title={spot.accessibility.car ? 'Dostupno kolima' : 'Nije dostupno kolima'}
          >
            <Car className="w-4 h-4" />
            <span className="hidden sm:inline">Auto</span>
          </div>
          <div
            className={`flex items-center gap-1 text-xs ${
              spot.accessibility.publicTransport
                ? 'text-gray-700'
                : 'text-gray-300'
            }`}
            title={
              spot.accessibility.publicTransport
                ? 'Dostupno javnim prevozom'
                : 'Nije dostupno javnim prevozom'
            }
          >
            <Bus className="w-4 h-4" />
            <span className="hidden sm:inline">Prevoz</span>
          </div>
          <div
            className={`flex items-center gap-1 text-xs ${
              spot.accessibility.parkingAvailable
                ? 'text-gray-700'
                : 'text-gray-300'
            }`}
            title={
              spot.accessibility.parkingAvailable
                ? 'Parking dostupan'
                : 'Parking nije dostupan'
            }
          >
            <ParkingCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Parking</span>
          </div>
          {spot.facilities.restaurant && (
            <div className="flex items-center gap-1 text-xs text-gray-700" title="Restoran">
              <Utensils className="w-4 h-4" />
              <span className="hidden sm:inline">Restoran</span>
            </div>
          )}
          {spot.facilities.camping && (
            <div className="flex items-center gap-1 text-xs text-gray-700" title="Kamp">
              <Tent className="w-4 h-4" />
              <span className="hidden sm:inline">Kamp</span>
            </div>
          )}
        </div>

        {/* Tips preview */}
        {spot.tips && (
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-600 italic line-clamp-2 flex items-start gap-1">
              <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{spot.tips}</span>
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
