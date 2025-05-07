'use client'
import styles from "./deleteConfirmation.module.css"
import {destroyMessage} from "@/features/contact/message/messageAction";
import {toast} from "react-toastify";
import {redirect} from "next/navigation";

export default function DeleteConfirmation({ id, closeModaleAction } : {id:string, closeModaleAction : ()=>void}) {


    const handleClickDelete = async (id: string)=>{
             await destroyMessage(id)
            toast.success("Le message a bien été supprimé")
            redirect("/admin/messages")

    }

    return (
        <>
            <section className={styles.overlay}>

        <article className={styles.section}>
            <h3>Etes vous sur de vouloir supprimer le message ?</h3>
            <span className={styles.sectionButton}>
            <button onClick={()=>handleClickDelete(id)} type="button">Oui</button>
            <button onClick={closeModaleAction} type="button">non</button>
            </span>
        </article>
            </section>
        </>
    )
}