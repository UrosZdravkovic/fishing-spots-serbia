import { List, Map } from 'lucide-react';

type View = 'lista' | 'mapa';

type ViewToggleProps = {
  activeView: View;
  onViewChange: (view: View) => void;
};

export default function ViewToggle({ activeView, onViewChange }: ViewToggleProps) {
  const baseStyles = 'flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200';

  const getButtonStyles = (view: View) => {
    const isActive = activeView === view;

    if (isActive) {
      return `${baseStyles} bg-primary text-white shadow-md hover:bg-primary/90`;
    }

    return `${baseStyles} text-muted-foreground hover:text-foreground hover:bg-muted-foreground/10`;
  };

  return (
    <div className="flex justify-end mb-4">
      <div className="inline-flex items-center rounded-lg bg-muted p-1 gap-1">
        <button
          onClick={() => onViewChange('lista')}
          className={getButtonStyles('lista')}
        >
          <List className="w-4 h-4" />
          Lista
        </button>
        <button
          onClick={() => onViewChange('mapa')}
          className={getButtonStyles('mapa')}
        >
          <Map className="w-4 h-4" />
          Mapa
        </button>
      </div>
    </div>
  );
}

export type { View };
