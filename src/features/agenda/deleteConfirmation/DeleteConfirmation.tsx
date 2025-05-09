'use client'
import styles from "./deleteConfirmation.module.css"
import {deleteDate, deleteDateImmersion} from "@/features/agenda/agenda.action";
import {toast} from "react-toastify";
import {redirect} from "next/navigation";

export function DeleteConfirmationDate({ id, closeModaleAction } : {id:string, closeModaleAction : ()=>void}) {

    const handleClickDelete = async (id: string)=>{
       const response =  await deleteDate(id)
        if(response.success){
        toast.success(response.message)
        closeModaleAction()
        redirect("/admin/agenda/editDate")
        }

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


export function DeleteConfirmationImmersion({ id, closeModaleAction } : {id:string, closeModaleAction : ()=>void}) {

    const handleClickDelete = async (id: string)=>{
        const response =  await deleteDateImmersion(id)
        if(response.success){
            toast.success(response.message)
            closeModaleAction()
            redirect("/admin/agenda/editDate")
        }

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