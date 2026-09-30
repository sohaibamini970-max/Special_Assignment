import { Pressable, Text } from 'react-native';

const VARIANT_CONTAINER = {
    primary: 'bg-brand-600 hover:bg-brand-700 active:bg-brand-800 border border-brand-600',
    outline: 'bg-white border border-brand-300 hover:bg-brand-50 active:bg-brand-100',
    dark: 'bg-ink-900 hover:bg-ink-700 active:bg-ink-900 border border-ink-900',
    light: 'bg-white hover:bg-cream-100 active:bg-cream-200 border border-white',
    ghost: 'bg-transparent border border-transparent hover:bg-brand-50 active:bg-brand-100',
};

const VARIANT_TEXT = {
    primary: 'text-white',
    outline: 'text-brand-700',
    dark: 'text-white',
    light: 'text-brand-700',
    ghost: 'text-brand-700',
};

const SIZE_CONTAINER = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
};

const SIZE_TEXT = {
    sm: 'text-sm',
    md: 'text-[15px]',
    lg: 'text-base',
};

export default function Button({
    label,
    onPress,
    variant = 'primary',
    size = 'md',
    leftIcon = null,
    rightIcon = null,
    fullWidth = false,
    className = '',
    accessibilityLabel,
}) {
    return (
        <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel || label}
            className={[
                'flex-row items-center justify-center gap-2 rounded-full',
                VARIANT_CONTAINER[variant],
                SIZE_CONTAINER[size],
                fullWidth ? 'w-full' : '',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {leftIcon}
            <Text className={`font-semibold ${SIZE_TEXT[size]} ${VARIANT_TEXT[variant]}`}>{label}</Text>
            {rightIcon}
        </Pressable>
    );
}