"use server";

import type { Result, ContactProps } from "@/types/definitions";
import Contact from "@/features/contact/contact.repository";
import {contactSchema} from "@/lib/utils/validationSchema";
import {revalidatePath} from "next/cache";



const addMessage= async (data: Omit<ContactProps, "id" | "date" | "is_treated">) : Promise<Result<null>> => {
    const parsedData = contactSchema.safeParse(data);

    //voir pour retourner des erreurs completes, changer le typage
    if (!parsedData.success) {
        return { success: false, error: "Données invalides" };
    }
        const res = await Contact.createMessage(parsedData.data);

        if (!res.success) {
            return { success: false, error: res.error };
        }

        revalidatePath("/admin/messages")
        return {success: true, data: null};

}


const readMessage = async (id: string) : Promise<Result<ContactProps>> =>{

   const res =  await Contact.readMessage(id);

   if(!res.success){
       return { success: false, error: res.error };
   }

   return {success: true, data: res.data};
}

const readAllMessages= async() : Promise<Result<ContactProps[]>> =>{

    const res = await Contact.readAllMessages();
    if (!res.success){
        return {success : false, error : res.error}
    }


    return {success : true, data : res.data}
}



const updateStatus = async (id: string, status: boolean) :Promise<Result<null>> =>{

   const res = await  Contact.updateStatus(id, status);

   if(!res.success){
       return { success: false, error: res.error };
   }

    revalidatePath("/admin/messages")
   return {success: true, data : null}
}

const destroyMessage = async (id:string) : Promise<Result<null>> =>{

    const result = await Contact.deleteMessage(id);

    if(!result.success){
        return { success: false, error: result.error };
    }

    revalidatePath("/admin/messages")
    return {success : true, data : null}
}

export {readMessage, updateStatus,destroyMessage, addMessage,readAllMessages}