import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppImage from '../ui/AppImage';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { MEAL_PLANS } from '../../data/mealPlans';
import { COLORS } from '../../theme/tokens';
import { scrollToSection } from '../../utils/scrollToSection';

export default function MealPlans() {
    return (
        <Section id="meal-plans" background="bg-white">
            <SectionHeading
                eyebrow="Meal Plans"
                title="Healthy Meal Plans for Every Lifestyle"
                subtitle="Four daily moments, one simple subscription. Mix and match any plan to build the week that suits you."
            />

            <View className="mt-12 flex-row flex-wrap -mx-3">
                {MEAL_PLANS.map((plan) => (
                    <View key={plan.id} className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
                        <View className="flex-1 overflow-hidden rounded-3xl border border-cream-300 bg-white hover:border-brand-300">
                            <AppImage
                                source={plan.image}
                                alt={plan.imageAlt}
                                className="w-full h-40 md:h-44"
                            />

                            <View className="p-5">
                                <Text className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-600">
                                    {plan.tag}
                                </Text>
                                <Text className="mt-2 text-lg font-bold text-ink-900">{plan.title}</Text>
                                <Text className="mt-2 text-sm leading-relaxed text-ink-500">
                                    {plan.description}
                                </Text>

                                <View className="mt-5 flex-row items-center justify-between">
                                    <Text className="text-sm font-bold text-ink-900">{plan.price}</Text>
                                    <Pressable
                                        onPress={() => scrollToSection('pricing')}
                                        accessibilityRole="link"
                                        accessibilityLabel={`Explore the ${plan.title} plan`}
                                        className="flex-row items-center gap-1"
                                    >
                                        <Text className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                                            Explore
                                        </Text>
                                        <Ionicons name="arrow-forward" size={14} color={COLORS.brand[600]} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </Section>
    );
}