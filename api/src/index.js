import express from "express"
import cors from "cors"
import { query } from "./library/query.js"

console.log( await query( "select version()" ) )

const PORT = process.env.PORT
const app = express()

// Middlewares
app.use( cors() )

// Routes
app.get( "/health", ( req, res ) => res.send( { status: "ok" } ) )

app.listen( PORT, () => console.info( `API ready at: ${ PORT }` ) )
