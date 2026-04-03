# Shoebox - AI Collaboration Guide

## Project Overview

**Shoebox** is a self-hosted video organization and preservation application for creative workflows. Unlike photo management services, it focuses on **video cataloging** with export-oriented features for use in external video editors.

## Technology Stack

- **Backend**: Rust 2021, Axum 0.8, Tokio, SQLx 0.8
- **Frontend**: React 18, TypeScript, Vite 6, Chakra UI 2
- **Database**: PostgreSQL (officially supported)
- **Media Processing**: FFmpeg (system binary)
- **Deployment**: Docker, Docker Compose, Helm

## Development Workflows

### Backend
```bash
cargo run              # Run backend (localhost:3000)
cargo build --release  # Build release binary
cargo clippy           # Linting
```

### Frontend
```bash
cd frontend
yarn install           # Install dependencies
yarn dev               # Dev server (localhost:5173)
yarn build             # Production build
```

### Full Stack
```bash
docker-compose up -d   # Run full stack with containers
```

## Key Configuration

Critical environment variables:
- `SERVER_HOST` - Bind host (default: `127.0.0.1`)
- `SERVER_PORT` - Server port (default: `3000`)
- `DATABASE_URL` - Database connection string
- `MEDIA_SOURCE_PATHS` - Video directories to scan
- `THUMBNAIL_PATH` - Thumbnail storage directory
- `EXPORT_BASE_PATH` - Export destination directory

## Architecture Notes

### Backend Structure (`/src/`)
- `main.rs` - Entry point, router setup
- `config.rs` - Environment-based configuration
- `db.rs` - Database initialization & migrations
- `models/` - Data models (Video, Tag, Person, Location, Event, Shoebox)
- `routes/` - API endpoints
- `services/` - Business logic (scanner, thumbnail, video, export)

### Frontend Structure (`/frontend/src/`)
- `App.tsx` - Main app with routing
- `api/client.ts` - Axios API client
- `components/` - Reusable UI components
- `pages/` - Page components
- `contexts/` - React contexts (ScanContext)

### State Management
`AppState` holds `DbPool`, `Config`, and `ScanStatus` (Arc+RwLock pattern).

## Important Conventions

1. **Database**: PostgreSQL only (despite SQLite in Cargo.toml)
2. **UUIDs**: All IDs use string UUIDs
3. **Error Handling**: Use `AppError` enum with `IntoResponse` trait
4. **FFmpeg**: Called as system binary via `std::process::Command`
5. **Migrations**: Use `sqlx::migrate!("./migrations")` pattern
6. **Media Source Paths Format**: `/path/to/videos;/original/path;original_extension;default_shoebox`

## API Routes (`/api`)

- `/videos` - CRUD + search, bulk update
- `/tags`, `/people`, `/locations`, `/events`, `/shoeboxes` - Entity management
- `/scan` - Trigger video directory scan
- `/export` - Export selected videos
- `/system` - System info endpoint
