import { PanelMetadata, PanelType } from './types';

/**
 * Available panels in the panel library
 */
export const PANEL_METADATA: Record<PanelType, PanelMetadata> = {
  activity: {
    type: 'activity',
    label: 'Activity Feed',
    description: 'Display recent activity and updates',
    icon: '📊',
  },
  approvals: {
    type: 'approvals',
    label: 'Approvals',
    description: 'Manage pending approvals and requests',
    icon: '✅',
  },
  chat: {
    type: 'chat',
    label: 'Chat',
    description: 'Team communication and messaging',
    icon: '💬',
  },
  calendar: {
    type: 'calendar',
    label: 'Calendar',
    description: 'View and manage events',
    icon: '📅',
  },
  tasks: {
    type: 'tasks',
    label: 'Tasks',
    description: 'Track and manage tasks',
    icon: '✓',
  },
  notes: {
    type: 'notes',
    label: 'Notes',
    description: 'Quick notes and reminders',
    icon: '📝',
  },
};

/**
 * Get metadata for a specific panel type
 */
export function getPanelMetadata(type: PanelType): PanelMetadata {
  return PANEL_METADATA[type];
}

/**
 * Get all available panel types
 */
export function getAllPanelTypes(): PanelType[] {
  return Object.keys(PANEL_METADATA) as PanelType[];
}
