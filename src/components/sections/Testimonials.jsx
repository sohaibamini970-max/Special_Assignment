import { Text, View } from 'react-native';

import AppImage from '../ui/AppImage';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import StarRating from '../ui/StarRating';
import { TESTIMONIALS } from '../../data/testimonials';

export default function Testimonials() {
    return (
        <Section id="reviews" background="bg-white">
            <SectionHeading
                eyebrow="Testimonials"
                title="What Our Customers Say"
                subtitle="Over 12,000 people have changed the way they eat with Healthy Meals. Here is what a few of them told us."
            />

            <View className="mt-12 flex-row flex-wrap -mx-3">
                {TESTIMONIALS.map((testimonial) => (
                    <View key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                        <View className="flex-1 rounded-3xl border border-cream-300 bg-cream-50 p-6">
                            <StarRating
                                rating={testimonial.rating}
                                size={16}
                                label={`${testimonial.name} rated Healthy Meals ${testimonial.rating} out of 5`}
                            />

                            <Text className="mt-4 text-[15px] leading-relaxed text-ink-700">
                                “{testimonial.quote}”
                            </Text>

                            <View className="mt-6 flex-row items-center gap-3">
                                <AppImage
                                    source={testimonial.avatar}
                                    alt={`Portrait of ${testimonial.name}`}
                                    className="h-11 w-11 rounded-full"
                                />
                                <View>
                                    <Text className="text-sm font-bold text-ink-900">{testimonial.name}</Text>
                                    <Text className="text-xs text-ink-500">{testimonial.role}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </Section>
    );
}