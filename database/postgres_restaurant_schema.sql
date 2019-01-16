
CREATE TABLE restaurants (
 ID integer NOT NULL PRIMARY KEY,
 name text NOT NULL,
 phototags jsonb NOT NULL
);

\COPY restaurants FROM './generated_data/seed_data17.csv' DELIMITERS '|' CSV QUOTE '''';

CREATE TABLE test (
 ID integer NOT NULL PRIMARY KEY,
 name text NOT NULL,
 phototags jsonb NOT NULL
);

\COPY test FROM './generated_data/seed_data17.csv' DELIMITERS '|' CSV QUOTE '''';