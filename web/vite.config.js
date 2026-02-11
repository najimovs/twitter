import path from "node:path"
import { defineConfig } from "vite"

export default defineConfig( {
	server: {
		host: true,
	},
	build: {
		target: "esnext",
		chunkSizeWarningLimit: 2048,
	},
	resolve: {
		alias: {
			"@app": path.resolve( __dirname, "./src/app" ),
			"@css": path.resolve( __dirname, "./src/css" ),
			"@lib": path.resolve( __dirname, "./src/library" ),
		},
	}
} )
