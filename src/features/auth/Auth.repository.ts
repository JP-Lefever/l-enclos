import postgres from "postgres";
import type {Result, UsersProps} from "@/types/definitions";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class UsersRepository {
	async readUserByEmail(email: string) : Promise<Result<UsersProps>> {
		try {
			const user = await sql<UsersProps[]>`
          SELECT * FROM users
          WHERE email = ${email}
          `;
			if (!user[0]) {
				return {success: false, error : "Utilisateur introuvable"}
			}

			return {success : true, data : user[0]}
		} catch (error) {
			console.error("Une erreur est survenue : ", error);
			return { success: false, error: "Une erreur est survenue" };
		}
	}
}
const Users = new UsersRepository()
export default Users
