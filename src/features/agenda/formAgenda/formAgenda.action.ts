"use server"
import {DateProps} from "@/types/definitions";
import {z} from "zod";
import formAgendaRepository from "@/features/agenda/formAgenda/formAgenda.repository";

const dateSchema = z.object({
    place : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
    public : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
    date : z.coerce.date({required_error: "La date est obligatoiree"}),
    city : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
    hour : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
    isPassed : z.coerce.number({required_error: "Le champ est obligatoiree"}),
    spectacleId : z.coerce.number().optional()
})


const addNewDate = async (data : Omit<DateProps, "id">)=>{

    const safeData = dateSchema.safeParse(data);

    if (!safeData.success) {
        return console.error(safeData.error);
    }

    const insertDate = await formAgendaRepository.createNewDate(safeData.data);


    return {success: insertDate.success, message: insertDate.message};

}

export {addNewDate};