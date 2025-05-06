'use client'
import styles from "./messageList.module.css"

import {ContactProps} from "@/types/definitions";
import {formatedDate} from "@/lib/helpers/formatedDate";
import {useRouter} from "next/navigation";


export default function MessageList({messages} : {messages : ContactProps[] | unknown}){

    const router= useRouter()



    return(
<>
    <table className={styles.table}>
        <caption className={styles.caption}>Messages reçus</caption>
        <thead className={styles.thead}>
        <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Sujet</th>
            <th>Date reception</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody >
        { Array.isArray(messages) && messages?.map((m :ContactProps)=>{
           const statut =  m.status === 1 ? "traité" : "En attente"
            return (

            <tr className={styles.tr} key={m.id} onClick={()=>router.push(`/admin/messages/${m.id}`)}>

                <th >{m.firstname}</th>
                <th>{m.lastname}</th>
                <th>{m.email}</th>
                <th>{m.subject}</th>
                <th>{formatedDate(m.date)}</th>
                <th>{statut}</th>

            </tr>
            )})}
        </tbody>
    </table>
    </>)
}