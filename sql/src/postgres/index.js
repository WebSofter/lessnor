import { pool, client } from "./config"
const sql = `CREATE TABLE IF NOT EXISTS users (
    id    integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name   varchar(40) NOT NULL CHECK (name <> ''),
    age integer,
    role_id integer
);
CREATE TABLE IF NOT EXISTS roles (
    id    integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name   varchar(40),
    status varchar(40)
);`
client.query(sql, (err, res) => {
    console.error(err, res)
    client.end()
})
/*
pool.query('SELECT NOW()', (err, res) => {
  console.error(err, res)
  pool.end()
})
*/
/*
client.query('SELECT NOW()', (err, res) => {
  console.error(err, res)
  client.end()
})
*/

//docker exec -it sql-lessons_pgsql_1 bash
//or for Linux
//docker exec -it sql-lessons_pgsql_1 /bin/bash
//su postgres
//psql
//or
//psql -d db -U admin