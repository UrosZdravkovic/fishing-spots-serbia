import { type FishingSpot } from "@/data/fishingSpots";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Shield, Fish, Car, Bus, ParkingCircle, Utensils, Tent, Lightbulb } from "lucide-react";
import SpotMap from "@/components/Maps/SpotMap";

/**
 * Props explanation:
 * - spot: The fishing spot data to display (can be null when no spot selected)
 * - open: Controls whether the dialog is visible (controlled component pattern)
 * - onOpenChange: Callback when dialog open state changes (for closing)
 */
type SpotDetailsModalProps = {
  spot: FishingSpot | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * SpotDetailsModal - A controlled dialog component
 *
 * We use the "controlled" pattern (open + onOpenChange props) instead of
 * DialogTrigger because:
 * 1. The dialog is opened from SpotCard click, not a button inside this component
 * 2. Parent (App) controls when it opens/closes
 * 3. Easier to manage state in one place
 */
export default function SpotDetailsModal({ spot, open, onOpenChange }: SpotDetailsModalProps) {
  // Early return if no spot - prevents rendering empty dialog
  if (!spot) return null;

  return (
    /**
     * Dialog component from shadcn/radix
     * - open: controlled state for visibility
     * - onOpenChange: called when user clicks overlay/X/escape
     */
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/**
       * DialogContent - The modal container
       * - Handles overlay, centering, close button automatically
       * - className for custom sizing
       */}
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" showCloseButton={false}>
        {/**
         * DialogHeader - Semantic header section
         * Contains title and optional description
         */}
        <DialogHeader>
          <DialogTitle className="text-2xl">{spot.name}</DialogTitle>
          {/**
           * Location subtitle - shows municipality and region
           * Flex with gap for icon alignment
           */}
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <MapPin className="w-4 h-4" />
            {spot.municipality}, {spot.region}
          </div>
        </DialogHeader>

        {/* Map section - below title and subtitle */}


        {/**
         * Main content area - uses flex column with gap for sections
         * Each section is visually separated
         */}
        <div className="flex flex-col gap-6 py-4">

          {/**
           * Rating and Permit badges row
           * Conditionally rendered based on data
           */}
          <div className="flex items-center gap-4">
            {spot.rating && (
              <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="font-semibold">{spot.rating}</span>
              </div>
            )}
            {spot.permitRequired && (
              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                <Shield className="w-4 h-4" />
                <span>Potrebna dozvola</span>
              </div>
            )}
          </div>
          <SpotMap coordinates={spot.coordinates} name={spot.name} />
          {/**
           * Description section
           * Full text without line-clamp (unlike card preview)
           */}
          <div>

            <h4 className="font-semibold mb-2">Opis</h4>
            <p className="text-gray-700">{spot.description}</p>
          </div>

          {/**
           * Fish types section
           * Maps over array to create badges
           */}
          <div>
            <h4 className="font-semibold mb-2">Ribe</h4>
            <div className="flex flex-wrap gap-2">
              {spot.fishTypes.map((fish) => (
                <span
                  key={fish}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                >
                  <Fish className="w-3 h-3" />
                  {fish}
                </span>
              ))}
            </div>
          </div>

          {/**
           * Best seasons section
           * Shows when the spot is best for fishing
           */}
          <div>
            <h4 className="font-semibold mb-2">Najbolje sezone</h4>
            <div className="flex flex-wrap gap-2">
              {spot.bestSeasons.map((season) => (
                <span
                  key={season}
                  className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-700"
                >
                  {season}
                </span>
              ))}
            </div>
          </div>

          {/**
           * Accessibility section
           * Shows available access options with icons
           * Conditional styling: active vs inactive
           */}
          <div>
            <h4 className="font-semibold mb-2">Pristupačnost</h4>
            <div className="flex flex-wrap gap-4">
              <div className={`flex items-center gap-2 ${spot.accessibility.car ? 'text-gray-700' : 'text-gray-300'}`}>
                <Car className="w-5 h-5" />
                <span>Auto</span>
              </div>
              <div className={`flex items-center gap-2 ${spot.accessibility.publicTransport ? 'text-gray-700' : 'text-gray-300'}`}>
                <Bus className="w-5 h-5" />
                <span>Javni prevoz</span>
              </div>
              <div className={`flex items-center gap-2 ${spot.accessibility.parkingAvailable ? 'text-gray-700' : 'text-gray-300'}`}>
                <ParkingCircle className="w-5 h-5" />
                <span>Parking</span>
              </div>
            </div>
          </div>

          {/**
           * Facilities section
           * Only shows available facilities (not grayed out)
           */}
          <div>
            <h4 className="font-semibold mb-2">Sadržaji</h4>
            <div className="flex flex-wrap gap-4">
              {spot.facilities.restaurant && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Utensils className="w-5 h-5" />
                  <span>Restoran</span>
                </div>
              )}
              {spot.facilities.camping && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Tent className="w-5 h-5" />
                  <span>Kamp</span>
                </div>
              )}
              {!spot.facilities.restaurant && !spot.facilities.camping && (
                <span className="text-gray-400 text-sm">Nema dodatnih sadržaja</span>
              )}
            </div>
          </div>

          {/**
           * Tips section - conditionally rendered
           * Highlighted with background and icon
           */}
          {spot.tips && (
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-1">Saveti</h4>
                  <p className="text-amber-700 text-sm">{spot.tips}</p>
                </div>
              </div>
            </div>
          )}

          {/**
           * Permit info - conditionally rendered
           * Shows where to get the permit
           */}
          {spot.permitInfo && (
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-1">Informacije o dozvoli</h4>
              <p className="text-blue-700 text-sm">{spot.permitInfo}</p>
            </div>
          )}
        </div>

        {/* Footer with close button */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Zatvori</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
