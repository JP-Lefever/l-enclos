import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, {
	ssl: "require",
});

async function initUuid() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
}

async function seedRole() {
	await sql`
    CREATE TABLE IF NOT EXISTS role (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    is_admin BOOLEAN,
    is_user BOOLEAN
    );
    `;
}

async function seedUser() {
	await sql`
    CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role_id  UUID NOT NULL,
    CONSTRAINT fk_users_role FOREIGN KEY(role_id) REFERENCES role(id)
    );
    `;
}

async function seedCompagnie() {
	await sql`
    CREATE TABLE IF NOT EXISTS compagnie (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    about text NOT NULL
    );
    `;
}

async function seedTeam() {
	await sql`
    CREATE TABLE IF NOT EXISTS team (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    job VARCHAR(255) NOT NULL,
    presentation TEXT,
    photo VARCHAR(255) NOT NULL
    );
    `;
}

async function seedContact() {
	await sql`
    CREATE TABLE IF NOT EXISTS contact (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    compagnie VARCHAR(255),
    message TEXT NOT NULL,
    date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    is_treated BOOLEAN NOT NULL DEFAULT FALSE
    );
    `;
}

async function seedCreation() {
	await sql`
    CREATE TABLE IF NOT EXISTS creation (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    public VARCHAR(255) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    interpretation TEXT NOT NULL,
    resume TEXT NOT NULL,
    illustration VARCHAR(255),
    poster VARCHAR(255),
    assistant VARCHAR(500),
    jauge VARCHAR(255),
    plate TEXT,
    regie TEXT
    );
    `;
}

async function seedAgenda() {
	await sql`
    CREATE TABLE IF NOT EXISTS agenda (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    place VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    public VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    hour VARCHAR(50) NOT NULL,
    schedule VARCHAR(100) NOT NULL,
    creation_id UUID NOT NULL,
    CONSTRAINT fk_agenda_creation FOREIGN KEY(creation_id) REFERENCES creation(id)
    );
    
    `;
}

async function seedPartnair() {
	await sql`
    CREATE TABLE IF NOT EXISTS partnair (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL
    );
    `;
}

async function seedCreationPartnair() {
	await sql`
    CREATE TABLE IF NOT EXISTS creation_partnair(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    creation_id UUID NOT NULL,
    partnair_id UUID NOT NULL,
    CONSTRAINT fk_creation_partnair FOREIGN KEY(creation_id) REFERENCES creation(id),
    CONSTRAINT fk_partnair_creation FOREIGN KEY(partnair_id) REFERENCES partnair(id)
    );
    `;
}

async function seedMediation() {
	await sql`
    CREATE TABLE IF NOT EXISTS mediation(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    parcours VARCHAR(255) NOT NULL,
    public VARCHAR(255) NOT NULL,
    duration VARCHAR(500) NOT NULL,
    theme VARCHAR (500) NOT NULL,
    presentation TEXT NOT NULL,
    thanks TEXT,
    excerpt TEXT,
    organisation TEXT NOT NULL,
    intervention TEXT
    )
`;
}

async function seedPhoto() {
	await sql`
    CREATE TABLE IF NOT EXISTS photo (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    service VARCHAR(255) NOT NULL
    )
    `;
}

export async function GET() {
	try {
		await sql.begin(async () => [
			initUuid(),
			seedUser(),
			seedRole(),
			seedCompagnie(),
			seedTeam(),
			seedContact(),
			seedCreation(),
			seedAgenda(),
			seedPartnair(),
			seedCreationPartnair(),
			seedMediation(),
			seedPhoto(),
		]);

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
