# YouTube Integration Setup Guide

This guide will help you complete the setup of the YouTube-powered dynamic playbook system.

## Prerequisites

- YouTube playlists created for each category (Offense, Defense, SLOB, BLOB)
- Videos uploaded to YouTube and added to appropriate playlists

## Step 1: Get YouTube Data API v3 Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3:
   - Navigate to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click "Enable"
4. Create API credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key
5. (Recommended) Restrict the API key:
   - Click on the API key you just created
   - Under "API restrictions", select "Restrict key"
   - Select only "YouTube Data API v3"
   - Under "Application restrictions", you can restrict to your domain

## Step 2: Get YouTube Playlist IDs

For each of your YouTube playlists:

1. Go to YouTube and open your playlist
2. Look at the URL: `https://www.youtube.com/playlist?list=PLxxxxxxxxxxxxxx`
3. The playlist ID is the part after `list=` (e.g., `PLxxxxxxxxxxxxxx`)
4. Copy each playlist ID for the next step

## Step 3: Configure the Application

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your YouTube API key:
   ```
   VITE_YOUTUBE_API_KEY=your_actual_api_key_here
   ```

3. Edit `src/config/youtube.js` and replace the placeholder playlist IDs with your actual playlist IDs:
   ```javascript
   export const PLAYLISTS = {
     offense: 'YOUR_OFFENSE_PLAYLIST_ID',
     defense: 'YOUR_DEFENSE_PLAYLIST_ID',
     slob: 'YOUR_SLOB_PLAYLIST_ID',
     blob: 'YOUR_BLOB_PLAYLIST_ID',
   };
   ```

## Step 4: Test the Application

1. Install dependencies (if not already done):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

4. Verify that:
   - The navigation dropdowns show your video titles
   - Clicking on a video loads the Play page with the correct video
   - The "More" page displays all videos organized by category

## How It Works

### Dynamic Content Flow

1. **Playlists as Categories**: Each YouTube playlist represents a category (Offense, Defense, SLOB, BLOB)
2. **Videos as Plays**: Each video in a playlist becomes a play in that category
3. **Automatic Updates**: When you add/remove/edit videos in YouTube, the changes reflect automatically in the app

### URL Structure

- Home page: `/`
- All plays: `/more`
- Individual play: `/play/{category}/{videoId}`
  - Example: `/play/offense/gCoJPxctDBA`

### Adding New Videos

To add a new play:
1. Upload the video to YouTube
2. Add it to the appropriate playlist
3. The app will automatically detect it on the next page load

**Note**: If a playlist is empty (contains no videos), it will not appear in the navigation or on the More page.

### Video Metadata

The app uses YouTube's video metadata:
- **Title**: Video title becomes the play name
- **Description**: Video description becomes the play description
- **Thumbnail**: Automatically pulled from YouTube

## API Quota Information

The YouTube Data API v3 has daily quotas:
- Default quota: 10,000 units per day
- Reading playlist items: 1 unit per request
- Reading video details: 1 unit per request

With 4 playlists and approximately 50 videos total, initial load costs ~54 units.

## Caching System

**The app now includes automatic caching to minimize API usage:**

- **Cache Duration**: 1 hour (configurable in `src/services/youtube.js`)
- **Storage**: Browser localStorage
- **Cache Keys**:
  - All playlists: `eagles_classroom_all_playlists`
  - Individual playlists: `eagles_classroom_playlist_{playlistId}`
  - Individual videos: `eagles_classroom_video_{videoId}`

### How Caching Works

1. **First Visit**: Data is fetched from YouTube API and cached
2. **Subsequent Visits**: Data is loaded from cache (instant, no API calls)
3. **Cache Expiration**: After 1 hour, fresh data is automatically fetched
4. **Manual Refresh**: Click the refresh button on the "All Plays" page to force update

### Benefits

- **Reduced API Quota Usage**: Most page loads use 0 API units
- **Faster Loading**: Cached data loads instantly
- **Offline Resilience**: App works with cached data even if API is temporarily unavailable

### Adjusting Cache Duration

To change the cache duration, edit `src/services/youtube.js`:

```javascript
// Change from 10 hours to your preferred duration
const CACHE_TTL = 60 * 60 * 10000; // milliseconds
```

Examples:
- 30 minutes: `30 * 60 * 1000`
- 2 hours: `2 * 60 * 60 * 1000`
- 1 day: `24 * 60 * 60 * 1000`

## Troubleshooting

### Error: "YouTube API error: 403"
- Your API key may not be properly configured
- Check that the YouTube Data API v3 is enabled in your Google Cloud project
- Verify the API key is correctly set in `.env`

### Error: "Video not found"
- The video may be private or unlisted
- Ensure videos are set to "Public" in YouTube
- Check that the playlist ID is correct

### Navigation is empty
- Check that playlist IDs are correctly configured in `src/config/youtube.js`
- Verify playlists contain videos
- Check browser console for API errors

### Videos not loading
- Check that your API key has sufficient quota remaining
- Verify the `.env` file is in the project root
- Make sure you restart the dev server after editing `.env`

### Clear cache to see updated content
- Click the "Refresh" button on the "All Plays" page
- Or clear browser localStorage manually in browser DevTools
- Cache automatically expires after 1 hour

## Next Steps

Once everything is working:
1. Monitor cache performance in browser DevTools console (shows "Using cached data" or "Fetching fresh data")
2. Consider adding search/filter functionality to the More page
3. Adjust cache duration based on how frequently you update videos
4. Consider adding video duration or view count metadata to cards
