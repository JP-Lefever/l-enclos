import Message from "@/features/contact/message/Message";
import {readMessage} from "@/features/contact/contact.action";
import {notFound} from "next/navigation";


export default async function DetailMessagePage(props: { params: Promise<{ id: string }> }){

const params = await props.params;
const id= params.id;

const fullMessage  = await readMessage(id);


if(!fullMessage.success){
    notFound()
}

    return <>

    <Message  fullMessage = {fullMessage.data} />

    </>
}