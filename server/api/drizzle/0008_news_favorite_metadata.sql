ALTER TABLE news_favorites ADD COLUMN IF NOT EXISTS category varchar(64) NOT NULL DEFAULT '未分类';
ALTER TABLE news_favorites ADD COLUMN IF NOT EXISTS tags jsonb NOT NULL DEFAULT '[]'::jsonb;
CREATE INDEX IF NOT EXISTS news_favorites_user_category_idx ON news_favorites (user_id, category);
