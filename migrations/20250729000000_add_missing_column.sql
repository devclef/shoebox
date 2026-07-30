-- Add missing column to videos table
-- Tracks videos whose files no longer exist on disk after a scan

-- Up migration
ALTER TABLE videos ADD COLUMN missing BOOLEAN NOT NULL DEFAULT FALSE;

-- Down migration
-- ALTER TABLE videos DROP COLUMN missing;
