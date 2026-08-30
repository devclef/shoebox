use sqlx::{Pool, Postgres, PgPool};
use std::fs;
use std::path::Path;
use tracing::info;

use crate::config::Config;
use crate::error::{AppError, Result};

const PG_URL_EXAMPLE: &str = "postgresql://user:password@localhost:5432/shoebox";

pub async fn init_db(config: &Config) -> Result<Pool<Postgres>> {
    let db_url = config.database.url.trim();
    info!("Database URL: {}", db_url);

    // Fail fast with an actionable message when DATABASE_URL is missing
    if db_url.is_empty() || db_url == "not_set" {
        return Err(AppError::ConfigError(format!(
            "DATABASE_URL is not set. Shoebox requires a PostgreSQL connection URL, \
             e.g. {PG_URL_EXAMPLE}."
        )));
    }

    // Check if this is a PostgreSQL URL
    if db_url.starts_with("postgres:") || db_url.starts_with("postgresql:") {
        // Initialize PostgreSQL
        init_postgres(db_url).await
    } else if db_url.starts_with("sqlite:") || db_url.starts_with("sqlite3:") {
        Err(AppError::ConfigError(format!(
            "SQLite is not yet supported. Please use a PostgreSQL connection URL, \
             e.g. {PG_URL_EXAMPLE}."
        )))
    } else {
        // Unrecognized URL scheme
        Err(AppError::ConfigError(format!(
            "Unsupported DATABASE_URL scheme ({db_url}). Only PostgreSQL is supported, \
             e.g. {PG_URL_EXAMPLE}."
        )))
    }
}

async fn init_postgres(db_url: &str) -> Result<Pool<Postgres>> {
    // Create migrations directory if it doesn't exist
    ensure_migrations_dir()?;

    // Connect to the PostgreSQL database
    info!("Connecting to PostgreSQL database at {}", db_url);
    let pool = PgPool::connect(db_url)
        .await
        .map_err(AppError::Database)?;

    // Run migrations
    info!("Running migrations");
    sqlx::migrate!("./migrations")
        .run(&pool)
        .await
        .map_err(|e| AppError::Database(sqlx::Error::Migrate(Box::new(e))))?;

    info!("Database initialized successfully");
    Ok(pool)
}

fn ensure_migrations_dir() -> Result<()> {
    let migrations_dir = Path::new("./migrations");
    if !migrations_dir.exists() {
        info!("Creating migrations dir");
        fs::create_dir_all(migrations_dir).map_err(|e| {
            AppError::Io(std::io::Error::other(
                format!("Failed to create migrations directory: {e}"),
            ))
        })?;

        // Create initial migration file
        info!("create initial migration");
        create_initial_migration(migrations_dir)?;
    }
    Ok(())
}

fn create_initial_migration(migrations_dir: &Path) -> Result<()> {
    let migration_file = migrations_dir.join("20240101000000_initial_schema.sql");
    let migration_content = r#"-- Initial schema for Shoebox - a digital shoebox for your videos
-- Up migration

-- Videos table
CREATE TABLE IF NOT EXISTS videos (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    description TEXT,
    created_date VARCHAR(50),
    file_size BIGINT,
    thumbnail_path VARCHAR(255),
    rating INTEGER CHECK (rating BETWEEN 1 AND 5 OR rating IS NULL),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tags table
CREATE TABLE IF NOT EXISTS tags (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- People table
CREATE TABLE IF NOT EXISTS people (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Video-Tag relationship table
CREATE TABLE IF NOT EXISTS video_tags (
    video_id VARCHAR(36) NOT NULL,
    tag_id VARCHAR(36) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (video_id, tag_id),
    FOREIGN KEY (video_id) REFERENCES videos (id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE
);

-- Video-People relationship table
CREATE TABLE IF NOT EXISTS video_people (
    video_id VARCHAR(36) NOT NULL,
    person_id VARCHAR(36) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (video_id, person_id),
    FOREIGN KEY (video_id) REFERENCES videos (id) ON DELETE CASCADE,
    FOREIGN KEY (person_id) REFERENCES people (id) ON DELETE CASCADE
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_videos_file_path ON videos (file_path);
CREATE INDEX IF NOT EXISTS idx_videos_created_date ON videos (created_date);
CREATE INDEX IF NOT EXISTS idx_tags_name ON tags (name);
CREATE INDEX IF NOT EXISTS idx_people_name ON people (name);

-- Down migration
-- DROP TABLE IF EXISTS video_people;
-- DROP TABLE IF EXISTS video_tags;
-- DROP TABLE IF EXISTS people;
-- DROP TABLE IF EXISTS tags;
-- DROP TABLE IF EXISTS videos;
"#;

    fs::write(migration_file, migration_content).map_err(AppError::Io)?;
    info!("Created initial migration file");
    Ok(())
}
