import { LayoutConfig } from './types';

const STORAGE_KEY = 'config-driven-ui-layout';

/**
 * Save layout configuration to localStorage
 */
export function saveLayoutConfig(config: LayoutConfig): { success: boolean; message: string } {
  try {
    if (typeof window === 'undefined') {
      return { success: false, message: 'localStorage not available' };
    }
    
    const configString = JSON.stringify(config);
    localStorage.setItem(STORAGE_KEY, configString);
    
    return { success: true, message: 'Layout saved successfully!' };
  } catch (error) {
    console.error('Error saving layout:', error);
    return { success: false, message: 'Failed to save layout' };
  }
}

/**
 * Get saved layout configuration from localStorage
 */
export function getLayoutConfig(): LayoutConfig | null {
  try {
    if (typeof window === 'undefined') {
      return null;
    }
    
    const configString = localStorage.getItem(STORAGE_KEY);
    
    if (!configString) {
      return null;
    }
    
    return JSON.parse(configString) as LayoutConfig;
  } catch (error) {
    console.error('Error reading layout:', error);
    return null;
  }
}

/**
 * Check if a saved config exists
 */
export function hasSavedConfig(): boolean {
  try {
    if (typeof window === 'undefined') {
      return false;
    }
    
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}
