#!/bin/bash

TEMP_TABLE_NAME="temp_seed"
TABLE_NAME="inside.users_surveys_responses_aux"

# Cria tabelas se nao existirem
psql $DATABASE_URL -f /usr/src/app/scripts/create_temp_table.sql
psql $DATABASE_URL -f /usr/src/app/scripts/create_partitions.sql
psql $DATABASE_URL -f /usr/src/app/scripts/create_partitions_indexes.sql

curl -o seed.sql $SEED_URL

# Verifica se a tabela temporária está vazia
COUNT_TEMP_TABLE=$(psql $DATABASE_URL -t -c "SELECT COUNT(*) FROM $TEMP_TABLE_NAME;")

# Remove espaços e converte para número
COUNT_TEMP_TABLE=$(echo $COUNT_TEMP_TABLE | tr -d '[:space:]')

if [ "$COUNT_TEMP_TABLE" -eq 0 ]; then
  echo "Tabela $TEMP_TABLE_NAME está vazia. Executando seed.sql..."

  # Cria uma tabela temporaria para carregar os dados do seed.sql

  # Carrega o seed.sql na tabela temporária, substituindo o nome da tabela
  echo "Carregando seed.sql na tabela temporária..."
  cat /usr/src/app/scripts/seed.sql | sed "s/INSERT INTO $TABLE_NAME/INSERT INTO $TEMP_TABLE_NAME/" | psql $DATABASE_URL

  echo "Seed aplicado com sucesso na tabela $TEMP_TABLE_NAME."
else
  echo "Tabela $TEMP_TABLE_NAME não está vazia. Pulando seed.sql."
fi

# Verifica se a tabela está vazia
COUNT=$(psql $DATABASE_URL -t -c "SELECT COUNT(*) FROM $TABLE_NAME;")

# Remove espaços e converte para número
COUNT=$(echo $COUNT | tr -d '[:space:]')

if [ "$COUNT" -eq 0 ]; then

  echo "Tabela $TABLE_NAME está vazia. Inserindo a partir da tabela $TEMP_TABLE_NAME com created_at aleatório..."

  # Insere dados na tabela final com created_at aleatório (ultimos 10 anos)
  psql $DATABASE_URL -c "INSERT INTO $TABLE_NAME (id, origin, response_status_id, created_at)
    SELECT 
      id,
      origin,
      response_status_id,
      NOW() - INTERVAL '10 years' * random() as created_at
    FROM $TEMP_TABLE_NAME LIMIT 1000;"

  echo "Itens inseridos com sucesso na tabela $TABLE_NAME."
else
  echo "Tabela $TABLE_NAME não está vazia. Pulando inserção."
fi

# Inicia a aplicação
echo "Iniciando a aplicação..."
npm run start