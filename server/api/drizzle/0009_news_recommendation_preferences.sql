CREATE TABLE IF NOT EXISTS news_recommendation_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  kind varchar(16) NOT NULL,
  value varchar(300) NOT NULL,
  action varchar(32) NOT NULL,
  reason varchar(200),
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT news_recommendation_preferences_kind_check CHECK (kind IN ('article', 'keyword')),
  CONSTRAINT news_recommendation_preferences_action_check CHECK (action IN ('dislike', 'block')),
  UNIQUE (user_id, kind, value)
);
CREATE INDEX IF NOT EXISTS news_recommendation_preferences_user_created_idx
  ON news_recommendation_preferences (user_id, created_at);
