"use server"
import {DateProps, ModifyDateProps, ModifyImmersionProps} from "@/types/definitions";
import AgendaRepository from "@/features/agenda/Agenda.repository";
import {dateSchema, modifyDateSchema, interventionSchema, modifyInterventionSchema} from "@/lib/utils/validationSchema";
import {InterventionAdminProps} from "@/types/definitions";
import type {Result} from "@/types/definitions";

import agendaRepository from "@/features/agenda/Agenda.repository";


const addNewIntervention = async (data : Omit<InterventionAdminProps, "id">) : Promise<Result<null>> => {

    const newIntervention = interventionSchema.safeParse((data))

    if(!newIntervention.success) {
        return {success:false, error : "Données invalides"}
    }

    const res = await AgendaRepository.createNewIntervention(newIntervention.data)

    if(!res.success){
        return {success : false, error : res.error}
    }

    return {success : true, data: null}
}

const addNewDate = async (data : Omit<DateProps, "id">) :Promise<Result<null>> =>{

    const safeData = dateSchema.safeParse(data);

    if (!safeData.success) {
        return {success: false, error : "Données invalides"};
    }
    console.log(safeData.data);
    const res = await AgendaRepository.createNewDate(safeData.data);

    if(!res.success){
        return {success : false, error : res.error}
    }

    return {success: true, data: null};

}


const readAllDate = async () : Promise<Result<ModifyDateProps[]>> =>{

    const res = await AgendaRepository.readAllDate()
    if (!res.success){
        return {success : res.success, error : res.error}
    }
    return {success : true, data: res.data}
}

const editDate = async (data : Omit<ModifyDateProps, "id">, id : string) : Promise<Result<null>> =>{

    const safeData = modifyDateSchema.safeParse(data);

    if (!safeData.success) {
        return {success : false , error : "Données invalides"};
    }
    const res = await AgendaRepository.updateDate(safeData.data, id)

    if(!res.success){
        return {success : false, error : res.error}
    }

    return {success : true, data : null};
}


const readAllInterventions = async () : Promise<Result<ModifyImmersionProps[]>> =>{

    const res =  await AgendaRepository.readAllInterventions()

    if(!res.success){
        return {success : false, error : res.error}
    }

return {success: true, data: res.data}
}


const editIntervention = async (data : Omit<ModifyImmersionProps, "id">, id : string) : Promise<Result<null>> =>{

    const safeData = modifyInterventionSchema.safeParse(data);

    if (!safeData.success) {
        return {success: false, error : "Données invalides"};
    }

    const result = await AgendaRepository.updateImmersion(safeData.data, id)

    if(!result.success){
        return {success : false, error : result.error}
    }

    return {success : true, data : null};

}

const deleteDate = async (id : string) : Promise<Result<null>> =>{

    const result = await AgendaRepository.destroyDate(id)
if(!result.success){
    return {success : false, error : result.error}
}
    return {success : true, data : null};
}

const deleteDateImmersion = async (id : string) : Promise<Result<null>> =>{

    const result = await AgendaRepository.destroyImmersionDate(id)

    if(!result.success){
        return {success : false, error : result.error}
    }

    return {success : true, data : null};
}

const readAllDateComing = async () : Promise<Result<ModifyDateProps[]>> =>{

    const response = await AgendaRepository.readAllDateComing()

    if(!response.success){
        return {success : false, error : response.error}
    }
    return {success : true, data: response.data}
}


const readAllDateSpec = async () : Promise<Result<ModifyDateProps[]>> => {

    const res = await agendaRepository.readDateComing()

    if (!res.success) {
        return {success: false, error : res.error}
    }
    return {success: true, data: res.data}
}

const readAllDatePassed = async () : Promise<Result<ModifyDateProps[]>> => {

    const res = await agendaRepository.readDatePassed()

    if (!res.success) {
        return {success: false, error : res.error}
    }
    return {success: true, data: res.data}
}


export {addNewDate,addNewIntervention,readAllDate, editDate,readAllInterventions, editIntervention, deleteDate, deleteDateImmersion,readAllDateComing, readAllDateSpec,readAllDatePassed};