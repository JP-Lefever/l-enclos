import postgres from "postgres";
import {ContactProps} from "@/types/definitions";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class Message {

    async readMessage(id : string) : Promise<ContactProps | null | string > {
        try {
          const message = await sql`
        SELECT * 
        FROM contact
        WHERE id = ${id};
        `;
          console.log(message)
          const messages = message[0];
          if(!messages){
              return "Message introuvable"
          }
          console.log(messages)
          return messages as ContactProps;
        }
     catch (error) {
    console.error("Une erreur est survenue : ", error);
    return  "Une erreur est survenue"
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
    return  "Une erreur est survenue : "
    }
   }

    async deleteMessage(id:string){
    
        try {
            await sql`
            DELETE FROM contact
            WHERE id = ${id}`
        }catch(error){

            return  "Une erreur est survenue"
        }
    
    }
}

export default new Message();