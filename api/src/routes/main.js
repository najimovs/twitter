import { Router } from "express"
import { query } from "../library/query.js"

const router = new Router()

router.get( "/", ( req, res ) => {

	res.send( { verison: 1 } )
} )

router.get( "/health", async ( req, res ) => {

	const dbTest = await query( "select version()" )

	res.send( {
		ok: true,
		pgVersion: dbTest[ 0 ].version,
	} )
} )

export default router
