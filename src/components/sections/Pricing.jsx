import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Button from '../ui/Button';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { PRICING_PLANS } from '../../data/pricingPlans';
import { COLORS } from '../../theme/tokens';
import { scrollToSection } from '../../utils/scrollToSection';

export default function Pricing() {
    return (
        <Section id="pricing" background="bg-white">
            <SectionHeading
                eyebrow="Pricing"
                title="Find the Perfect Plan for You"
                subtitle="Simple weekly pricing, no lock-in contracts and free delivery on every plan. Cancel or pause whenever you like."
            />

            <View className="mt-12 flex-row flex-wrap -mx-3 items-stretch">
                {PRICING_PLANS.map((plan) => {
                    const isPopular = plan.isPopular;

                    return (
                        <View key={plan.id} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <View
                                className={`flex-1 rounded-3xl p-7 border ${isPopular
                                        ? 'bg-brand-700 border-brand-700'
                                        : 'bg-white border-cream-300'
                                    }`}
                            >
                                {isPopular ? (
                                    <View className="self-start rounded-full bg-white/15 px-3 py-1">
                                        <Text className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                                            Most Popular
                                        </Text>
                                    </View>
                                ) : null}

                                <Text
                                    className={`mt-4 text-xl font-bold ${isPopular ? 'text-white' : 'text-ink-900'
                                        }`}
                                >
                                    {plan.name}
                                </Text>

                                <View className="mt-3 flex-row items-end gap-1">
                                    <Text
                                        className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-ink-900'
                                            }`}
                                    >
                                        {plan.price}
                                    </Text>
                                    <Text
                                        className={`mb-1 text-sm ${isPopular ? 'text-brand-100' : 'text-ink-500'
                                            }`}
                                    >
                                        {plan.period}
                                    </Text>
                                </View>

                                <Text
                                    className={`mt-3 text-sm leading-relaxed ${isPopular ? 'text-brand-100' : 'text-ink-500'
                                        }`}
                                >
                                    {plan.summary}
                                </Text>

                                <View className="mt-6 gap-3">
                                    {plan.features.map((feature) => (
                                        <View key={feature} className="flex-row items-start gap-2">
                                            <Ionicons
                                                name="checkmark-circle"
                                                size={18}
                                                color={isPopular ? COLORS.white : COLORS.brand[600]}
                                                style={{ marginTop: 1 }}
                                            />
                                            <Text
                                                className={`flex-1 text-sm leading-relaxed ${isPopular ? 'text-white' : 'text-ink-700'
                                                    }`}
                                            >
                                                {feature}
                                            </Text>
                                        </View>
                                    ))}
                                </View>

                                <View className="mt-8">
                                    <Button
                                        label={plan.ctaLabel}
                                        variant={isPopular ? 'light' : 'primary'}
                                        fullWidth
                                        onPress={() => scrollToSection('contact')}
                                    />
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>
        </Section>
    );
}