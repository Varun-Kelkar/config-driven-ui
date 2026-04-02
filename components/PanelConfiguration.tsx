'use client';

import { PanelConfig } from '@/lib/types';
import { getPanelMetadata } from '@/lib/panelMetadata';

interface PanelConfigurationProps {
  panel: PanelConfig | null;
  onUpdate: (panel: PanelConfig) => void;
}

export default function PanelConfiguration({ panel, onUpdate }: PanelConfigurationProps) {
  if (!panel) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full overflow-hidden flex flex-col">
        <div className="px-4 py-3 border-b border-gray-200 flex-shrink-0">
          <h2 className="font-semibold text-gray-900">Panel Configuration</h2>
        </div>
        <div className="flex-1 flex items-center justify-center text-center p-8">
          <div className="text-gray-400">
            <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <p className="text-lg font-medium">No panel selected</p>
            <p className="text-sm mt-1">Select a panel to configure</p>
          </div>
        </div>
      </div>
    );
  }

  const metadata = getPanelMetadata(panel.type);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full overflow-hidden flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex-shrink-0">
        <h2 className="font-semibold text-gray-900">Panel Configuration</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {/* Panel Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Panel Type</label>
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xl">{metadata.icon}</span>
              <span className="font-medium text-gray-900">{metadata.label}</span>
            </div>
          </div>

          {/* Label */}
          <div>
            <label htmlFor="panel-label" className="block text-sm font-medium text-gray-700 mb-2">
              Label
            </label>
            <input
              id="panel-label"
              type="text"
              value={panel.label}
              onChange={(e) => onUpdate({ ...panel, label: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter panel label"
            />
          </div>

          {/* Visibility */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={panel.visible}
                onChange={(e) => onUpdate({ ...panel, visible: e.target.checked })}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div>
                <div className="text-sm font-medium text-gray-700">Visible</div>
                <div className="text-sm text-gray-500">Show this panel in preview</div>
              </div>
            </label>
          </div>

          {/* Grid Position */}
          <div className="border-t border-gray-200 pt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Grid Position
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="grid-row" className="block text-xs text-gray-600 mb-1">
                  Row
                </label>
                <input
                  id="grid-row"
                  type="number"
                  min="1"
                  value={panel.grid?.row || 1}
                  onChange={(e) => onUpdate({
                    ...panel,
                    grid: {
                      row: parseInt(e.target.value) || 1,
                      col: panel.grid?.col || 1,
                      colSpan: panel.grid?.colSpan || 1,
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="grid-col" className="block text-xs text-gray-600 mb-1">
                  Column
                </label>
                <input
                  id="grid-col"
                  type="number"
                  min="1"
                  value={panel.grid?.col || 1}
                  onChange={(e) => onUpdate({
                    ...panel,
                    grid: {
                      row: panel.grid?.row || 1,
                      col: parseInt(e.target.value) || 1,
                      colSpan: panel.grid?.colSpan || 1,
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="grid-colspan" className="block text-xs text-gray-600 mb-1">
                  Col Span
                </label>
                <input
                  id="grid-colspan"
                  type="number"
                  min="1"
                  value={panel.grid?.colSpan || 1}
                  onChange={(e) => onUpdate({
                    ...panel,
                    grid: {
                      row: panel.grid?.row || 1,
                      col: panel.grid?.col || 1,
                      colSpan: parseInt(e.target.value) || 1,
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Configure panel position and width in grid layout
            </p>
          </div>

          {/* Activity Panel Settings */}
          {panel.type === 'activity' && (
            <div className="border-t border-gray-200 pt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Activity Settings
              </label>
              <div>
                <label htmlFor="max-items" className="block text-xs text-gray-600 mb-1">
                  Max Items to Show
                </label>
                <input
                  id="max-items"
                  type="number"
                  min="1"
                  value={(panel.props?.maxItems as number) || 5}
                  onChange={(e) => onUpdate({
                    ...panel,
                    props: {
                      ...panel.props,
                      maxItems: parseInt(e.target.value) || 5,
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Number of activity items to display initially (default: 5)
                </p>
              </div>
            </div>
          )}

          {/* Panel ID (Read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Panel ID</label>
            <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600 font-mono">
              {panel.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
