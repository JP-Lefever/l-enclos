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
async function seedAgenda() {
	await sql` CREATE TABLE IF NOT EXISTS agenda(
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	place VARCHAR(255) NOT NULL,
	date DATE NOT NULL,
	public VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	hour VARCHAR(255) NOT NULL,
	is_passed BOOLEAN NOT NULL DEFAULT FALSE,
	spectacle_id INT);
`;
}

async function seedIntervention(){
	await sql`
	CREATE TABLE IF NOT EXISTS intervention(
	    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
		year VARCHAR(255) NOT NULL,
		label VARCHAR(255) NOT NULL,
		is_passed BOOLEAN NOT NULL DEFAULT FALSE,
		mediation_id INT
	);
`;
}

export async function GET() {
	try {
		await sql.begin(async () => {
			initUuid();
			contact();
			role();
			users();
			seedAgenda();
			seedIntervention();
		});
		return Response.json({ message: "Db mise a jour" });
	} catch (error) {
		return Response.json({ error });
	}
}
