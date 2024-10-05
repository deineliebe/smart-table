const { Client } = require('pg');

export const client = new Client({
	user: process.env.PGSQL_USER,
	password: process.env.PGSQL_PASSWORD,
	host: process.env.PGSQL_HOST,
	port: process.env.PGSQL_PORT,
	database: process.env.PGSQL_DATABASE
});
