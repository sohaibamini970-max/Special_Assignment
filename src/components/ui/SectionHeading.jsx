import { Text, View } from 'react-native';
import Badge from './Badge';

export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'center',
    tone = 'dark',
    className = '',
}) {
    const isCentered = align === 'center';
    const isLight = tone === 'light';

    return (
        <View
            className={`w-full ${isCentered ? 'items-center' : 'items-start'} ${className}`}
        >
            {eyebrow ? <Badge label={eyebrow} tone={isLight ? 'light' : 'brand'} /> : null}

            <Text
                className={`mt-5 text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight ${isLight ? 'text-white' : 'text-ink-900'
                    } ${isCentered ? 'text-center' : 'text-left'}`}
            >
                {title}
            </Text>

            {subtitle ? (
                <Text
                    className={`mt-4 max-w-2xl text-base leading-relaxed ${isLight ? 'text-brand-100' : 'text-ink-500'
                        } ${isCentered ? 'text-center' : 'text-left'}`}
                >
                    {subtitle}
                </Text>
            ) : null}
        </View>
    );
}