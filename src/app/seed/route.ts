import postgres from "postgres";

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

export async function GET() {
	try {
		await sql.begin(async () => {
			initUuid();
			contact();
		});
		return Response.json({ message: "Db mise a jour" });
	} catch (error) {
		return Response.json({ error });
	}
}
