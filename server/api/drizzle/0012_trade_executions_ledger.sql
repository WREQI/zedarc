CREATE TABLE IF NOT EXISTS trade_executions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  order_id uuid NOT NULL REFERENCES trade_orders(id) ON DELETE CASCADE,
  request_id varchar(128) NOT NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  price numeric(20, 6) NOT NULL CHECK (price > 0),
  fee numeric(20, 6) NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (order_id, request_id)
);
CREATE INDEX IF NOT EXISTS trade_executions_user_created_idx ON trade_executions (user_id, created_at);

CREATE TABLE IF NOT EXISTS trade_ledger_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  execution_id uuid NOT NULL REFERENCES trade_executions(id) ON DELETE CASCADE,
  account varchar(32) NOT NULL,
  asset varchar(32) NOT NULL,
  amount numeric(20, 6) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (execution_id, account)
);
CREATE INDEX IF NOT EXISTS trade_ledger_user_created_idx ON trade_ledger_entries (user_id, created_at);
