# UI Modernization Plan

## Context

Ticket SHO-2 requests a full UI modernization as the current interface "sucks" and needs to be "better modern looking." The current UI uses Chakra UI 2 with basic styling and functional but dated design patterns.

## Goals

Modernize the Shoebox UI while maintaining all existing functionality. Focus on:
- Visual polish and contemporary design aesthetics
- Improved user experience and interactions
- Better visual hierarchy and spacing
- Enhanced animations and transitions
- Modern color palette and typography

## Approach

### 1. Enhanced Theme (`frontend/src/theme.ts`)

**Changes:**
- Modernize color palette with more vibrant brand colors
- Add semantic colors for success, warning, error states
- Configure shadows for depth and elevation
- Add rounded corners configuration (more modern, softer)
- Configure transitions for smooth animations
- Add improved dark mode colors

### 2. Modernized Layout Component (`frontend/src/components/Layout.tsx`)

**Changes:**
- Redesign header with gradient background on brand elements
- Add subtle animations to navigation links
- Improve spacing and visual hierarchy
- Add hover effects with smooth transitions
- Modernize the scan status alert with better styling
- Add backdrop blur effect to sticky header

### 3. Enhanced VideoCard Component (`frontend/src/components/VideoCard.tsx`)

**Changes:**
- Add skeleton loading state
- Improve hover animations with scale and shadow
- Better badge styling with gradient options
- Add subtle border glow on hover
- Improved typography hierarchy
- Add framer-motion for smooth entrance animations

### 4. Modernized VideoForm (`frontend/src/components/VideoForm.tsx`)

**Changes:**
- Enhanced input field styling with focus rings
- Better form layout with improved spacing
- Modernize select dropdown styling
- Add smooth transitions on focus/blur
- Improved error state styling

### 5. Enhanced HomePage (`frontend/src/pages/HomePage.tsx`)

**Changes:**
- Add page entrance animations
- Improved search bar with modern styling
- Better empty state design
- Enhanced loading states with skeleton screens
- Improved button styling with gradients

## Critical Files to Modify

1. `/home/dopey/RustroverProjects/shoebox/frontend/src/theme.ts` - Theme configuration
2. `/home/dopey/RustroverProjects/shoebox/frontend/src/components/Layout.tsx` - Main layout
3. `/home/dopey/RustroverProjects/shoebox/frontend/src/components/VideoCard.tsx` - Video cards
4. `/home/dopey/RustroverProjects/shoebox/frontend/src/components/VideoForm.tsx` - Form styling
5. `/home/dopey/RustroverProjects/shoebox/frontend/src/pages/HomePage.tsx` - Homepage

## Dependencies

- `framer-motion` - Already installed, will be used for animations
- `@chakra-ui/react` - Already installed, using existing Chakra UI components
- No new dependencies required

## Verification

1. Run frontend dev server: `cd frontend && yarn dev`
2. Open browser at `http://localhost:5173`
3. Verify all pages render with new styling
4. Test dark/light mode toggle
5. Verify all navigation links work
6. Test video card hover interactions
7. Verify form inputs have proper focus states
8. Check scan status alert displays correctly

## Implementation Order

1. Update theme.ts (foundation for all styling)
2. Update Layout.tsx (affects all pages)
3. Update VideoCard.tsx (used throughout app)
4. Update VideoForm.tsx (used in detail/edit pages)
5. Update HomePage.tsx (main entry point)
