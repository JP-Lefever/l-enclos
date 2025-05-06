'use server'
import Message from "./Message.repository";

const readMessage = async (id: string)=>{

    return await Message.readMessage(id);
}

const updateStatus = async (id: string, status: boolean)=>{

    return  Message.updateStatus(id, status);
}

const destroyMessage = async (id:string)=>{

    return Message.deleteMessage(id);

}

export {readMessage, updateStatus,destroyMessage}