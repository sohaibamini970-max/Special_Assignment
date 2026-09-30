import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppImage from '../ui/AppImage';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { IMAGES } from '../../data/images';
import { COLORS } from '../../theme/tokens';
import { scrollToSection } from '../../utils/scrollToSection';

const HIGHLIGHTS = [
    'Seasonal produce from certified local farms',
    'Recipes reviewed by registered dietitians',
    'Zero preservatives, zero refined sugar',
    'Carbon-neutral delivery across the city',
];

export default function About() {
    return (
        <View nativeID="about" className="w-full bg-cream-50">
            <View className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-20 lg:py-24">
                <View className="flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <View className="w-full lg:w-1/2">
                        <View className="relative w-full max-w-lg self-center lg:self-start">
                            <AppImage
                                source={IMAGES.aboutPrimary}
                                alt="Chef preparing a colourful healthy grain bowl"
                                className="w-full h-64 md:h-80 lg:h-[22rem] rounded-[2rem]"
                            />
                            <View className="absolute -bottom-8 -right-2 md:right-4 w-36 md:w-44 rounded-2xl overflow-hidden border-4 border-cream-50">
                                <AppImage
                                    source={IMAGES.aboutSecondary}
                                    alt="Close-up of a fresh chicken and avocado salad"
                                    className="w-full h-28 md:h-32"
                                />
                            </View>
                        </View>
                    </View>

                    <View className="w-full lg:w-1/2 mt-8 lg:mt-0">
                        <Badge label="About Us" />

                        <Text className="mt-5 text-3xl md:text-4xl font-extrabold leading-tight text-ink-900">
                            Your Trusted Healthy Food Partner
                        </Text>

                        <Text className="mt-5 text-base leading-relaxed text-ink-500">
                            Healthy Meals started in a small home kitchen with one belief: eating well should be
                            the easiest part of your day. Today our team of chefs and nutritionists prepares
                            thousands of meals each week, using the same short ingredient list we started with.
                        </Text>

                        <View className="mt-7 gap-3">
                            {HIGHLIGHTS.map((item) => (
                                <View key={item} className="flex-row items-start gap-3">
                                    <Ionicons
                                        name="checkmark-circle"
                                        size={20}
                                        color={COLORS.brand[600]}
                                        style={{ marginTop: 1 }}
                                    />
                                    <Text className="flex-1 text-[15px] leading-relaxed text-ink-700">{item}</Text>
                                </View>
                            ))}
                        </View>

                        <View className="mt-9 flex-row flex-wrap gap-3">
                            <Button
                                label="Learn More"
                                onPress={() => scrollToSection('why-us')}
                                rightIcon={<Ionicons name="arrow-forward" size={16} color={COLORS.white} />}
                            />
                            <Button
                                label="See Our Plans"
                                variant="outline"
                                onPress={() => scrollToSection('meal-plans')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}