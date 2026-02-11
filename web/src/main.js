import "@css/main.css"

fetch( "http://localhost:3000/health" )
.then( res => res.json() )
.then( json => console.log( json ) )
