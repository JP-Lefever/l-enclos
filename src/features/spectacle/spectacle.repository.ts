import postgres from "postgres";
import {ModifyDateProps, Result} from "@/types/definitions";

const sql = postgres(process.env.POSTGRES_URL as string, {ssl : "require"});

class SpectacleRepository{

    async readDateComing (): Promise<Result<ModifyDateProps[]>> {

        try{
            const result = await sql <ModifyDateProps[]> `
            SELECT *
            FROM agenda
            WHERE is_passed = false
            ORDER BY date DESC 
            LIMIT 3;
            `;

            return {success : true, data: result}
        }catch(err){
            console.error(err)
            return {success : false, error : "Une erreur est survenue"};
        }

    }

    async readDatePassed(): Promise<Result<ModifyDateProps[]>> {

        try{
            const result = await sql <ModifyDateProps[]> `
            SELECT *
            FROM agenda
            WHERE is_passed = true
            ORDER BY date DESC 
            LIMIT 8;
            `;

            return {success : true, data: result}
        }catch(err){
            console.error(err)
            return {success : false, error : "Une erreur est survenue"};
        }

    }
}

const SpectacleRepo = new SpectacleRepository()

export default SpectacleRepo