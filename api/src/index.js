import express from "express"
import cors from "cors"
import * as Routes from "#routes"

const PORT = process.env.PORT
const app = express()

// Middlewares
app.use( cors() )

// Routes

app.use( "/", Routes.Main )
app.use( "/auth", Routes.Auth )

app.listen( PORT, () => console.info( `API ready at: ${ PORT }` ) )
