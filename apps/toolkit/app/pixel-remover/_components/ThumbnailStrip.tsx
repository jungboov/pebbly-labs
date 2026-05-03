import type { BatchItem } from '../_hooks/useBatchProcessor';
import { PixelGauge } from './PixelGauge';

interface ThumbnailStripProps {
  items: BatchItem[];
  selectedIndex: number | null;
  selectedIds: Set<string>;
  onSelect: (idx: number, id: string) => void;
  onAdd: () => void;
  selectedCount: number;
  completedCount: number;
  allCompletedSelected: boolean;
  onSelectAll: () => void;
  onDeselectAll: () => void;
}

export function ThumbnailStrip({
  items,
  selectedIndex,
  selectedIds,
  onSelect,
  onAdd,
  selectedCount,
  completedCount,
  allCompletedSelected,
  onSelectAll,
  onDeselectAll,
}: ThumbnailStripProps) {
  const showToolbar = completedCount > 0;

  return (
    <div className="flex flex-col gap-1.5">
      {showToolbar && (
        <div className="flex items-center justify-between text-[9px] md:text-[10px] tracking-[0.18em] font-black uppercase">
          <span className="text-[#00ff00]/60 font-mono">
            SELECTED {selectedCount}/{completedCount}
          </span>
          <button
            onClick={allCompletedSelected ? onDeselectAll : onSelectAll}
            className="text-[#00ff00]/70 hover:text-[#00ff00] hover:underline transition-colors"
          >
            {allCompletedSelected ? 'DESELECT_ALL' : 'SELECT_ALL'}
          </button>
        </div>
      )}

      <div className="flex gap-2 overflow-x-auto py-1 scrollbar-hide">
        <button
          onClick={onAdd}
          aria-label="Add images"
          className="flex-shrink-0 w-11 h-11 md:w-14 md:h-14 border-2 border-[#00ff00] opacity-30 hover:opacity-100 flex items-center justify-center text-xl transition-all"
        >
          +
        </button>
        {items.map((item, idx) => {
          const isViewerActive = selectedIndex === idx;
          const isSelected = selectedIds.has(item.id);
          const isCompleted = item.status === 'completed';
          const isProcessing = item.status === 'processing';
          const isError = item.status === 'error';

          let stateClass = '';
          if (isCompleted) {
            stateClass = isSelected
              ? 'border-[#00ff00] shadow-[0_0_12px_#00ff00] scale-105'
              : 'border-[#00ff00]/30 opacity-70 hover:opacity-100 hover:border-[#00ff00]/70';
          } else if (isProcessing) {
            stateClass = 'border-[#00ff00]/60 opacity-50 cursor-wait';
          } else if (isError) {
            stateClass = 'border-red-500/60 opacity-60';
          } else {
            stateClass = 'border-transparent opacity-30 hover:opacity-100';
          }

          return (
            <div
              key={item.id}
              onClick={() => onSelect(idx, item.id)}
              role={isCompleted ? 'checkbox' : undefined}
              aria-checked={isCompleted ? isSelected : undefined}
              className={`flex-shrink-0 w-11 h-11 md:w-14 md:h-14 overflow-hidden border-2 cursor-pointer relative transition-all hover:scale-105 ${stateClass} ${isProcessing ? 'animate-pulse' : ''}`}
            >
              <img
                src={item.original}
                className={`w-full h-full object-cover pointer-events-none ${item.status === 'pending' ? 'grayscale opacity-30' : ''}`}
                alt="Thumbnail"
              />

              {/* viewer indicator (top-left) */}
              {isViewerActive && (
                <div
                  aria-label="Currently viewing"
                  className="absolute top-0.5 left-0.5 w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full z-20 shadow-[0_0_4px_#fff]"
                />
              )}

              {/* selected checkmark (top-right) */}
              {isCompleted && isSelected && (
                <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 md:w-4 md:h-4 bg-[#00ff00] text-black flex items-center justify-center text-[9px] md:text-[10px] font-black z-30 shadow-[0_0_6px_rgba(0,255,0,0.6)]">
                  ✓
                </div>
              )}

              {/* processing overlay (status text + progress) */}
              {isProcessing && (
                <>
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <div className="absolute top-0.5 right-0.5 bg-black/70 text-[#00ff00] text-[8px] md:text-[9px] font-black px-1 leading-none py-0.5 z-20">
                    {item.progress}%
                  </div>
                  <div className="absolute bottom-0.5 left-0.5 right-0.5 z-20">
                    <PixelGauge value={item.progress} blocks={5} height="sm" />
                  </div>
                </>
              )}

              {/* error mark */}
              {isError && (
                <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 md:w-4 md:h-4 bg-red-500 text-white flex items-center justify-center text-[9px] md:text-[10px] font-black z-20">
                  !
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
