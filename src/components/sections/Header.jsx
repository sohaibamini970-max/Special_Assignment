import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Button from '../ui/Button';
import { NAV_LINKS } from '../../data/navigation';
import { COLORS } from '../../theme/tokens';
import { scrollToSection } from '../../utils/scrollToSection';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (sectionId) => {
        setIsMenuOpen(false);
        scrollToSection(sectionId);
    };

    return (
        <View className="w-full bg-white border-b border-cream-300">
            <View className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-4 flex-row items-center justify-between">
                <Pressable
                    onPress={() => handleNavigate('home')}
                    accessibilityRole="link"
                    accessibilityLabel="Healthy Meals, back to top"
                    className="flex-row items-center gap-3"
                >
                    <View className="h-10 w-10 items-center justify-center rounded-full bg-brand-600">
                        <Ionicons name="leaf" size={20} color={COLORS.white} />
                    </View>
                    <Text className="text-lg md:text-xl font-extrabold text-ink-900">
                        Healthy <Text className="text-brand-600">Meals</Text>
                    </Text>
                </Pressable>

                <View className="hidden lg:flex flex-row items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Pressable
                            key={link.id}
                            onPress={() => handleNavigate(link.id)}
                            accessibilityRole="link"
                            accessibilityLabel={link.label}
                        >
                            <Text className="text-[15px] font-medium text-ink-700 hover:text-brand-600">
                                {link.label}
                            </Text>
                        </Pressable>
                    ))}
                </View>

                <View className="flex-row items-center gap-3">
                    <View className="hidden sm:flex">
                        <Button
                            label="Get Started"
                            size="sm"
                            onPress={() => handleNavigate('pricing')}
                        />
                    </View>

                    <Pressable
                        onPress={() => setIsMenuOpen((open) => !open)}
                        accessibilityRole="button"
                        accessibilityLabel={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        accessibilityState={{ expanded: isMenuOpen }}
                        className="lg:hidden h-10 w-10 items-center justify-center rounded-full border border-cream-300 hover:bg-cream-100"
                    >
                        <Ionicons
                            name={isMenuOpen ? 'close' : 'menu'}
                            size={22}
                            color={COLORS.ink[900]}
                        />
                    </Pressable>
                </View>
            </View>

            {isMenuOpen ? (
                <View className="lg:hidden border-t border-cream-300 bg-white px-5 py-4 gap-1">
                    {NAV_LINKS.map((link) => (
                        <Pressable
                            key={link.id}
                            onPress={() => handleNavigate(link.id)}
                            accessibilityRole="link"
                            accessibilityLabel={link.label}
                            className="rounded-xl px-3 py-3 hover:bg-cream-100 active:bg-cream-200"
                        >
                            <Text className="text-base font-medium text-ink-700">{link.label}</Text>
                        </Pressable>
                    ))}

                    <View className="mt-3 sm:hidden">
                        <Button
                            label="Get Started"
                            fullWidth
                            onPress={() => handleNavigate('pricing')}
                        />
                    </View>
                </View>
            ) : null}
        </View>
    );
}