import { Router } from "express"
import { query } from "#lib/query"

export const router = new Router()

router.post( "/signup", async ( req, res ) => {

	const { email, password, name } = req.body

	await query( `
		insert into
			users(email, password, name)
			values ($1, $2, $3)
	`, email, password, name )

	res.status( 201 ).send( { ok: true } )
} )

router.post( "/login", ( req, res ) => {

	res.send( { ok: true} )
} )
