
-- cria o schema
CREATE SCHEMA IF NOT EXISTS inside;

-- cria a tabela com particao por created_at
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux (
    id BIGSERIAL,
    origin VARCHAR(20) NOT NULL,
    response_status_id INTEGER NOT NULL CHECK (response_status_id IN (1, 2, 3, 4, 5, 6)),
    created_at TIMESTAMP NOT NULL,
    PRIMARY KEY (id, created_at)
) PARTITION BY RANGE (created_at);

-- Partições por ano (2015–2025)
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2015
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2015-01-01') TO ('2016-01-01');
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2016
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2016-01-01') TO ('2017-01-01');
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2017
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2017-01-01') TO ('2018-01-01');
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2018
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2018-01-01') TO ('2019-01-01');
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2019
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2019-01-01') TO ('2020-01-01');
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2020
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2020-01-01') TO ('2021-01-01');
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2021
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2021-01-01') TO ('2022-01-01');
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2022
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2022-01-01') TO ('2023-01-01');
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2023
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2024
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
CREATE TABLE IF NOT EXISTS inside.users_surveys_responses_aux_2025
    PARTITION OF inside.users_surveys_responses_aux
    FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');