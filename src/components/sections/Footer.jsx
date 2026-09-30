import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { CONTACT_DETAILS, FOOTER_COLUMNS, SOCIAL_LINKS } from '../../data/footer';
import { COLORS } from '../../theme/tokens';
import { scrollToSection } from '../../utils/scrollToSection';

export default function Footer() {
    return (
        <View className="w-full bg-ink-900">
            <View className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-14 pb-8">
                <View className="flex-row flex-wrap -mx-3">
                    <View className="w-full lg:w-1/3 px-3 mb-10">
                        <View className="flex-row items-center gap-3">
                            <View className="h-10 w-10 items-center justify-center rounded-full bg-brand-600">
                                <Ionicons name="leaf" size={20} color={COLORS.white} />
                            </View>
                            <Text className="text-lg font-extrabold text-white">
                                Healthy <Text className="text-brand-400">Meals</Text>
                            </Text>
                        </View>

                        <Text className="mt-5 max-w-sm text-sm leading-relaxed text-brand-100/80">
                            Freshly prepared, nutritionist-designed meals delivered weekly. Eat well, feel
                            better, and never plan a grocery list again.
                        </Text>

                        <View className="mt-6 gap-3">
                            {CONTACT_DETAILS.map((detail) => (
                                <View key={detail.id} className="flex-row items-center gap-3">
                                    <Ionicons name={detail.icon} size={16} color={COLORS.brand[300]} />
                                    <Text className="text-sm text-brand-100/80">{detail.text}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {FOOTER_COLUMNS.map((column) => (
                        <View key={column.id} className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-10">
                            <Text className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                                {column.title}
                            </Text>
                            <View className="mt-5 gap-3">
                                {column.links.map((link) => (
                                    <Pressable
                                        key={link.label}
                                        onPress={() => scrollToSection(link.sectionId)}
                                        accessibilityRole="link"
                                        accessibilityLabel={link.label}
                                    >
                                        <Text className="text-sm text-brand-100/80 hover:text-white">
                                            {link.label}
                                        </Text>
                                    </Pressable>
                                ))}
                            </View>
                        </View>
                    ))}

                    <View className="w-full lg:w-1/5 px-3 mb-10">
                        <Text className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                            Follow Us
                        </Text>
                        <View className="mt-5 flex-row gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <Pressable
                                    key={social.id}
                                    accessibilityRole="link"
                                    accessibilityLabel={social.label}
                                    className="h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand-600"
                                >
                                    <Ionicons name={social.icon} size={18} color={COLORS.white} />
                                </Pressable>
                            ))}
                        </View>
                    </View>
                </View>

                <View className="mt-6 border-t border-white/10 pt-6 flex-col md:flex-row items-center justify-between gap-3">
                    <Text className="text-xs text-brand-100/70">
                        © {new Date().getFullYear()} Healthy Meals. All rights reserved.
                    </Text>
                    <View className="flex-row gap-6">
                        <Text className="text-xs text-brand-100/70">Privacy Policy</Text>
                        <Text className="text-xs text-brand-100/70">Terms of Service</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}