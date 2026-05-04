"use client";

import { useBatchProcessor } from './_hooks/useBatchProcessor';
import { themes } from './_themes';
import { Hero } from './_components/Hero';
import { Viewer } from './_components/Viewer';
import { StatusBar } from './_components/StatusBar';
import { ThumbnailStrip } from './_components/ThumbnailStrip';
import { ControlRow } from './_components/ControlRow';
import { DragOverlay } from './_components/DragOverlay';

export default function Home() {
  const t = themes.pixel;
  const {
    batchItems,
    selectedIndex,
    setSelectedIndex,
    selectedIds,
    selectedCount,
    completedCount,
    allCompletedSelected,
    toggleSelection,
    selectAll,
    deselectAll,
    compareSlider,
    setCompareSlider,
    isDragging,
    isDownloading,
    modelStatus,
    modelProgress,
    selectedItem,
    batchStatus,
    batchStats,
    overallPercentage,
    fileInputRef,
    handleFiles,
    handleDownloadZip,
    handleDownloadIndividual,
    handleDownloadCurrent,
    handleClearCache,
    handleRetryModel,
  } = useBatchProcessor();

  return (
    <main className={`min-h-screen ${t.bg} ${t.font} antialiased overflow-x-hidden relative pt-[60px]`}>
      <DragOverlay isDragging={isDragging} />

      <div className="max-w-[480px] md:max-w-[1000px] w-full mx-auto h-[calc(100vh-60px)] px-4 md:px-8 py-3 md:py-5 flex flex-col gap-2 md:gap-3 overflow-hidden">
        <div className="flex-shrink-0">
          <Hero />
        </div>
        <Viewer
          selectedItem={selectedItem}
          compareSlider={compareSlider}
          onCompareChange={setCompareSlider}
          onFileInputClick={() => fileInputRef.current?.click()}
          onDownloadCurrent={handleDownloadCurrent}
        />
        <div className="flex-shrink-0">
          <StatusBar
            modelStatus={modelStatus}
            modelProgress={modelProgress}
            batchStatus={batchStatus}
            batchStats={batchStats}
            overallPercentage={overallPercentage}
            onRetryModel={handleRetryModel}
          />
        </div>
        <div className="flex-shrink-0">
          <ThumbnailStrip
            items={batchItems}
            selectedIndex={selectedIndex}
            selectedIds={selectedIds}
            onSelect={(idx, id) => {
              setSelectedIndex(idx);
              setCompareSlider(0);
              toggleSelection(id);
            }}
            onAdd={() => fileInputRef.current?.click()}
            selectedCount={selectedCount}
            completedCount={completedCount}
            allCompletedSelected={allCompletedSelected}
            onSelectAll={selectAll}
            onDeselectAll={deselectAll}
          />
        </div>
        <div className="flex-shrink-0">
          <ControlRow
            selectedCount={selectedCount}
            isDownloading={isDownloading}
            onDownloadZip={handleDownloadZip}
            onDownloadIndividual={handleDownloadIndividual}
            onClear={handleClearCache}
          />
        </div>
        <div className="flex-shrink-0 text-center text-[9px] opacity-40 tracking-[0.25em] font-black text-[#00ff00]">
          🔒 100% LOCAL · NO UPLOAD · ZERO SERVER ·{" "}
          <a
            href="mailto:hello@pebblylabs.com"
            className="hover:opacity-100 hover:underline transition-opacity"
          >
            HELLO@PEBBLYLABS.COM
          </a>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          multiple
          accept="image/*"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </div>
    </main>
  );
}
