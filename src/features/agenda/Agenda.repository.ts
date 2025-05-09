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


const sql = postgres(process.env.POSTGRES_URL as string, {ssl:"require"});


const safeValue = (value : undefined | number)=>{
            return     value === undefined ? null : value
        }
const convertBool = (value: number) =>{
    return value !== 0
}

class AgendaRepository{
    async createNewDate(data :Omit<DateProps, "id">){

        try {
            await sql `
        INSERT INTO agenda(place, public, date, city, hour, is_passed,spectacle_id)
        VALUES(${data.place},${data.public},${data.date},${data.city},${data.hour},${convertBool(data.isPassed)},${safeValue(data.spectacleId)});
`;
            return {success : true, message : "La date a bien été ajoutée"}
        }catch(err){
            console.log(err)
            return { message : "Une erreur est survenue"}
        }
    }


    async createNewIntervention(data : Omit<InterventionAdminProps, "id">){

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


    async readAllDate() : Promise<ReadAllDateProps> {
        try {
            const result= await sql<ModifyDateProps[]>`
                SELECT *
                FROM agenda
                ORDER BY date;
            `;

            return {data : result}
        } catch (err) {
            console.error(err);
            return {error :"une erreur est survenue"}
        }

    }

    async updateDate(data: Omit<ModifyDateProps, "id">, id : string) {

        try {
             await sql`
            UPDATE agenda
            SET date = ${data.date}, place= ${data.place}, city=${data.city}, public=${data.public}, hour=${data.hour}, is_passed=${data.is_passed}, spectacle_id=${safeValue(data.spectacle_id)}
            WHERE id= ${id};
            `;
            return { message : "La date a bien été modifiée"}
        }catch (err){
            console.error(err)
            return {message : "une erreur est survenue"}
        }
    }

    async readAllInterventions() : Promise<ReadAllImmersionProps> {

        try {
         const result=  await sql <ModifyImmersionProps[]>`
            SELECT *
            FROM intervention
            ORDER BY year;
            `
            return {data : result}
        }catch(err){
            console.error(err);
            return {error :"une erreur est survenue"}
        }
    }

    async updateImmersion(data : Omit<ModifyImmersionProps, "id">, id : string) {

        try {
            await sql `
            UPDATE intervention
            SET year= ${data.year},label= ${data.label},is_passed=${data.is_passed}, mediation_id=${data.mediation_id}
            WHERE id = ${id};
            `
            return {message : "La date d'immersion a bien été mise à jour"}
        } catch (err){
            console.error(err)
            return {message : "Une erreur est survenue"}
        }

    }
}

export default new AgendaRepository();