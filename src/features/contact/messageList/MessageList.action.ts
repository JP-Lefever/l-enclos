"use server"
import MessageList from "./MessageList.repository";


 export async function readAllMessages(){

    return  MessageList.readAllMessages();

}

