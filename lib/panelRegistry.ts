import { ComponentType } from 'react';
import { PanelProps, PanelType } from './types';

// Panel component imports
import ActivityPanel from '@/panels/ActivityPanel';
import ApprovalsPanel from '@/panels/ApprovalsPanel';
import ChatPanel from '@/panels/ChatPanel';
import CalendarPanel from '@/panels/CalendarPanel';
import TasksPanel from '@/panels/TasksPanel';
import NotesPanel from '@/panels/NotesPanel';

/**
 * Component registry mapping panel types to React components
 */
export const PANEL_REGISTRY: Record<PanelType, ComponentType<PanelProps>> = {
  activity: ActivityPanel,
  approvals: ApprovalsPanel,
  chat: ChatPanel,
  calendar: CalendarPanel,
  tasks: TasksPanel,
  notes: NotesPanel,
};

/**
 * Get component for a given panel type
 */
export function getPanelComponent(type: PanelType): ComponentType<PanelProps> {
  const Component = PANEL_REGISTRY[type];
  if (!Component) {
    throw new Error(`Panel type "${type}" not found in registry`);
  }
  return Component;
}
