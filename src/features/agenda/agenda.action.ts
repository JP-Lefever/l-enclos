"use server"
import {DateProps, ModifyDateProps} from "@/types/definitions";

import {interventionSchema} from "@/lib/utils/validationSchema";
import AgendaRepository from "@/features/agenda/Agenda.repository";
import {dateSchema, modifyDateSchema} from "@/lib/utils/validationSchema";
import {InterventionAdminProps} from "@/types/definitions";




const addNewIntervention = async (data : Omit<InterventionAdminProps, "id">) => {

    const newIntervention = interventionSchema.safeParse((data))

    if(!newIntervention.success) {
        return console.error(newIntervention.error)
    }

    const insertIntervention = await AgendaRepository.createNewIntervention(newIntervention.data)

    return {success : insertIntervention.success, message : insertIntervention.message}
}

const addNewDate = async (data : Omit<DateProps, "id">)=>{

    const safeData = dateSchema.safeParse(data);

    if (!safeData.success) {
        return console.error(safeData.error);
    }

    const insertDate = await AgendaRepository.createNewDate(safeData.data);


    return {success: insertDate.success, message: insertDate.message};

}

const readAllDate = async ()=>{

    const {data, error} = await AgendaRepository.readAllDate()

    return {data, error}
}
const editDate = async (data : ModifyDateProps)=>{

    const safeData = modifyDateSchema.safeParse(data);

    if (!safeData.success) {
        return console.error(safeData.error);
    }
    console.log(safeData.data)
    const newDate = await AgendaRepository.updateDate(safeData.data)

    return {success : true, message : newDate.message};
}


export {addNewDate,addNewIntervention,readAllDate, editDate};