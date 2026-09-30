import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { FAQS } from '../../data/faqs';
import { COLORS } from '../../theme/tokens';

export default function Faq() {
    const [openId, setOpenId] = useState(FAQS[0].id);

    const toggleItem = (id) => {
        setOpenId((current) => (current === id ? null : id));
    };

    return (
        <Section id="faq" background="bg-cream-100">
            <SectionHeading
                eyebrow="FAQ"
                title="Questions? We Have Answers"
                subtitle="Everything you need to know about delivery, plans, allergens and flexibility."
            />

            <View className="mt-12 w-full max-w-3xl mx-auto">
                {FAQS.map((faq) => {
                    const isOpen = openId === faq.id;

                    return (
                        <View
                            key={faq.id}
                            className="mb-3 overflow-hidden rounded-2xl border border-cream-300 bg-white"
                        >
                            <Pressable
                                onPress={() => toggleItem(faq.id)}
                                accessibilityRole="button"
                                accessibilityLabel={faq.question}
                                accessibilityState={{ expanded: isOpen }}
                                className="flex-row items-center justify-between gap-4 px-5 py-5 hover:bg-cream-50"
                            >
                                <Text className="flex-1 text-[15px] md:text-base font-semibold text-ink-900">
                                    {faq.question}
                                </Text>
                                <Ionicons
                                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                                    size={20}
                                    color={COLORS.brand[600]}
                                />
                            </Pressable>

                            {isOpen ? (
                                <View className="px-5 pb-5">
                                    <Text className="text-sm leading-relaxed text-ink-500">{faq.answer}</Text>
                                </View>
                            ) : null}
                        </View>
                    );
                })}
            </View>
        </Section>
    );
}