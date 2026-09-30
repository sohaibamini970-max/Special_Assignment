import { Text, View } from 'react-native';

import { STATS } from '../../data/stats';

export default function Stats() {
    return (
        <View className="w-full bg-white">
            <View className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
                <View className="w-full rounded-3xl bg-brand-700 px-6 py-8 md:px-10 md:py-10 flex-row flex-wrap justify-between gap-y-8">
                    {STATS.map((stat) => (
                        <View
                            key={stat.id}
                            className="w-1/2 md:w-1/4 items-center md:items-start px-2"
                        >
                            <Text className="text-2xl md:text-4xl font-extrabold text-white">
                                {stat.value}
                            </Text>
                            <Text className="mt-1 text-xs md:text-sm font-medium text-brand-100 text-center md:text-left">
                                {stat.label}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}