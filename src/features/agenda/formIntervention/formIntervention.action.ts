"use server"

import {InterventionAdminProps} from "@/types/definitions";
import FormInterventionRepository from "@/features/agenda/formIntervention/FormIntervention.repository";
import {interventionSchema} from "@/lib/utils/validationSchema";


const addNewIntervention = async (data : Omit<InterventionAdminProps, "id">) => {

    const newIntervention = interventionSchema.safeParse((data))

    if(!newIntervention.success) {
        return console.error(newIntervention.error)
    }

    const insertIntervention = await FormInterventionRepository.createNewIntervention(newIntervention.data)

    return {success : insertIntervention.success, message : insertIntervention.message}
}

export  {addNewIntervention}