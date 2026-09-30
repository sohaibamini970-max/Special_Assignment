import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../theme/tokens';

export default function ScrollToTopButton({ visible, onPress }) {
    if (!visible) return null;

    return (
        <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel="Scroll back to top"
            className="absolute bottom-6 right-5 md:bottom-8 md:right-8 h-12 w-12 items-center justify-center rounded-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800"
        >
            <Ionicons name="arrow-up" size={20} color={COLORS.white} />
        </Pressable>
    );
}