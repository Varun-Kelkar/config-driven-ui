'use client';

import { LayoutConfig } from '@/lib/types';

interface JsonViewerProps {
  config: LayoutConfig;
}

export default function JsonViewer({ config }: JsonViewerProps) {
  const jsonString = JSON.stringify(config, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm max-h-full overflow-hidden flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
        <div>
          <h2 className="font-semibold text-gray-900">JSON Configuration</h2>
          <p className="text-sm text-gray-500 mt-1">Live configuration output</p>
        </div>
        <button
          onClick={handleCopy}
          className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors"
        >
          Copy
        </button>
      </div>
      <div className="overflow-auto p-4 bg-gray-900">
        <pre className="text-sm text-gray-100 font-mono">
          <code>{jsonString}</code>
        </pre>
      </div>
    </div>
  );
}
