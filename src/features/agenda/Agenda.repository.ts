import {DateProps, InterventionAdminProps, ModifyDateProps, ModifyImmersionProps} from "@/types/definitions";
import postgres from 'postgres';



type ReadAllDateProps = {
    data?: ModifyDateProps[] ;
    error?:string;
}

type ReadAllImmersionProps = {
    data?: ModifyImmersionProps[] ;
    error?:string;
}

type Result<T> = | {success : true, data: T} | {success : false, error : string};


const sql = postgres(process.env.POSTGRES_URL as string, {ssl:"require"});


const safeValue = (value : undefined | number)=>{
            return     value === undefined ? null : value
        }
const convertBool = (value: number) =>{
    return value !== 0
}

class AgendaRepository{
    async createNewDate(data :Omit<DateProps, "id">) : Promise<Result<null>>{

        try {
            await sql `
        INSERT INTO agenda(place, public, date, city, hour, is_passed,spectacle_id)
        VALUES(${data.place},${data.public},${data.date},${data.city},${data.hour},${convertBool(data.isPassed)},${safeValue(data.spectacleId)});
`;
            return {success : true, data : null}
        }catch(err){
            console.log(err)
            return { success : false, error : "Une erreur est survenue"}
        }
    }


    async createNewIntervention(data : Omit<InterventionAdminProps, "id">) : Promise<Result<null>>{

        try {
            await sql`
        INSERT INTO intervention(year, label, is_passed, mediation_id)
        VALUES (${data.year}, ${data.label},${convertBool(data.isPassed)}, ${safeValue(data.mediationId)});
`
            return {success:true, data : null}
        }catch(err){
            console.error(err)
            return {success: false, error : "Une erreur est survenue"}
        }
    }


    async readAllDate() : Promise<Result<ModifyDateProps[]>> {
        try {
            const result= await sql<ModifyDateProps[]>`
                SELECT *
                FROM agenda
                ORDER BY date;
            `;

            return {success : true, data : result}
        } catch (err) {
            console.error(err);
            return {success: false, error :"une erreur est survenue"}
        }

    }

    async updateDate(data: Omit<ModifyDateProps, "id">, id : string) : Promise<Result<null>> {

        try {
             await sql`
            UPDATE agenda
            SET date = ${data.date}, place= ${data.place}, city=${data.city}, public=${data.public}, hour=${data.hour}, is_passed=${data.is_passed}, spectacle_id=${safeValue(data.spectacle_id)}
            WHERE id= ${id};
            `;
            return { success: true, data : null}
        }catch (err){
            console.error(err)
            return {success: false, error : "une erreur est survenue"}
        }
    }

    async readAllInterventions() : Promise<Result<ModifyImmersionProps[]>> {

        try {
         const result=  await sql <ModifyImmersionProps[]>`
            SELECT *
            FROM intervention
            ORDER BY year DESC;
            `
            return {success : true ,data : result}
        }catch(err){
            console.error(err);
            return {success : false, error :"une erreur est survenue"}
        }
    }

    async updateImmersion(data : Omit<ModifyImmersionProps, "id">, id : string) : Promise<Result<null>> {

        try {
            await sql `
            UPDATE intervention
            SET year= ${data.year},label= ${data.label},is_passed=${data.is_passed}, mediation_id=${data.mediation_id}
            WHERE id = ${id};
            `
            return {success: true, data : null}
        } catch (err){
            console.error(err)
            return {success: false, error : "Une erreur est survenue"}
        }

    }

    async destroyDate(id : string) : Promise<Result<null>> {

        try {
            await sql`
            DELETE FROM agenda
            WHERE id= ${id};
            `
            return {success : true, data: null}
        } catch (err){
            console.error(err)
            return {success: false, error : "Une erreur est survenue"}
        }
    }

    async destroyImmersionDate(id : string) : Promise<Result<null>> {

        try {
            await sql`
            DELETE FROM intervention
            WHERE id= ${id};
            `
            return {success: true, data: null}
        } catch (err){
            console.error(err)
            return {success: false, error : "Une erreur est survenue"}
        }
    }

    async readAllDateComing() : Promise <Result<ModifyDateProps[]>>{

        try{
            const result= await sql <ModifyDateProps[]>`
            SELECT * 
            FROM agenda
            WHERE is_passed = FALSE;
            `
            return {success: true, data : result}
        } catch (err) {
            console.error(err);
            return {success: false, error : "Une erreur est survenue"}
        }
    }


}
const agendaRepository = new AgendaRepository()
export default agendaRepository;