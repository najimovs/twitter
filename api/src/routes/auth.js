import { Router } from "express"

const router = new Router()

router.get( "/signup", ( req, res ) => {

	res.send( { ok: true} )
} )

router.get( "/login", ( req, res ) => {

	res.send( { ok: true} )
} )

export default router
