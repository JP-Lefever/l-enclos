import type { ContactProps } from "@/types/definitions";
import postgres from "postgres";
import type {Result} from "@/types/definitions"


const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class ContactRepository {
    async createMessage(data :Omit<ContactProps, "id" | "date" | "is_treated">): Promise<Result<null>> {
        const { firstname, lastname, email, organism, message,subject } = data;

        function safeValue(value: string | undefined) {
            return value === undefined ? null : value;
        }

        try {
            await sql`
        INSERT INTO contact(firstname, lastname, email, organism, message, subject)
        VALUES(${firstname}, ${lastname}, ${email}, ${safeValue(organism)}, ${message}, ${subject})
        `;
            return { success: true, data: null };
        } catch (error) {
            console.error("Une erreur est survenue : ", error);
            return {success: false, error: "Une erreur est survenue" };
        }
    }

    async readMessage(id : string) : Promise<Result<ContactProps>> {
        try {
            const result = await sql<ContactProps[]>`
        SELECT * 
        FROM contact
        WHERE id = ${id};
        `;


            return {success: true, data: result[0]};
        }
        catch (error) {
            console.error("Une erreur est survenue : ", error);
            return {success: false, error : "Une erreur est survenue"}
        }
    }


    async readAllMessages () : Promise<Result<ContactProps[]>> {

        try {

            const result =  await sql<ContactProps[]>`
                SELECT id, firstname, lastname, email, subject, contact.date, is_treated
                FROM contact
                ORDER BY date DESC
            `

        return {success: true, data: result};

        } catch (error ) {
            console.error("Une erreur est survenue : ", error);
            return {success: false, error: "Une erreur est survenue"}
        }
    }

    async updateStatus(id : string, status:boolean) : Promise<Result<null>> {
        try {
           await sql`
        UPDATE contact
        SET is_treated=${status}
        WHERE id = ${id};
`
            return {success: true, data: null};
        }catch(error){
            console.error("Une erreur est survenue : ", error);
            return {success: false, error: "Une erreur est survenue"}
        }
    }

    async deleteMessage(id:string) : Promise<Result<null>> {

        try {
            await sql`
            DELETE FROM contact
            WHERE id = ${id}`
            return {success : true, data: null};
        }catch(error){
            console.error("Une erreur est survenue : ", error);
            return {success: false, error: "Une erreur est survenue"}
        }

    }
}
const Contact = new ContactRepository()
export default Contact;
