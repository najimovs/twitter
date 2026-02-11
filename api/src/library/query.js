import { Pool } from "pg"

export const pool = new Pool( {
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DBNAME,
} )

let client = null

export async function query( SQL, ...params ) {

	try {

		client = await pool.connect()

		const { rows } = await client.query( SQL, params )

		return rows
	}
	finally {

		if ( client ) {

			client.release()
		}
	}
}
