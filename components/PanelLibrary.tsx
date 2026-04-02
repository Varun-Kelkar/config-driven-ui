'use client';

import { PanelType } from '@/lib/types';
import { PANEL_METADATA, getAllPanelTypes } from '@/lib/panelMetadata';

interface PanelLibraryProps {
  onAddPanel: (type: PanelType) => void;
}

export default function PanelLibrary({ onAddPanel }: PanelLibraryProps) {
  const panelTypes = getAllPanelTypes();

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm max-h-[calc(100vh-12rem)] overflow-hidden flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex-shrink-0">
        <h2 className="font-semibold text-gray-900">Panel Library</h2>
        <p className="text-sm text-gray-500 mt-1">Click to add panels</p>
      </div>
      <div className="overflow-y-auto p-4">
        <div className="space-y-2">
          {panelTypes.map((type) => {
            const metadata = PANEL_METADATA[type];
            return (
              <button
                key={type}
                onClick={() => onAddPanel(type)}
                className="w-full text-left p-3 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{metadata.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 group-hover:text-blue-700">
                      {metadata.label}
                    </div>
                    <div className="text-sm text-gray-500 mt-0.5">
                      {metadata.description}
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-blue-500">+</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
