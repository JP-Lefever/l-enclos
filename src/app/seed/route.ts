import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

async function dropDb() {
	await sql`
    DROP SCHEMA public CASCADE
    CREATE SCHEMA public
    `;
}

export async function GET() {
	try {
		await sql.begin(async () => {
			dropDb;
		});
	} catch (error) {
		return Response.json({ error });
	}
}
