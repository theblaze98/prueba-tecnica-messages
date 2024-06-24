import { pgTable, varchar, text, timestamp } from 'drizzle-orm/pg-core'

export const MessagesTable = pgTable('messages', {
	id: varchar('id', { length: 255 }).primaryKey().notNull(),
	name: varchar('name', { length: 255 }).notNull(),
	message: text('message').notNull(),
	email: varchar('email', { length: 255 }).notNull(),
	createdAt: timestamp('createdAt').defaultNow()
})
