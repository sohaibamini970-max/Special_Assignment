import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { BENEFITS } from '../../data/benefits';
import { COLORS } from '../../theme/tokens';

export default function Benefits() {
    return (
        <Section id="why-us" background="bg-cream-100">
            <SectionHeading
                eyebrow="Why Choose Us"
                title="Why Choose Healthy"
                subtitle="Everything we do is built around one goal — making nutritious food effortless, affordable and genuinely enjoyable."
            />

            <View className="mt-12 flex-row flex-wrap -mx-3">
                {BENEFITS.map((benefit) => (
                    <View key={benefit.id} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                        <View className="flex-1 rounded-3xl bg-white border border-cream-300 p-6 hover:border-brand-300">
                            <View className="h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
                                <Ionicons name={benefit.icon} size={22} color={COLORS.brand[700]} />
                            </View>
                            <Text className="mt-5 text-lg font-bold text-ink-900">{benefit.title}</Text>
                            <Text className="mt-2 text-sm leading-relaxed text-ink-500">
                                {benefit.description}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </Section>
    );
}