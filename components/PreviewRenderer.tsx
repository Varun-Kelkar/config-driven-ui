'use client';

import { LayoutConfig } from '@/lib/types';
import { getPanelComponent } from '@/lib/panelRegistry';

interface PreviewRendererProps {
  config: LayoutConfig;
}

export default function PreviewRenderer({ config }: PreviewRendererProps) {
  const visiblePanels = config.panels
    .filter((p) => p.visible)
    .sort((a, b) => a.order - b.order);

  const gridColumns = config.settings?.gridColumns || 4;
  const gridGap = config.settings?.gridGap || 16;

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm max-h-full overflow-hidden flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 bg-white flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-900">Live Preview</h2>
            <p className="text-sm text-gray-500 mt-1">
              {config.mode === 'grid' ? 'Grid Layout' : 'List Layout'}
            </p>
          </div>
          <div className="text-xs text-gray-500">
            {config.mode === 'grid' && `${gridColumns} columns`}
          </div>
        </div>
      </div>
      <div className="overflow-y-auto p-4">
        {visiblePanels.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div className="text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <p className="text-lg font-medium">No visible panels</p>
              <p className="text-sm mt-1">Add panels or make them visible</p>
            </div>
          </div>
        ) : config.mode === 'grid' ? (
          // Grid Layout - Responsive: single column on mobile, full grid on md+
          <div 
            className="preview-responsive-grid auto-rows-auto"
            style={{
              '--grid-columns': gridColumns,
              '--grid-gap': `${gridGap}px`,
            } as React.CSSProperties}
          >
              {visiblePanels.map((panelConfig) => {
                const PanelComponent = getPanelComponent(panelConfig.type);
                const gridPos = panelConfig.grid || { row: 1, col: 1, colSpan: 1 };
                
                return (
                  <div
                    key={panelConfig.id}
                    className="preview-grid-item"
                    style={{
                      '--grid-row': `${gridPos.row}`,
                      '--grid-column': `${gridPos.col} / span ${gridPos.colSpan}`,
                    } as React.CSSProperties}
                  >
                    <PanelComponent config={panelConfig} />
                  </div>
                );
              })}
          </div>
        ) : (
          // List Layout
          <div className="grid gap-4">
            {visiblePanels.map((panelConfig) => {
              const PanelComponent = getPanelComponent(panelConfig.type);
              return (
                <div key={panelConfig.id}>
                  <PanelComponent config={panelConfig} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
