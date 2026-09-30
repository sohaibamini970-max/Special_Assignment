import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../theme/tokens';

export default function StarRating({ rating = 5, size = 14, label }) {
    return (
        <View
            className="flex-row items-center gap-1"
            accessible
            accessibilityLabel={label || `${rating} out of 5 stars`}
        >
            {Array.from({ length: 5 }).map((_, index) => (
                <Ionicons
                    key={index}
                    name={index < rating ? 'star' : 'star-outline'}
                    size={size}
                    color={COLORS.accent[500]}
                />
            ))}
        </View>
    );
}