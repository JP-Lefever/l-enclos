import MessageList from "@/features/contact/messageList/MessageList";
import {readAllMessages} from "@/features/contact/contact.action";
import {ContactProps} from "@/types/definitions";

export default async function MessagesPage() {

    const messages : Promise<ContactProps[]> | unknown = await readAllMessages();

    return <>
    <MessageList messages = {messages}/>
    </>
}