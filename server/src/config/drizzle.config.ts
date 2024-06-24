import { defineConfig } from 'drizzle-kit'
export default defineConfig({
	schema: [`src/models/*.ts`],
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: {
		host: <string>process.env.DB_HOST,
		user: <string>process.env.DB_USER,
		password: <string>process.env.DB_PASSWORD,
		database: <string>process.env.DB_DATABASE,
		port: Number(process.env.DB_PORT),
    ssl: false
	},
})
