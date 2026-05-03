interface ControlRowProps {
  selectedCount: number;
  isDownloading: boolean;
  onDownloadZip: () => void;
  onDownloadIndividual: () => void;
  onClear: () => void;
}

export function ControlRow({
  selectedCount,
  isDownloading,
  onDownloadZip,
  onDownloadIndividual,
  onClear,
}: ControlRowProps) {
  const disabled = selectedCount === 0 || isDownloading;
  const countLabel = `(${selectedCount})`;

  return (
    <div className="flex gap-2">
      <button
        onClick={onDownloadZip}
        disabled={disabled}
        className="flex-1 py-3 md:py-5 bg-[#00ff00] text-black text-[10px] md:text-[11px] tracking-[0.18em] font-black uppercase disabled:opacity-20 hover:bg-white transition-all"
      >
        {isDownloading ? '>> ARCHIVING...' : `>> ZIP ${countLabel}`}
      </button>
      <button
        onClick={onDownloadIndividual}
        disabled={disabled}
        className="flex-1 py-3 md:py-5 border-2 border-[#00ff00] bg-[#00ff00]/10 text-[#00ff00] text-[10px] md:text-[11px] tracking-[0.18em] font-black uppercase disabled:opacity-20 hover:bg-[#00ff00] hover:text-black transition-all"
      >
        {isDownloading ? '>> SAVING...' : `>> FILES ${countLabel}`}
      </button>
      <button
        onClick={onClear}
        className="px-3 md:px-5 py-3 md:py-5 border border-[#00ff00] text-[#00ff00] text-[10px] md:text-[11px] tracking-[0.2em] font-black uppercase opacity-50 hover:opacity-100 transition-all"
      >
        CLEAR
      </button>
    </div>
  );
}
