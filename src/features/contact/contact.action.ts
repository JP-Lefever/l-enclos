"use server";

import type { ContactProps } from "@/types/definitions";
import Contact from "@/features/contact/contact.repository";
import {contactSchema} from "@/lib/utils/validationSchema";



const addMessage= async (data: Omit<ContactProps, "id" | "date" | "is_treated">)=> {
    const parsedData = contactSchema.safeParse(data);

    if (!parsedData.success) {
        return { success: false, error: parsedData.error.flatten().fieldErrors };
    }
    try {
        const result = await Contact.createMessage(parsedData.data);
        if (parsedData.success) {
            return { success: true, message: result.message };
        }
    } catch (error) {
        return { success: false, error };
    }
}


const readMessage = async (id: string)=>{

    return await Contact.readMessage(id);
}

const readAllMessages= async()=>{

    return  Contact.readAllMessages();

}



const updateStatus = async (id: string, status: boolean)=>{

    return  Contact.updateStatus(id, status);
}

const destroyMessage = async (id:string)=>{

    return Contact.deleteMessage(id);

}

export {readMessage, updateStatus,destroyMessage, addMessage,readAllMessages}