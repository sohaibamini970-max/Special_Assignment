import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppImage from '../ui/AppImage';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import StarRating from '../ui/StarRating';
import { IMAGES } from '../../data/images';
import { COLORS } from '../../theme/tokens';
import { scrollToSection } from '../../utils/scrollToSection';

const HERO_BENEFITS = [
    { id: 'fresh', icon: 'leaf-outline', label: '100% Fresh Ingredients' },
    { id: 'delivery', icon: 'bicycle-outline', label: 'Free Weekly Delivery' },
    { id: 'approved', icon: 'medal-outline', label: 'Nutritionist Approved' },
];

export default function Hero() {
    return (
        <View nativeID="home" className="w-full bg-cream-100">
            <View className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-10 pb-14 lg:pt-16 lg:pb-24">
                <View className="flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <View className="w-full lg:w-1/2">
                        <Badge label="Fresh • Organic • Delicious" />

                        <Text className="mt-6 text-[2rem] md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] text-ink-900">
                            Healthy Meals{'\n'}
                            <Text className="text-brand-600">Happier Lives</Text>
                        </Text>

                        <Text className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-ink-500">
                            Freshly prepared, nutritionist-designed meals delivered to your door every week.
                            Eat well without planning, shopping or washing a single pan.
                        </Text>

                        <View className="mt-8 flex-row flex-wrap gap-3">
                            <Button
                                label="Start Your Plan"
                                size="lg"
                                onPress={() => scrollToSection('pricing')}
                                rightIcon={<Ionicons name="arrow-forward" size={18} color={COLORS.white} />}
                            />
                            <Button
                                label="Explore Meal Plans"
                                variant="outline"
                                size="lg"
                                onPress={() => scrollToSection('meal-plans')}
                            />
                        </View>

                        <View className="mt-10 flex-row flex-wrap gap-x-8 gap-y-4">
                            {HERO_BENEFITS.map((benefit) => (
                                <View key={benefit.id} className="flex-row items-center gap-2">
                                    <View className="h-7 w-7 items-center justify-center rounded-full bg-brand-100">
                                        <Ionicons name={benefit.icon} size={15} color={COLORS.brand[700]} />
                                    </View>
                                    <Text className="text-sm font-medium text-ink-700">{benefit.label}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View className="w-full lg:w-1/2 items-center">
                        <View className="relative w-full max-w-md">
                            <View className="absolute -top-6 -left-6 h-28 w-28 rounded-full bg-brand-200" />
                            <View className="absolute -bottom-8 -right-4 h-24 w-24 rounded-full bg-cream-300" />

                            <AppImage
                                source={IMAGES.hero}
                                alt="Fresh vegetable salad bowl prepared by Healthy Meals"
                                className="w-full h-72 md:h-96 lg:h-[27rem] rounded-[2.5rem]"
                            />

                            <View className="absolute bottom-4 left-4 right-4 flex-row items-center gap-3 rounded-2xl bg-white/95 px-4 py-3">
                                <View className="h-10 w-10 items-center justify-center rounded-full bg-brand-100">
                                    <Ionicons name="star" size={18} color={COLORS.accent[500]} />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-sm font-bold text-ink-900">4.9 out of 5</Text>
                                    <Text className="text-xs text-ink-500">From 2,400+ verified reviews</Text>
                                </View>
                                <StarRating rating={5} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}