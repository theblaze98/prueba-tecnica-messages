CREATE TABLE IF NOT EXISTS "messages" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"message" text NOT NULL,
	"email" varchar(255) NOT NULL
);
