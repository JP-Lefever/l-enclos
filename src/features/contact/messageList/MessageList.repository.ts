import postgres from "postgres";
import type { ContactProps} from "@/types/definitions";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class MessageList{

    async readAllMessages () : Promise<ContactProps[] | unknown> {

        try {

            return  await sql`
                SELECT id, firstname, lastname, email, subject, contact.date, is_treated
                FROM contact
            `



        } catch (error : unknown ) {
            console.error("Une erreur est survenue : ", error);
            return error
        }
        }
    }

export default new MessageList();