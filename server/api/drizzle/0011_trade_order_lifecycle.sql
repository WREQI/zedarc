ALTER TABLE trade_orders ADD COLUMN IF NOT EXISTS status_reason varchar(500);
ALTER TABLE trade_orders ADD COLUMN IF NOT EXISTS status_updated_at timestamptz NOT NULL DEFAULT now();
CREATE TABLE IF NOT EXISTS trade_order_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  order_id uuid NOT NULL REFERENCES trade_orders(id) ON DELETE CASCADE,
  status varchar(16) NOT NULL,
  reason varchar(500),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS trade_order_events_order_created_idx ON trade_order_events (order_id, created_at);
CREATE INDEX IF NOT EXISTS trade_order_events_user_created_idx ON trade_order_events (user_id, created_at);
UPDATE trade_orders SET status_updated_at = created_at WHERE status_updated_at IS NULL;
