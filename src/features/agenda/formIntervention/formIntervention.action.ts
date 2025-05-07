"use server"
import {z} from "zod"
import {InterventionAdminProps} from "@/types/definitions";
import FormInterventionRepository from "@/features/agenda/formIntervention/FormIntervention.repository";


const interventionSchema = z.object({

    year: z.string().regex(/^[^<>]*$/,{message : "Les caractères <> sont interdits"}).nonempty({message : "Champs requis"}),
    label : z.string().regex(/^[^<>]*$/,{message : "Les caractères <> sont interdits"}).nonempty({message : "Champs requis"}),
    isPassed : z.coerce.number({required_error:"Champs requis"}),
    mediationId: z.coerce.number({required_error:"Champs requis"}),
})


const addNewIntervention = async (data : Omit<InterventionAdminProps, "id">) => {

    const newIntervention = interventionSchema.safeParse((data))

    if(!newIntervention.success) {
        return console.error(newIntervention.error)
    }

    const insertIntervention = await FormInterventionRepository.createNewIntervention(newIntervention.data)

    return {success : insertIntervention.success, message : insertIntervention.message}
}

export  {addNewIntervention}