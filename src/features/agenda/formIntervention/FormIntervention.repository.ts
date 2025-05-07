import postgres  from "postgres";
import {InterventionAdminProps} from "@/types/definitions";

const sql = postgres(process.env.POSTGRES_URL as string, {ssl: "require"});

class FormIntervention {

    async createNewIntervention(data : Omit<InterventionAdminProps, "id">){

        const convertBool = (value: number) =>{
            return value !== 0
        }
        const safeValue = (value : undefined | number)=>{
            return value === undefined ? null : value
        }

            console.log(data)

        try {
            await sql`
        INSERT INTO intervention(year, label, is_passed, mediation_id)
        VALUES (${data.year}, ${data.label},${convertBool(data.isPassed)}, ${safeValue(data.mediationId)});
`
            return {success:true, message : "L'intervention a bien été ajoutée"}
        }catch(err){
            console.error(err)
            return {message : "Une erreur est survenue"}
        }
    }
}

export default new FormIntervention();