
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

console.log(result);

import { Client, Pool } from 'pg';

export const pool = new Pool({
	user: process.env.PGSQL_USER,
	password: process.env.PGSQL_PASSWORD,
	host: process.env.PGSQL_HOST,
	port: Number(process.env.PGSQL_PORT),
	database: process.env.PGSQL_DATABASE
});

export const client = new Client();

client.connect((err) => {
	client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
		console.log(err ? err.stack : res.rows[0].message); // Hello World!
		client.end();
	});
});

export const result = await pool.query('SELECT NOW()');
