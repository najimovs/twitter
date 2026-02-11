import { Router } from "express"

export const router = new Router()

router.get( "/signup", ( req, res ) => {

	res.send( { ok: true} )
} )

router.get( "/login", ( req, res ) => {

	res.send( { ok: true} )
} )
