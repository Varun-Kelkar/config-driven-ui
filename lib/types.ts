/**
 * Core types for the Config-Driven UI Platform
 */

/**
 * Available panel types in the system
 */
export type PanelType = 'activity' | 'approvals' | 'chat' | 'calendar' | 'tasks' | 'notes';

/**
 * Layout rendering mode
 */
export type LayoutMode = 'list' | 'grid';

/**
 * Grid positioning for a panel
 */
export interface GridPosition {
  /** Row position (1-indexed) */
  row: number;
  /** Column position (1-indexed) */
  col: number;
  /** Number of columns to span */
  colSpan: number;
}

/**
 * Panel configuration defining how a panel should be rendered
 */
export interface PanelConfig {
  /** Unique identifier for the panel instance */
  id: string;
  /** Type of panel to render */
  type: PanelType;
  /** Display label for the panel */
  label: string;
  /** Whether the panel is visible */
  visible: boolean;
  /** Order in the layout (for sorting in list mode) */
  order: number;
  /** Grid positioning (for grid mode) */
  grid?: GridPosition;
  /** Additional panel-specific properties */
  props?: Record<string, unknown>;
}

/**
 * Complete layout configuration
 */
export interface LayoutConfig {
  /** Version of the config schema */
  version: string;
  /** Layout rendering mode */
  mode: LayoutMode;
  /** Array of panel configurations */
  panels: PanelConfig[];
  /** Global layout settings */
  settings?: {
    /** Maximum number of panels allowed */
    maxPanels?: number;
    /** Default panel visibility */
    defaultVisible?: boolean;
    /** Grid columns (for grid mode) */
    gridColumns?: number;
    /** Grid gap in pixels */
    gridGap?: number;
  };
}

/**
 * Panel metadata for the panel library
 */
export interface PanelMetadata {
  type: PanelType;
  label: string;
  description: string;
  icon?: string;
  defaultProps?: Record<string, unknown>;
}

/**
 * Props for panel components
 */
export interface PanelProps {
  config: PanelConfig;
  isPreview?: boolean;
}
