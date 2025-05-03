-- cria indices para cada particicao. Indices em:
    -- created_at
    -- origin, created_at
    -- response_status_id, created_at
    -- origin, response_status_id, created_at

-- cria indices para cada particao - created_at
CREATE INDEX IF NOT EXISTS idx_users_surveys_2015_created_at
ON inside.users_surveys_responses_aux_2015 (created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2016_created_at
ON inside.users_surveys_responses_aux_2016 (created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2017_created_at
ON inside.users_surveys_responses_aux_2017 (created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2018_created_at
ON inside.users_surveys_responses_aux_2018 (created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2019_created_at
ON inside.users_surveys_responses_aux_2019 (created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2020_created_at
ON inside.users_surveys_responses_aux_2020 (created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2021_created_at
ON inside.users_surveys_responses_aux_2021 (created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2022_created_at
ON inside.users_surveys_responses_aux_2022 (created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2023_created_at
ON inside.users_surveys_responses_aux_2023 (created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2024_created_at
ON inside.users_surveys_responses_aux_2024 (created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2025_created_at
ON inside.users_surveys_responses_aux_2025 (created_at);


-- indices compostos - origin, created_at
CREATE INDEX IF NOT EXISTS idx_users_surveys_2015_origin_status_created
ON inside.users_surveys_responses_aux_2015 (origin, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2016_origin_status_created
ON inside.users_surveys_responses_aux_2016 (origin, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2017_origin_status_created
ON inside.users_surveys_responses_aux_2017 (origin, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2018_origin_status_created
ON inside.users_surveys_responses_aux_2018 (origin, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2019_origin_status_created
ON inside.users_surveys_responses_aux_2019 (origin, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2020_origin_status_created
ON inside.users_surveys_responses_aux_2020 (origin, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2021_origin_status_created
ON inside.users_surveys_responses_aux_2021 (origin, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2022_origin_status_created
ON inside.users_surveys_responses_aux_2022 (origin, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2023_origin_status_created
ON inside.users_surveys_responses_aux_2023 (origin, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2024_origin_status_created
ON inside.users_surveys_responses_aux_2024 (origin, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2025_origin_status_created
ON inside.users_surveys_responses_aux_2025 (origin, created_at);

-- indices compostos - response_status_id, created_at
CREATE INDEX IF NOT EXISTS idx_users_surveys_2015_origin_status_created
ON inside.users_surveys_responses_aux_2015 (response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2016_origin_status_created
ON inside.users_surveys_responses_aux_2016 (response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2017_origin_status_created
ON inside.users_surveys_responses_aux_2017 (response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2018_origin_status_created
ON inside.users_surveys_responses_aux_2018 (response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2019_origin_status_created
ON inside.users_surveys_responses_aux_2019 (response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2020_origin_status_created
ON inside.users_surveys_responses_aux_2020 (response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2021_origin_status_created
ON inside.users_surveys_responses_aux_2021 (response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2022_origin_status_created
ON inside.users_surveys_responses_aux_2022 (response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2023_origin_status_created
ON inside.users_surveys_responses_aux_2023 (response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2024_origin_status_created
ON inside.users_surveys_responses_aux_2024 (response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2025_origin_status_created
ON inside.users_surveys_responses_aux_2025 (response_status_id, created_at);

-- indices compostos - origin, response_status_id, created_at
CREATE INDEX IF NOT EXISTS idx_users_surveys_2015_origin_status_created
ON inside.users_surveys_responses_aux_2015 (origin, response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2016_origin_status_created
ON inside.users_surveys_responses_aux_2016 (origin, response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2017_origin_status_created
ON inside.users_surveys_responses_aux_2017 (origin, response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2018_origin_status_created
ON inside.users_surveys_responses_aux_2018 (origin, response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2019_origin_status_created
ON inside.users_surveys_responses_aux_2019 (origin, response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2020_origin_status_created
ON inside.users_surveys_responses_aux_2020 (origin, response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2021_origin_status_created
ON inside.users_surveys_responses_aux_2021 (origin, response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2022_origin_status_created
ON inside.users_surveys_responses_aux_2022 (origin, response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2023_origin_status_created
ON inside.users_surveys_responses_aux_2023 (origin, response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2024_origin_status_created
ON inside.users_surveys_responses_aux_2024 (origin, response_status_id, created_at);

CREATE INDEX IF NOT EXISTS idx_users_surveys_2025_origin_status_created
ON inside.users_surveys_responses_aux_2025 (origin, response_status_id, created_at);
