'use client'
import styles from "./deleteConfirmation.module.css"
import {destroyMessage} from "@/features/contact/contact.action";
import {toast} from "react-toastify";
import {redirect} from "next/navigation";

export default function DeleteConfirmation({ id, closeModaleAction } : {id:string, closeModaleAction : ()=>void}) {


    const handleClickDelete = async (id: string)=>{
            const response = await destroyMessage(id)
        if (response.success){
            toast.success("Le message a bien été supprimé")
            redirect("/admin/messages")
        } else {toast.error(response.error);}

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