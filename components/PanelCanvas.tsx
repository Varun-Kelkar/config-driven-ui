'use client';

import { PanelConfig } from '@/lib/types';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getPanelMetadata } from '@/lib/panelMetadata';

interface PanelCanvasProps {
  panels: PanelConfig[];
  onReorder: (panels: PanelConfig[]) => void;
  onSelectPanel: (id: string) => void;
  onRemovePanel: (id: string) => void;
  selectedPanelId?: string;
}

function SortablePanelItem({
  panel,
  isSelected,
  onSelect,
  onRemove,
}: {
  panel: PanelConfig;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: panel.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const metadata = getPanelMetadata(panel.type);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`p-4 rounded-lg border-2 cursor-move ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center gap-3">
        <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 3h2v2H9V3zm0 4h2v2H9V7zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V3zm0 4h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
          </svg>
        </div>
        <span className="text-xl">{metadata.icon}</span>
        <div className="flex-1">
          <div className="font-medium text-gray-900">{panel.label}</div>
          <div className="text-sm text-gray-500">{metadata.description}</div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function PanelCanvas({
  panels,
  onReorder,
  onSelectPanel,
  onRemovePanel,
  selectedPanelId,
}: PanelCanvasProps) {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = panels.findIndex((p) => p.id === active.id);
    const newIndex = panels.findIndex((p) => p.id === over.id);

    const newPanels = [...panels];
    const [movedPanel] = newPanels.splice(oldIndex, 1);
    newPanels.splice(newIndex, 0, movedPanel);

    // Update order property
    const reorderedPanels = newPanels.map((p, index) => ({ ...p, order: index }));
    onReorder(reorderedPanels);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm max-h-[calc(100vh-28rem)] overflow-hidden flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex-shrink-0">
        <h2 className="font-semibold text-gray-900">Panel Canvas</h2>
        <p className="text-sm text-gray-500 mt-1">Drag to reorder panels</p>
      </div>
      <div className="overflow-y-auto p-4">
        {panels.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div className="text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
              </svg>
              <p className="text-lg font-medium">No panels added yet</p>
              <p className="text-sm mt-1">Add panels from the library</p>
            </div>
          </div>
        ) : (
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={panels.map((p) => p.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-3">
                {panels.map((panel) => (
                  <SortablePanelItem
                    key={panel.id}
                    panel={panel}
                    isSelected={selectedPanelId === panel.id}
                    onSelect={() => onSelectPanel(panel.id)}
                    onRemove={() => onRemovePanel(panel.id)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
}
