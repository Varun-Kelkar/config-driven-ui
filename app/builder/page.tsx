'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PanelConfig, LayoutConfig, PanelType } from '@/lib/types';
import { DEFAULT_LAYOUT_CONFIG } from '@/lib/defaultConfig';
import { getPanelMetadata } from '@/lib/panelMetadata';
import { saveLayoutConfig, getLayoutConfig } from '@/lib/configActions';
import PanelLibrary from '@/components/PanelLibrary';
import PanelCanvas from '@/components/PanelCanvas';
import PanelConfiguration from '@/components/PanelConfiguration';
import PreviewRenderer from '@/components/PreviewRenderer';
import JsonViewer from '@/components/JsonViewer';

export default function BuilderPage() {
  const router = useRouter();
  const [config, setConfig] = useState<LayoutConfig>(DEFAULT_LAYOUT_CONFIG);
  const [selectedPanelId, setSelectedPanelId] = useState<string | undefined>();
  const [activeTab, setActiveTab] = useState<'preview' | 'json'>('preview');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const selectedPanel = config.panels.find((p) => p.id === selectedPanelId);

  // Load saved config on mount
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const savedConfig = await getLayoutConfig();
        if (savedConfig) {
          setConfig(savedConfig);
        }
      } catch (error) {
        console.error('Failed to load saved config:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadConfig();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const result = await saveLayoutConfig(config);
      if (result.success) {
        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        alert(result.message);
      }
    } catch {
      alert('Failed to save layout');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddPanel = (type: PanelType) => {
    const metadata = getPanelMetadata(type);
    
    // Calculate next grid position
    const gridColumns = config.settings?.gridColumns || 4;
    const maxRow = Math.max(0, ...config.panels.map(p => p.grid?.row || 1));
    const nextRow = maxRow + 1;
    
    // Set default props based on panel type
    const defaultProps: Record<string, unknown> = {};
    if (type === 'activity') {
      defaultProps.maxItems = 5;
    }
    
    const newPanel: PanelConfig = {
      id: `panel-${Date.now()}`,
      type,
      label: metadata.label,
      visible: true,
      order: config.panels.length,
      grid: {
        row: nextRow,
        col: 1,
        colSpan: Math.min(2, gridColumns), // Default to 2 columns or max available
      },
      ...(Object.keys(defaultProps).length > 0 && { props: defaultProps }),
    };

    setConfig({
      ...config,
      panels: [...config.panels, newPanel],
    });
  };

  const handleReorderPanels = (panels: PanelConfig[]) => {
    setConfig({
      ...config,
      panels,
    });
  };

  const handleRemovePanel = (id: string) => {
    const newPanels = config.panels
      .filter((p) => p.id !== id)
      .map((p, index) => ({ ...p, order: index }));

    setConfig({
      ...config,
      panels: newPanels,
    });

    if (selectedPanelId === id) {
      setSelectedPanelId(undefined);
    }
  };

  const handleUpdatePanel = (updatedPanel: PanelConfig) => {
    setConfig({
      ...config,
      panels: config.panels.map((p) => (p.id === updatedPanel.id ? updatedPanel : p)),
    });
  };

  // Show loading state while fetching config
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600 font-medium">Loading builder...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1800px] mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <div>
                <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Config Designer
                </h1>
                <p className="text-xs md:text-sm text-gray-500">Phase 1: Layout Builder</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {/* Layout Mode Toggle */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setConfig({ ...config, mode: 'list' })}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    config.mode === 'list'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button
                  onClick={() => setConfig({ ...config, mode: 'grid' })}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    config.mode === 'grid'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </button>
              </div>

              {/* Grid Columns Control (only visible in grid mode) */}
              {config.mode === 'grid' && (
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">Columns:</label>
                  <input
                    type="number"
                    min="2"
                    max="12"
                    value={config.settings?.gridColumns || 4}
                    onChange={(e) => setConfig({
                      ...config,
                      settings: {
                        ...config.settings,
                        gridColumns: parseInt(e.target.value) || 4,
                      }
                    })}
                    className="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
              
              <div className="text-sm text-gray-600">
                <span className="font-medium">{config.panels.length}</span> panels
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 md:gap-3 md:ml-4 md:pl-4 md:border-l border-gray-300">
                <Link
                  href="/"
                  className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  onClick={handleSave}
                  disabled={isSaving || config.panels.length === 0}
                  className="px-3 md:px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap"
                >
                  {isSaving ? 'Saving...' : 'Save & View Dashboard'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-[1800px] mx-auto p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
            {/* Left Column - Panel Library */}
            <div className="lg:col-span-3">
              <PanelLibrary onAddPanel={handleAddPanel} />
            </div>

            {/* Middle Column - Canvas & Configuration */}
            <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
              <PanelCanvas
                panels={config.panels}
                onReorder={handleReorderPanels}
                onSelectPanel={setSelectedPanelId}
                onRemovePanel={handleRemovePanel}
                selectedPanelId={selectedPanelId}
              />
              <div className="h-[400px]">
                <PanelConfiguration
                  panel={selectedPanel || null}
                  onUpdate={handleUpdatePanel}
                />
              </div>
            </div>

            {/* Right Column - Preview & JSON */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Tabs */}
              <div className="flex gap-2 mb-4 flex-shrink-0">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'preview'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'json'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  JSON Config
                </button>
              </div>

              {/* Content */}
              <div className="max-h-[calc(100vh-12rem)]">
                {activeTab === 'preview' ? (
                  <PreviewRenderer config={config} />
                ) : (
                  <JsonViewer config={config} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
