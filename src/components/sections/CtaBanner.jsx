import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Button from '../ui/Button';
import { COLORS } from '../../theme/tokens';

export default function CtaBanner() {
    const [email, setEmail] = useState('');

    return (
        <View nativeID="contact" className="w-full bg-white">
            <View className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-20">
                <View className="relative overflow-hidden rounded-[2rem] bg-brand-800 px-6 py-12 md:px-14 md:py-16">
                    <View className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-brand-700" />
                    <View className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-brand-700" />

                    <View className="relative flex-col lg:flex-row items-center gap-10">
                        <View className="w-full lg:w-3/5">
                            <Text className="text-3xl md:text-4xl font-extrabold leading-tight text-white text-center lg:text-left">
                                Transform Your Health, One Meal at a Time
                            </Text>
                            <Text className="mt-4 text-base leading-relaxed text-brand-100 text-center lg:text-left">
                                Join thousands of members eating better every week. Start today and get your first
                                delivery free — no contract, cancel anytime.
                            </Text>
                        </View>

                        <View className="w-full lg:w-2/5">
                            <View className="rounded-2xl bg-white p-4">
                                <Text className="text-sm font-semibold text-ink-900">
                                    Get started with your email
                                </Text>
                                <TextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="you@example.com"
                                    placeholderTextColor={COLORS.ink[400]}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    accessibilityLabel="Email address"
                                    className="mt-3 w-full rounded-full border border-cream-300 bg-cream-50 px-5 py-3 text-[15px] text-ink-900"
                                />
                                <View className="mt-3">
                                    <Button
                                        label="Claim Free First Box"
                                        fullWidth
                                        rightIcon={<Ionicons name="arrow-forward" size={16} color={COLORS.white} />}
                                    />
                                </View>
                                <Text className="mt-3 text-center text-xs text-ink-400">
                                    No spam. Unsubscribe anytime.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}