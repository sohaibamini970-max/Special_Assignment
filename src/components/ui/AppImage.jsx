import { Image } from 'react-native';

/**
 * Thin wrapper around React Native's Image so every image in the app
 * gets consistent cover cropping and accessible alternative text.
 */
export default function AppImage({ source, alt, className = '', style }) {
    const resolvedSource = typeof source === 'string' ? { uri: source } : source;

    return (
        <Image
            source={resolvedSource}
            alt={alt}
            accessibilityLabel={alt}
            accessible
            resizeMode="cover"
            className={className}
            style={style}
        />
    );
}