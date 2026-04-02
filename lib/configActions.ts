'use server';

import { LayoutConfig } from './types';

// In-memory storage (will reset on server restart)
let savedConfig: LayoutConfig | null = null;

/**
 * Save layout configuration
 */
export async function saveLayoutConfig(config: LayoutConfig): Promise<{ success: boolean; message: string }> {
  try {
    savedConfig = config;
    return { success: true, message: 'Layout saved successfully!' };
  } catch (error) {
    console.error('Error saving layout:', error);
    return { success: false, message: 'Failed to save layout' };
  }
}

/**
 * Get saved layout configuration
 */
export async function getLayoutConfig(): Promise<LayoutConfig | null> {
  return savedConfig;
}

/**
 * Check if a saved config exists
 */
export async function hasSavedConfig(): Promise<boolean> {
  return savedConfig !== null;
}
