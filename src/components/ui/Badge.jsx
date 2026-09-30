import { Text, View } from 'react-native';

const TONE_CONTAINER = {
    brand: 'bg-brand-100',
    light: 'bg-white/15',
    cream: 'bg-cream-200',
};

const TONE_TEXT = {
    brand: 'text-brand-700',
    light: 'text-brand-50',
    cream: 'text-ink-700',
};

export default function Badge({ label, tone = 'brand', className = '' }) {
    return (
        <View
            className={`flex-row items-center rounded-full px-4 py-2 ${TONE_CONTAINER[tone]} ${className}`}
        >
            <Text
                className={`text-[11px] font-bold uppercase tracking-[0.14em] ${TONE_TEXT[tone]}`}
            >
                {label}
            </Text>
        </View>
    );
}