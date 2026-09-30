import { Platform } from 'react-native';

/**
 * Smoothly scrolls to a section by its DOM id on web.
 * Native platforms simply ignore the call (single-scroll landing page).
 */
export function scrollToSection(sectionId) {
    if (!sectionId) return;
    if (Platform.OS !== 'web') return;
    if (typeof document === 'undefined') return;

    const element = document.getElementById(sectionId);
    if (element && typeof element.scrollIntoView === 'function') {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}