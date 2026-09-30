# Healthy Meals — Landing Page

A production-style, fully responsive implementation of the **Healthy Meals** landing page,
built as a component-based **React Native for Web** application with **Expo** and **NativeWind**
(Tailwind CSS for React Native).

## Live Demo

> Vercel URL: _add your deployed URL here after deploying_

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Expo (SDK 52) + React Native Web |
| Styling | NativeWind v4 (Tailwind CSS v3 utility classes) |
| Icons | `@expo/vector-icons` (Ionicons) |
| Build / Deploy | `expo export --platform web` → static `dist/` → Vercel |

## Features

- Sticky top navigation with branding, links and a primary CTA
- Mobile hamburger menu that adapts below the `lg` breakpoint
- Hero with headline, supporting copy, dual CTAs, benefit indicators and rating card
- Statistics / trust indicator band
- About section with layered image composition
- Four meal plan cards (Breakfast, Lunch, Dinner, Snacks)
- "Why Choose Healthy" benefits grid
- Three-tier pricing section with a highlighted popular plan
- Three-step "How It Works" process
- Customer testimonials with star ratings
- FAQ accordion (open/close interaction, keyboard accessible)
- Bottom email capture CTA and full footer
- Scroll-to-top button that appears after scrolling

## Responsive Behaviour

- Single-column layouts on mobile, two columns on tablet (`md:`), full multi-column on desktop (`lg:`)
- No horizontal scrolling at common mobile widths
- Typography, spacing, padding and image heights scale across breakpoints
- Images use `resizeMode="cover"` with fixed container heights, so they never stretch or overflow

## Accessibility

- All interactive elements use `Pressable` with `accessibilityRole` and `accessibilityLabel`
- Decorative icons are excluded from the accessibility tree; meaningful images have descriptive `alt` text
- The FAQ uses `accessibilityState={{ expanded }}` and `aria-expanded` on web
- Contrast ratios follow the green/cream/ink palette defined in `tailwind.config.js`

## Project Structure
