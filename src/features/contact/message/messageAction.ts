'use server'
import Message from "./Message.repository";

const readMessage = async (id: string)=>{

    return await Message.readMessage(id);

}

export {readMessage}