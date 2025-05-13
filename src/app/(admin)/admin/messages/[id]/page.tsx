import Message from "@/features/contact/message/Message";
import {readMessage} from "@/features/contact/contact.action";
import {ContactProps} from "@/types/definitions";

export default async function DetailMessagePage(props: { params: Promise<{ id: string }> }){

const params = await props.params;
const id= params.id;

const fullMessage  = await readMessage(id);

//remplacer par 404
if(!fullMessage.success){
    return <>
    <section>
        <p>Message introuvable</p>
    </section>
    </>
}

    return <>

    <Message  fullMessage = {fullMessage.data} />

    </>
}