import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class utilsPartnair {
	async createPartnair(partnair: string) {
		try {
			await sql`
        INSERT INTO partnair (name)
        VALUES (${partnair});
        `;
			return { message: "Le partenaire a bien été ajouté" };
		} catch (e) {
			console.log(e);
		}
	}
}

export default new utilsPartnair();
