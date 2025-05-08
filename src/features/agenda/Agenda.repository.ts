import {DateProps, InterventionAdminProps, ModifyDateProps} from "@/types/definitions";
import postgres from 'postgres';


const sql = postgres(process.env.POSTGRES_URL as string, {ssl:"require"});

type ReadAllDateProps = {
    data?: ModifyDateProps[];
    error?:string;
}
        const safeValue = (value : undefined | number)=>{
            return     value === undefined ? null : value
        }

class AgendaRepository{
    async createNewDate(data :Omit<DateProps, "id">){
        const convertBool = (value : number) => {
            return value !== 0;
        }

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

    async updateDate(data: ModifyDateProps) {

        try {
             await sql`
            UPDATE agenda
            SET date = ${data.date}, place= ${data.place}, city=${data.city}, public=${data.public}, hour=${data.hour}, is_passed=${data.is_passed}, spectacle_id=${safeValue(data.spectacle_id)}
            WHERE id= ${data.id};
            `;
            return { message : "La date a bien été modifiée"}
        }catch (err){
            console.error(err)
            return {message : "une erreur est survenue"}
        }
    }
}

export default new AgendaRepository();