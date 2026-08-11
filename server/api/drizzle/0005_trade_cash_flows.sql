CREATE TABLE IF NOT EXISTS trade_cash_flows (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  order_id uuid NOT NULL REFERENCES trade_orders(id) ON DELETE CASCADE,
  transaction_id uuid NOT NULL REFERENCES trade_transactions(id) ON DELETE CASCADE,
  type varchar(16) NOT NULL,
  amount numeric(20, 6) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS trade_cash_flows_user_created_idx ON trade_cash_flows (user_id, created_at);
