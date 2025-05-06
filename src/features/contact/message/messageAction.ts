'use server'
import Message from "./Message.repository";

const readMessage = async (id: string)=>{

    return await Message.readMessage(id);

}

const updateStatus = async (id: string, status: boolean)=>{

    const changeStatus = Message.updateStatus(id, status);

    return {success : true, message : changeStatus}
}

export {readMessage, updateStatus}