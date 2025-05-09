"use server"
import {DateProps, ModifyDateProps, ModifyImmersionProps} from "@/types/definitions";

import {interventionSchema, modifyInterventionSchema} from "@/lib/utils/validationSchema";
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

const editDate = async (data : Omit<ModifyDateProps, "id">, id : string)=>{

    const safeData = modifyDateSchema.safeParse(data);

    if (!safeData.success) {
        return console.error(safeData.error);
    }
    const newDate = await AgendaRepository.updateDate(safeData.data, id)

    return {success : true, message : newDate.message};
}


const readAllInterventions = async ()=>{

    const {data, error} =  await AgendaRepository.readAllInterventions()

return {data, error}
}


const editIntervention = async (data : Omit<ModifyImmersionProps, "id">, id : string)=>{

    const safeData = modifyInterventionSchema.safeParse(data);

    if (!safeData.success) {
        return console.error(safeData.error);
    }

    const result = await AgendaRepository.updateImmersion(safeData.data, id)

    return {success : true, message : result.message};

}

const deleteDate = async (id : string)=>{

    const result = await AgendaRepository.destroyDate(id)

    return {success : true, message : result.message};
}


export {addNewDate,addNewIntervention,readAllDate, editDate,readAllInterventions, editIntervention, deleteDate};