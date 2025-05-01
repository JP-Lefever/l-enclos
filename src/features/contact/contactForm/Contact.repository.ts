import type { ContactProps, ResultProps } from "@/lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class Contact {
	async createMessage(data: ContactProps): Promise<ResultProps> {
		const { firstname, lastname, email, organism, message } = data;

		function safeValue(value: string | undefined) {
			return value === undefined ? null : value;
		}
		try {
			await sql`
        INSERT INTO contact(firstname, lastname, email, organism, message)
        VALUES(${safeValue(firstname)}, ${safeValue(lastname)}, ${safeValue(email)}, ${safeValue(organism)}, ${safeValue(message)})
        `;
			return { success: true, message: "Le message a bien été envoyé" };
		} catch (error) {
			console.error("Une erreur est survenue : ", error);
			return { message: "Une erreur est survenue" };
		}
	}
}

export default new Contact();
