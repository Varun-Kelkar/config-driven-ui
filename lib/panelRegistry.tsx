import { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { PanelProps, PanelType } from './types';



const FallbackLoader = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg h-64"></div>
);
/**
 * Dynamically import panel components for better code splitting
 * Each panel is loaded on-demand, reducing initial bundle size
 */
const ActivityPanel = dynamic(() => import('@/panels/ActivityPanel'), {
  loading: () => <FallbackLoader />,
});

const ApprovalsPanel = dynamic(() => import('@/panels/ApprovalsPanel'), {
  loading: () => <FallbackLoader />,
});

const ChatPanel = dynamic(() => import('@/panels/ChatPanel'), {
  loading: () => <FallbackLoader />,
});

const CalendarPanel = dynamic(() => import('@/panels/CalendarPanel'), {
  loading: () => <FallbackLoader />,
});

const TasksPanel = dynamic(() => import('@/panels/TasksPanel'), {
  loading: () => <FallbackLoader />,
});

const NotesPanel = dynamic(() => import('@/panels/NotesPanel'), {
  loading: () => <FallbackLoader />,
});

/**
 * Component registry mapping panel types to React components
 */
export const PANEL_REGISTRY: Record<PanelType, ComponentType<PanelProps>> = {
  activity: ActivityPanel as ComponentType<PanelProps>,
  approvals: ApprovalsPanel as ComponentType<PanelProps>,
  chat: ChatPanel as ComponentType<PanelProps>,
  calendar: CalendarPanel as ComponentType<PanelProps>,
  tasks: TasksPanel as ComponentType<PanelProps>,
  notes: NotesPanel as ComponentType<PanelProps>,
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
