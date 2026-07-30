# Fix Video Playback

## Root Cause

Commit `29b4655` upgraded `react-player` from `2.13.0` to `3.4.0`. In react-player v3, the internal architecture changed significantly:

1. The `canPlay.html` pattern only matches URLs with video file extensions (`.mp4`, `.webm`, `.mov`, etc.)
2. Our streaming URL `/api/videos/${id}/stream` has no file extension
3. While react-player v3 nominally has the html player as a "fallback", the behavior changed from v2's FilePlayer which was more permissive

Result: video playback silently fails — no player renders.

## Fix: Replace react-player with native `<video>` element

Since we only serve local video files (not YouTube, Vimeo, etc.), `react-player` is overkill. The native HTML5 `<video>` element handles MP4/WebM playback natively.

### Changes

1. **`frontend/src/pages/VideoDetailPage.tsx`**:
   - Remove `import ReactPlayer from 'react-player'`
   - Replace `<ReactPlayer src={...} controls width="100%" height="auto" style={{ aspectRatio: '16/9' }} />` with:
     ```tsx
     <video src={`/api/videos/${video.id}/stream`} controls width="100%" style={{ aspectRatio: '16/9', objectFit: 'contain' }} />
     ```

2. **`frontend/src/pages/UnreviewedPage.tsx`**:
   - Same replacement for the ReactPlayer component

3. **`frontend/package.json`**:
   - Remove `"react-player": "^3.4.0"` dependency

4. **`frontend/yarn.lock`**:
   - Run `yarn install` to regenerate

### Why this is better

- No heavy dependencies (react-player v3 bundles hls.js, dash.js, etc. — 2MB+)
- Native browser video controls (better UX)
- No library compatibility concerns
- Simpler codebase
