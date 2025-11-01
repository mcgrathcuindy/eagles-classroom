# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Eagles Classroom is a web-based basketball playbook application for CCS Varsity Basketball Eagles. The app provides video demonstrations and detailed descriptions of offensive plays, defensive schemes, sideline out-of-bounds (SLOB), and baseline out-of-bounds (BLOB) plays.

**Key Architecture**: The app uses YouTube as a CMS, dynamically loading videos from YouTube playlists via the YouTube Data API v3. Each playlist represents a category, and each video in a playlist becomes a play.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Tech Stack

- **Framework**: React 18 with Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI (dropdowns, transitions)
- **Icons**: Lucide React

## Architecture

### YouTube Integration (CMS)

The app uses YouTube playlists as a content management system:
- **Playlists = Categories**: Each YouTube playlist ID in `src/config/youtube.js` represents a category (offense, defense, slob, blob)
- **Videos = Plays**: Each video in a playlist automatically becomes a play in the app
- **Dynamic Loading**: Content is fetched via YouTube Data API v3 on page load

**Configuration**:
- API key stored in `.env` as `VITE_YOUTUBE_API_KEY`
- Playlist IDs mapped in `src/config/youtube.js`

### Data Flow

1. **YouTubeProvider** (`src/context/YouTubeContext.jsx`): React context that fetches and provides playlist data to the entire app
2. **YouTube Service** (`src/services/youtube.js`): API calls to YouTube Data API v3 with caching
3. **Cache Utility** (`src/utils/cache.js`): localStorage-based caching to reduce API calls
4. **Custom Hooks** (`src/hooks/useYouTubeData.js`): React hooks for fetching playlists and video details
5. **Components**: Consume data via `useYouTube()` context hook

### Caching System

The app implements automatic caching using browser localStorage:
- **Cache Duration**: 10 hours (configurable via `CACHE_TTL` in `src/services/youtube.js`)
- **Benefits**: Reduces API quota usage, faster page loads, offline resilience
- **Cache Keys**: Prefixed with `eagles_classroom_` to avoid conflicts
- **Refresh**: Manual refresh available via button on More page, or automatic after cache expiration

### Navigation Structure

Navigation is dynamically built from YouTube data in `src/components/Navbar.jsx`:
- Fetches all playlists on app load via `useYouTube()` context
- Builds dropdown menus with video titles from each playlist
- Links to `/play/{category}/{videoId}` for each video

**Adding New Plays**: Simply add a video to the appropriate YouTube playlist - no code changes required!

### Page Structure

**Dynamic Play Page** (`src/pages/Play.jsx`):
- Route: `/play/:category/:videoId`
- Fetches video details from YouTube API based on URL params
- Displays using three core components:
  - `PlayTitle` - Video title from YouTube
  - `VideoPlayer` - YouTube embed
  - `PlayDescription` - Video description from YouTube
- Includes loading and error states

**More Page** (`src/pages/More.jsx`):
- Dynamically generates a grid of all plays
- Fetches data from `useYouTube()` context
- Organizes plays by category (from playlists)

### Reusable Components

Located in `src/components/`:
- **Navbar.jsx**: Main navigation with desktop dropdowns and mobile hamburger menu (dynamically populated from YouTube)
- **VideoPlayer.jsx**: YouTube iframe embed wrapper
- **PlayTitle.jsx**: Styled title header for play pages
- **PlayDescription.jsx**: Play description card with consistent styling
- **PlayCard.jsx**: Modern card component with video thumbnail, hover effects, and play button overlay
- **LoadingSpinner.jsx**: Loading state indicator
- **ErrorMessage.jsx**: Error display with optional retry button

### Utility Modules

Located in `src/utils/`:
- **cache.js**: localStorage caching utility with TTL support, provides `getCache()`, `setCache()`, `clearCache()`, and `clearAllCache()`

### Routing

Routes defined in `src/App.jsx` using React Router v6:
- `/` - Home page
- `/more` - All plays grid
- `/play/:category/:videoId` - Dynamic play page for any video
- `*` - NotFound catch-all

The app is wrapped in `YouTubeProvider` to provide playlist data globally.

## Design System

### Colors
- Background: `#1a1a1a`
- Surface: `#2a2a2a`
- Accent (hover): `#404040`
- Primary Blue: `#00c3ff`
- CTA Blue: `#0088ff` (hover: `#48bae0`)

### Responsive Breakpoints
- Mobile: default (< 768px)
- Tablet: `md:` prefix (≥ 768px)
- Desktop: `lg:` prefix (≥ 1024px)

All components use mobile-first responsive design with Tailwind's responsive prefixes.

## Key Patterns

### Adding a New Play

**No code required!** Simply:
1. Upload video to YouTube
2. Add video to the appropriate playlist (offense, defense, slob, or blob)
3. The app will automatically detect it on next page load

The video's title and description from YouTube become the play's title and description in the app.

### Adding a New Category

1. Create a new YouTube playlist
2. Get the playlist ID from the YouTube URL
3. Add it to `PLAYLISTS` in `src/config/youtube.js`:
```javascript
export const PLAYLISTS = {
  offense: 'existing_id',
  defense: 'existing_id',
  slob: 'existing_id',
  blob: 'existing_id',
  newCategory: 'new_playlist_id', // Add here
};
```

### YouTube Data Structure

Videos fetched from playlists include:
- `id`: YouTube video ID
- `title`: Video title
- `description`: Video description
- `thumbnail`: Video thumbnail URL
- `publishedAt`: Publish date

## Important Notes

- **Environment Variables**: The app requires `VITE_YOUTUBE_API_KEY` in `.env` file
- **Setup**: See `YOUTUBE_SETUP.md` for complete configuration instructions
- **API Quota**: YouTube Data API v3 has daily quotas (10,000 units/day default) - caching significantly reduces usage
- **Caching**: Data is cached for 1 hour in localStorage to minimize API calls
- **Manual Refresh**: Users can refresh cached data via the button on the More page
- The app expects a `logo.png` file in the `public/` directory for the navbar logo
- Videos must be set to "Public" in YouTube to be accessible

## Environment Setup

Required environment variables in `.env`:
```
VITE_YOUTUBE_API_KEY=your_youtube_api_key
```

Required configuration in `src/config/youtube.js`:
- YouTube playlist IDs for each category

## Troubleshooting

- **Empty navigation**: Check playlist IDs in `src/config/youtube.js`
- **API errors**: Verify API key in `.env` and that YouTube Data API v3 is enabled
- **Videos not loading**: Ensure videos are set to "Public" in YouTube
- **After .env changes**: Restart the dev server (`npm run dev`)
- **Stale cached data**: Use the Refresh button on More page or clear localStorage
- **Check cache status**: Open browser console to see "Using cached data" or "Fetching fresh data" logs

## Performance Optimization

The caching system dramatically reduces API calls:
- **First load**: ~4-5 API calls (1 per playlist)
- **Cached loads**: 0 API calls
- **Cache hit rate**: ~99% for typical usage
- **Quota usage**: Minimal - most days will use <100 units instead of thousands
