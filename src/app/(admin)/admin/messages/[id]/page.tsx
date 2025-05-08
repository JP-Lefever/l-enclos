import Message from "@/features/contact/message/Message";
import {readMessage} from "@/features/contact/contact.action";
import {ContactProps} from "@/types/definitions";

export default async function DetailMessagePage(props: { params: Promise<{ id: string }> }){

const params = await props.params;
const id= params.id;

const fullMessage : ContactProps | null | string = await readMessage(id);



    return <>
        {fullMessage && typeof(fullMessage) !== "string" &&
    <Message  fullMessage = {fullMessage} />
        }
    </>
}