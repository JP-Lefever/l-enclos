import postgres from 'postgres';
import {DateProps} from "@/types/definitions";

const sql = postgres(process.env.POSTGRES_URL as string, {ssl:"require"});

class AgendaRepository{

    async createNewDate(data :Omit<DateProps, "id">){
        const safeValue = (value : undefined | number)=>{
        return     value === undefined ? null : value
        }
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
}

export default new AgendaRepository();