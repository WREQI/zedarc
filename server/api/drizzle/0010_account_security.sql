ALTER TABLE users ADD COLUMN IF NOT EXISTS display_name varchar(80);
ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar varchar(1000);
ALTER TABLE refresh_tokens ADD COLUMN IF NOT EXISTS user_agent varchar(500);
ALTER TABLE refresh_tokens ADD COLUMN IF NOT EXISTS ip_address varchar(64);
ALTER TABLE refresh_tokens ADD COLUMN IF NOT EXISTS last_used_at timestamptz NOT NULL DEFAULT now();

CREATE TABLE IF NOT EXISTS login_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  action varchar(32) NOT NULL,
  user_agent varchar(500),
  ip_address varchar(64),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS login_history_user_created_idx ON login_history (user_id, created_at);
