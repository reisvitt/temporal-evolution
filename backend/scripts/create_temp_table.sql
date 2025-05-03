-- cria a tabela temporaria
CREATE TABLE IF NOT EXISTS temp_seed (
  id BIGSERIAL PRIMARY KEY,
  origin VARCHAR(20) NOT NULL,
  response_status_id INTEGER NOT NULL CHECK (response_status_id IN (1, 2, 3, 4, 5, 6))
)