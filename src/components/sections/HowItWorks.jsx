import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { STEPS } from '../../data/steps';
import { COLORS } from '../../theme/tokens';

export default function HowItWorks() {
    return (
        <Section id="how-it-works" background="bg-cream-50">
            <SectionHeading
                eyebrow="How It Works"
                title="Healthy Eating in 3 Simple Steps"
                subtitle="From sign-up to your first delivery in under five minutes — no cooking, no planning, no compromise."
            />

            <View className="mt-12 flex-row flex-wrap -mx-3">
                {STEPS.map((step) => (
                    <View key={step.id} className="w-full md:w-1/3 px-3 mb-6">
                        <View className="flex-1 items-center rounded-3xl bg-white border border-cream-300 px-6 py-8">
                            <View className="h-14 w-14 items-center justify-center rounded-full bg-brand-600">
                                <Ionicons name={step.icon} size={24} color={COLORS.white} />
                            </View>

                            <Text className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                                Step {step.number}
                            </Text>
                            <Text className="mt-2 text-lg font-bold text-ink-900 text-center">
                                {step.title}
                            </Text>
                            <Text className="mt-3 text-sm leading-relaxed text-ink-500 text-center">
                                {step.description}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </Section>
    );
}