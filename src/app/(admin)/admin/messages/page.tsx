import MessageList from "@/features/contact/messageList/MessageList";
import {readAllMessages} from "@/features/contact/contact.action";


export default async function MessagesPage() {

    const messages  = await readAllMessages();

    //remplacer par not found
    if(!messages.success){
        return <>
        <section>
            <p>Une erreur est survenue</p>
        </section>
        </>
    }

    return <>
    <MessageList messages = {messages.data}/>
    </>
}