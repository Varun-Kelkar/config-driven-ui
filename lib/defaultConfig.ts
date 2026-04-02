import { LayoutConfig } from './types';

/**
 * Default layout configuration
 */
export const DEFAULT_LAYOUT_CONFIG: LayoutConfig = {
  version: '1.0.0',
  mode: 'grid',
  panels: [
    {
      id: 'panel-1',
      type: 'activity',
      label: 'Activity Feed',
      visible: true,
      order: 0,
      grid: { row: 1, col: 1, colSpan: 2 },
      props: { maxItems: 5 },
    },
    {
      id: 'panel-2',
      type: 'approvals',
      label: 'Approvals',
      visible: true,
      order: 1,
      grid: { row: 1, col: 3, colSpan: 1 },
    },
  ],
  settings: {
    maxPanels: 10,
    defaultVisible: true,
    gridColumns: 4,
    gridGap: 16,
  },
};
