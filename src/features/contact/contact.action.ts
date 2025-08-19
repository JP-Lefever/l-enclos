"use server";

import type { Result, ContactProps } from "@/types/definitions";
import Contact from "@/features/contact/contact.repository";
import {contactSchema} from "@/lib/utils/validationSchema";
import {revalidatePath} from "next/cache";
import nodemailer from "nodemailer"



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

const sendMail = async(data : ContactProps) : Promise<Result<string>> =>{

const {firstname, lastname,  email, subject,  message} = data

    try {
        const transporter = nodemailer.createTransport({
            host : process.env.SMTP_HOST,
            port : parseInt(process.env.SMTP_PORT || "587", 10),
            secure : false,
            auth : {
                user : process.env.SMTP_USER,
                pass : process.env.SMTP_PASS,
            }
        })
        await transporter.sendMail({
            from : `"Nouveau message du site L'Enclos" <${process.env.SMTP_USER}>`,
            to : process.env.CONTACT_RECEIVER,
            subject: `Nouveau message de ${firstname} ${lastname}`,
            text : `
            Email : ${email},      
            Subject: ${subject},           
            Message : ${message}`,
            html : `
                <h1>Email: ${email}</h1>,
                <h2>Subject: ${subject}</h2>,
                <p>Message: ${message}</p>`,
            replyTo: email,
        })


        return {success: true, data: "Le message a bien été envoyé"}

    } catch (error) {
        console.error(error)
        return {success: false, error: "Une erreur est survenue"}

    }

}

export {readMessage, updateStatus,destroyMessage, addMessage,readAllMessages, sendMail}