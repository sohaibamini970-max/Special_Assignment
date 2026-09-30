import { View } from 'react-native';

/**
 * Provides consistent horizontal padding, vertical rhythm and max width
 * for every landing page section.
 */
export default function Section({
    id,
    children,
    background = 'bg-white',
    innerClassName = '',
    spacingClassName = 'py-14 md:py-20 lg:py-24',
}) {
    return (
        <View nativeID={id} className={`w-full ${background}`}>
            <View
                className={`w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-10 ${spacingClassName} ${innerClassName}`}
            >
                {children}
            </View>
        </View>
    );
}