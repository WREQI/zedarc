CREATE TABLE IF NOT EXISTS news_favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  news_id varchar(128) NOT NULL REFERENCES news(id) ON DELETE CASCADE,
  note varchar(500),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, news_id)
);
CREATE INDEX IF NOT EXISTS news_favorites_user_created_idx ON news_favorites (user_id, created_at);
