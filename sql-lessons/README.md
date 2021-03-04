## Install instructions

#### Docker Services SQLite 3, Postgres 12, MySQL 8
`$ docker-compose up -d`

####  install Node.js dependies
`$ npm install` \
If you have build proble with SQLite 3 module on the Wondows run \
`$ npm config set msvs_version 2015`


## Documentation
### Common paradigms
1. JOIN table operations
![JOIN Scheme](./sql_joins.jpg)
### Postgres commands
1. Show list of databases\
`# \l` 
2. Connect to database\
`# \c db_name`
3. Show list of tables current db\
`# \dt` 
4. Show data and current status of connected database\
`# \d table_name`
5. Show extend data and current status of specify table\
`# \d+ table_name`
### Postgres data types
1. Create primary serial key with autoincrement on insert new line\
`<varname> SERIAL PRIMARY KEY`
2. Create char column with spedivy length\
`<varname> CARCHAR(255)`
3. Create text column with large text\
`<varname> TEXT`
4. Create integer column for numbers\
`<varname> INTEGER`
5. Create integer column with external references or constrains\
`<varname> INTEGER REFERENCES <table_name(column_name)>`

### Postgres column contstraints
1. Ensures that a column cannot have NULL value\
`NOT NULL`
2. Ensures that all values in a column are different\
`UNIQUE`
3. Uniquely identifies each row/record in a database table\
`PRIMARY KEY`
4. Constrains data based on columns in other tables\
`FOREIGN KEY`
5. The CHECK constraint ensures that all values in a column satisfy certain conditions\
`[CONSTRAINT] CHECK(expression)`
6. The EXCLUDE constraint ensures that if any two rows are compared on the specified column(s) or expression(s) using the specified operator(s), not all of these comparisons will return TRUE\
`[CONSTRAINT] EXCLUSION(expression)`
7. Set constraint for PRIMARY KEY, UNIQUE, CHECK
``

#### SQL Consructions
1. Creating new database\
`# CREATE DATABASE db_name`
2. Create new table(s)\
`# CREATE TABLE [IF NOT EXISTS] db_name`
3. Delete new table(s)\
`# DROP TABLE [IF EXISTS] db_name`
4. Delete foreign key for table\
`# ALTER TABLE table1 DROP CONSTRAINT table1_table2_col_fkey`
5. Insert new data to table (**C**RUD)\
`# INSERT INTO table_name (col1, col2, ..) VALUES('str_val', int_val, ...)`
6. Select all columns data from table (C**R**UD)\
`# SELECT * FROM table_name`
7. Select specify columns data from table (C**R**UD)\
`# SELECT col_1, col_2,... FROM table_name`
8. Select all columns data from table with short aliases (C**R**UD)\
`# SELECT tb1.* FROM table_name tb1`
9. Update specify columns in table (CR**U**D)\
`# UPDATE table_name SET col1='val', col2='val' WHERE col3='val';`
10. Delete row(s) by condition (CRU**D**)\
`# DELETE FROM table_name WHERE col1='val1'`
11. Change table column type\
`# ALTER TABLE table_name ALTER COLUMN column_name TYPE VARCHAR(50);`
12. Change a default value of the column\
`# ALTER TABLE table_name ALTER COLUMN column_name [SET DEFAULT value | DROP DEFAULT];`
13. Add a new column\
`# ALTER TABLE table_name ADD COLUMN column_name VARCHAR(50) column_constraint;`
14. Rename column\
`# ALTER TABLE table_name RENAME COLUMN column_name TO new_column_name;`
15. Drop column\
`# ALTER TABLE table_name DROP COLUMN column_name;`
16. Set NOT NULL and DROP NOT NULL\
`# ALTER TABLE table_name ALTER COLUMN column_name [SET NOT NULL| DROP NOT NULL];`
17. To add a CHECK/EXCLUSION constraint\
`# ALTER TABLE table_name ADD [CHECK | EXCLUSION] expression;`
18. To add a constraint to a table\
`# ALTER TABLE table_name ADD CONSTRAINT col1 UNIQUE ( col2 );`\
`# ALTER TABLE table_name ADD CONSTRAINT col1 CHECK ( col2 > col1 );`\
`# ALTER TABLE table_name ADD CONSTRAINT col1 EXCLUDE ( col2 > col1 );`
19. Drop constraint\
`# ALTER TABLE table_name DROP CONSTRAINT table_name_col_name_fkey;`
1. Rename table\
`# ALTER TABLE table_name RENAME TO new_table_name;`
21. Change cross column references constraints\
`# ALTER TABLE table2 RENAME CONSTRAINT table2_col_fk_fkey TO table1_col_fkey;`
22. The GROUP BY clause is used to define groups of output rows to which aggregate functions (COUNT, MIN, MAX, AVG, and SUM) can be applied\
`SELECT col1, MAX(col2) FROM table_name GROUP BY col1 [HAVING (MAX|MIN|AVG|COUNT|SUM)(col3)>8000];`
### Examples for create tables and relations

