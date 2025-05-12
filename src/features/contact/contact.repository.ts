import type { ContactProps, ResultProps } from "@/types/definitions";
import postgres from "postgres";


const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class ContactRepository {
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

    async readMessage(id : string) : Promise<ContactProps | null | string > {
        try {
            const message = await sql`
        SELECT * 
        FROM contact
        WHERE id = ${id};
        `;

            const messages = message[0];
            if(!messages){
                return "Message introuvable"
            }

            return messages as ContactProps;
        }
        catch (error) {
            console.error("Une erreur est survenue : ", error);
            return  "Une erreur est survenue"
        }
    }


    async readAllMessages () : Promise<ContactProps[] | unknown> {

        try {

            return  await sql`
                SELECT id, firstname, lastname, email, subject, contact.date, is_treated
                FROM contact
                ORDER BY date DESC
            `



        } catch (error : unknown ) {
            console.error("Une erreur est survenue : ", error);
            return error
        }
    }

    async updateStatus(id : string, status:boolean) {
        try {
            await sql`
        UPDATE contact
        SET is_treated=${status}
        WHERE id = ${id};
`
        }catch(error){
            console.error("Une erreur est survenue : ", error);
            return  "Une erreur est survenue"
        }
    }

    async deleteMessage(id:string){

        try {
            await sql`
            DELETE FROM contact
            WHERE id = ${id}`
            return {message : "Le message a bien été supprimé"}
        }catch(error){
            console.error("Une erreur est survenue : ", error);
            return {message : "Une erreur est survenue"}
        }

    }
}
const Contact = new ContactRepository()
export default Contact;
