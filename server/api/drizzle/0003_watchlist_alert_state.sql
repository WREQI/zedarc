ALTER TABLE price_alerts ADD COLUMN IF NOT EXISTS last_triggered_at timestamptz;
CREATE INDEX IF NOT EXISTS watchlist_items_user_sort_idx ON watchlist_items (user_id, sort_order, created_at);
