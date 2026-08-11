CREATE TABLE IF NOT EXISTS watchlist_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name varchar(64) NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, name)
);

ALTER TABLE watchlist_items ADD COLUMN IF NOT EXISTS group_id uuid REFERENCES watchlist_groups(id) ON DELETE SET NULL;
CREATE INDEX IF NOT EXISTS watchlist_groups_user_sort_idx ON watchlist_groups (user_id, sort_order, created_at);
CREATE INDEX IF NOT EXISTS watchlist_items_group_sort_idx ON watchlist_items (user_id, group_id, sort_order, created_at);
