import type { ContactProps, ResultProps } from "@/types/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class Contact {
	async createMessage(data :Omit<ContactProps, "id" | "date" | "is_treated">): Promise<ResultProps> {
		const { firstname, lastname, email, organism, message,subject } = data;

		function safeValue(value: string | undefined) {
			return value === undefined ? null : value;
		}
		try {
			await sql`
        INSERT INTO contact(firstname, lastname, email, organism, message, subject)
        VALUES(${safeValue(firstname)}, ${safeValue(lastname)}, ${safeValue(email)}, ${safeValue(organism)}, ${safeValue(message)}, ${safeValue(subject)})
        `;
			return { success: true, message: "Le message a bien été envoyé" };
		} catch (error) {
			console.error("Une erreur est survenue : ", error);
			return { message: "Une erreur est survenue" };
		}
	}
}

export default new Contact();
