ALTER TABLE trade_orders ADD COLUMN IF NOT EXISTS request_id varchar(128);
CREATE UNIQUE INDEX IF NOT EXISTS trade_orders_user_request_idx ON trade_orders (user_id, request_id) WHERE request_id IS NOT NULL;
CREATE TABLE IF NOT EXISTS trade_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  order_id uuid NOT NULL REFERENCES trade_orders(id) ON DELETE CASCADE,
  code varchar(32) NOT NULL,
  side varchar(8) NOT NULL,
  quantity integer NOT NULL,
  price numeric(20, 6) NOT NULL,
  fee numeric(20, 6) NOT NULL DEFAULT 0,
  amount numeric(20, 6) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS trade_transactions_user_created_idx ON trade_transactions (user_id, created_at);