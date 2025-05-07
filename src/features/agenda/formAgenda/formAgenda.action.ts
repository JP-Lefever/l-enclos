"use server"
import {DateProps} from "@/types/definitions";

import formAgendaRepository from "@/features/agenda/formAgenda/formAgenda.repository";
import {dateSchema} from "@/lib/utils/validationSchema";


const addNewDate = async (data : Omit<DateProps, "id">)=>{

    const safeData = dateSchema.safeParse(data);

    if (!safeData.success) {
        return console.error(safeData.error);
    }

    const insertDate = await formAgendaRepository.createNewDate(safeData.data);


    return {success: insertDate.success, message: insertDate.message};

}

export {addNewDate};