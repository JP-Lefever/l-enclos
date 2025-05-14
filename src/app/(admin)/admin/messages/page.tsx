import MessageList from "@/features/contact/messageList/MessageList";
import {readAllMessages} from "@/features/contact/contact.action";
import {notFound} from "next/navigation";


export default async function MessagesPage() {

    const messages  = await readAllMessages();


    if(!messages.success){
        notFound()
    }

    return <>
    <MessageList messages = {messages.data}/>
    </>
}