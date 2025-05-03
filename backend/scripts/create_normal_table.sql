-- cria o schema
CREATE SCHEMA IF NOT EXISTS inside;

-- cria a tabela
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux (
  id BIGSERIAL PRIMARY KEY,
  origin VARCHAR(20) NOT NULL,
  response_status_id INTEGER NOT NULL CHECK (response_status_id IN (1, 2, 3, 4, 5, 6)),
  created_at TIMESTAMP NOT NULL
)