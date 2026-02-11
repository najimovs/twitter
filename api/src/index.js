import express from "express"
import cors from "cors"
import MainRoutes from "./routes/main.js"
import AuthRoutes from "./routes/auth.js"

const PORT = process.env.PORT
const app = express()

// Middlewares
app.use( cors() )

// Routes

app.use( "/", MainRoutes )
app.use( "/auth", AuthRoutes )

app.listen( PORT, () => console.info( `API ready at: ${ PORT }` ) )