#### Basic relation scheme

![Relation Diagrams](./relation_diagram.svg)

1. Create table *customer* \
`CREATE TABLE IF NOT EXISTS customer
  (
     id    SERIAL PRIMARY KEY,
     name  VARCHAR(255),
     phone VARCHAR(20),
     email VARCHAR(255)
  );`
2. Create table *product* \
`CREATE TABLE IF NOT EXISTS product
  (
     id          SERIAL PRIMARY KEY,
     name        VARCHAR(255),
     description TEXT,
     price       INTEGER
  );`
3. Create table *product_photo* with external table foreign key(references) \
`CREATE TABLE IF NOT EXISTS product_photo
  (
     id         SERIAL PRIMARY KEY,
     url        VARCHAR(255),
     product_id INTEGER REFERENCES product(id)
  );`
4. Create table *cart* with external table foreign key(references) \
`CREATE TABLE IF NOT EXISTS cart
  (
     id          SERIAL PRIMARY KEY,
     customer_id INTEGER REFERENCES customer(id)
  );`
5. Create table *cart_product* with external table foreign keys(references) \
`CREATE TABLE IF NOT EXISTS cart_product
  (
     cart_id    INTEGER REFERENCES cart(id),
     product_id INTEGER REFERENCES product(id)
  );`
6. Insert testing data to table *customer* \
`INSERT INTO customer
            (name,
             phone,
             email)
VALUES      ('John',
             '+7635489123',
             'john@gmail.com'),
            ('Marta',
             '+7895544545',
             'marta@gmail.com'),
            ('Lukas',
             '+77874545445',
             'lukas@gmail.com');`
7. Insert testing data to table *product* \
`INSERT INTO product
            (name,
             description,
             price)
VALUES      ('iPhone',
             'It is the best iPhone 12',
             '1000000'),
            ('iWatch',
             'Best Apple iWatch',
             '500000');`
8. Insert testing data to table *product_photo* \
`INSERT INTO product_photo
            (url,
             product_id)
VALUES      ('iphone_photo.png',
             1),
            ('iwatch_photo.png',
             2);`
9. Select product and his photo with **LEFT JOIN** from *product* and *product_photo* \
`SELECT pp.*,
       p.*
FROM   product_photo pp
       LEFT JOIN product p
              ON p.id = pp.product_id;`
10. Update table row \
`UPDATE product_photo
SET    url = 'iwatch_phot.jpg'
WHERE  id = 2;`
11. `DELETE FROM product_photo
WHERE  product_id = 1;`

### CRUD Realization
### Dependencies

| Database | Documentation | NPM module |
| :------------ |:---------------:| -----:|
| Postgres   |https://www.npmjs.com/package/pg|pg|
| MySQL      |https://www.npmjs.com/package/mysql|mysql|
| SQLite     |https://www.npmjs.com/package/sqlite3|sqlite3|

