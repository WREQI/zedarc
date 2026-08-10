ALTER TABLE price_alerts ADD COLUMN IF NOT EXISTS repeat boolean NOT NULL DEFAULT false;
ALTER TABLE trade_orders ADD COLUMN IF NOT EXISTS fee numeric(20,6) NOT NULL DEFAULT 0;
CREATE TABLE IF NOT EXISTS notifications (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, type varchar(32) NOT NULL, title varchar(200) NOT NULL, content varchar(2000) NOT NULL, read_at timestamptz, created_at timestamptz NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS notifications_user_created_idx ON notifications (user_id, created_at);
