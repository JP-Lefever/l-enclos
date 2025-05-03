import postgres from "postgres";
import argon from "argon2";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

async function initUuid() {
	await sql`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
    `;
}

async function contact() {
	await sql`
    CREATE TABLE IF NOT EXISTS contact(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    lastname VARCHAR(255) NOT NULL,
    organism VARCHAR(255),
    message TEXT NOT NULL,
    date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    is_treated BOOLEAN NOT NULL DEFAULT FALSE
    );
    `;
}

async function role() {
	await sql`
    CREATE TABLE IF NOT EXISTS role(
    id SERIAL PRIMARY KEY,
    LABEL VARCHAR(50)
    );
    `;
}

async function users() {
	await sql`
    CREATE TABLE IF NOT EXISTS users(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id)
    );
    `;
}

export async function GET() {
	try {
		await sql.begin(async () => {
			role();
			users();
		});
		return Response.json({ message: "Db mise a jour" });
	} catch (error) {
		return Response.json({ error });
	}
}
