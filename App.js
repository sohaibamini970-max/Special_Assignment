import './global.css';

import { useCallback, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './src/components/sections/Header';
import Hero from './src/components/sections/Hero';
import Stats from './src/components/sections/Stats';
import About from './src/components/sections/About';
import MealPlans from './src/components/sections/MealPlans';
import Benefits from './src/components/sections/Benefits';
import Pricing from './src/components/sections/Pricing';
import HowItWorks from './src/components/sections/HowItWorks';
import Testimonials from './src/components/sections/Testimonials';
import Faq from './src/components/sections/Faq';
import CtaBanner from './src/components/sections/CtaBanner';
import Footer from './src/components/sections/Footer';
import ScrollToTopButton from './src/components/ui/ScrollToTopButton';

const SCROLL_TOP_THRESHOLD = 700;

export default function App() {
    const scrollRef = useRef(null);
    const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

    const handleScroll = useCallback((event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const shouldShow = offsetY > SCROLL_TOP_THRESHOLD;
        setIsScrollTopVisible((previous) => (previous === shouldShow ? previous : shouldShow));
    }, []);

    const handleScrollToTop = useCallback(() => {
        scrollRef.current?.scrollTo({ y: 0, animated: true });
    }, []);

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />
            <ScrollView
                ref={scrollRef}
                className="flex-1"
                stickyHeaderIndices={[0]}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={true}
                contentContainerClassName="overflow-x-hidden"
            >
                <Header />
                <Hero />
                <Stats />
                <About />
                <MealPlans />
                <Benefits />
                <Pricing />
                <HowItWorks />
                <Testimonials />
                <Faq />
                <CtaBanner />
                <Footer />
            </ScrollView>
            <ScrollToTopButton visible={isScrollTopVisible} onPress={handleScrollToTop} />
        </View>
    );
}