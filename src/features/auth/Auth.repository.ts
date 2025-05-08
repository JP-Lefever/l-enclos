import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class Users {
	async readUserByEmail(email: string) {
		try {
			const user = await sql`
          SELECT * FROM users
          WHERE email = ${email}
          `;
			if (user[0].length <= 0) {
				return null;
			}

			return user[0];
		} catch (error) {
			console.error("Une erreur est survenue : ", error);
			return { message: "Une erreur est survenue" };
		}
	}
}

export default new Users();
