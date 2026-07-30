# Missing Files Feature

## Problem

When a rescan runs and some previously found files no longer exist on disk (moved, renamed, deleted), the user has no visibility into these "orphaned" video records in the database.

## Design

### 1. Database Migration

Add a `missing` boolean column to the `videos` table:

```sql
ALTER TABLE videos ADD COLUMN missing BOOLEAN NOT NULL DEFAULT FALSE;
```

### 2. Backend Changes

#### 2a. Scanner (`src/services/scanner.rs`)

After scanning all directories, detect missing files:
- Collect all `file_path` values found on disk during the scan
- Query the DB for videos where `file_path` is NOT IN that set and `missing = false`
- Mark those as `missing = true`
- Track `missing_count` for the scan results

#### 2b. ScanStatus (`src/services/mod.rs`)

Add `missing_count: usize` field.

#### 2c. Scan Route (`src/routes/scan.rs`)

- Include `missing_count` in `ScanStatusResponse`
- After scan completes, update the missing detection

#### 2d. Video Model (`src/models/video.rs`)

Add `missing: bool` field to the `Video` struct.

#### 2e. Video Service (`src/services/video.rs`)

Add methods:
- `find_missing(limit, offset)` - returns `Vec<VideoWithMetadata>` of missing videos
- `restore(id)` - clear `missing` flag (called after path update when file exists)
- `update_file_path(id, new_path)` - update `file_path` and clear `missing` if file exists

#### 2f. Video Routes (`src/routes/video.rs`)

Add endpoints:
- `GET /videos/missing` - list all missing videos (with pagination)
- `PUT /videos/:id/path` - update file path (`{ file_path: string }` body)
- `DELETE /videos/bulk-delete` - bulk delete by video IDs (`{ video_ids: string[] }` body)

### 3. Frontend Changes

#### 3a. New Page: `MissingVideosPage.tsx`

A page listing all missing videos with:
- Table/grid of missing videos (file_path, file_name, title, last_updated)
- Per-video actions: "Remove" (delete from DB), "Update Path" (dialog to enter new path)
- Bulk "Remove Selected" action
- "Mark as Found" button (if user knows file is back)
- Empty state when no missing videos

#### 3b. API Client (`api/client.ts`)

Add `missingApi` with methods:
- `getMissingVideos()` - list missing
- `updateFilePath(id, new_path)` - update path
- `bulkDelete(ids)` - bulk remove

#### 3c. Navigation (`App.tsx`, `Layout.tsx`)

Add "Missing" to nav bar under Manage section (or as a separate link).

#### 3d. Scan Alert (`Layout.tsx`)

Show missing count in the scan progress alert.

## File List

**Backend:**
- `migrations/20250729000000_add_missing_column.sql` (new)
- `src/models/video.rs` (add missing field)
- `src/services/mod.rs` (add missing_count to ScanStatus)
- `src/services/scanner.rs` (detect missing files after scan)
- `src/services/video.rs` (add find_missing, update_file_path, restore)
- `src/routes/video.rs` (add missing/path/bulk-delete routes)
- `src/routes/scan.rs` (expose missing_count in status)

**Frontend:**
- `frontend/src/pages/MissingVideosPage.tsx` (new)
- `frontend/src/api/client.ts` (add missing API methods, types)
- `frontend/src/App.tsx` (add route)
- `frontend/src/components/Layout.tsx` (add nav item)
