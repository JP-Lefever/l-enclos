"use client"
import styles from "./message.module.css";
import {ContactProps} from "@/types/definitions";
import {formatedDate} from "@/lib/helpers/formatedDate";
import {useEffect, useState} from "react";

import { updateStatus} from "@/features/contact/message/messageAction";
import Link from "next/link";
import {createPortal} from "react-dom";
import DeleteConfirmation from "@/features/contact/deleteConfirmation/DeleteConfirmation";




export default function Message({fullMessage} : {fullMessage : ContactProps }) {

    const {id, firstname, lastname, email, organism, subject, date, message, is_treated} = fullMessage;

    const [status, setStatus] = useState(is_treated)
    const buttonStatus = status ? "Lu" : "Marquer comme lu"
    const handleClickStatus = ()=>{
        setStatus(!status)

    }


    const [openValidateModal, setOpenValidateModal] = useState(false)

    const handleOpenValidateModal = () => {
        setOpenValidateModal(true)
    }
    const closeModale = ()=>{
        setOpenValidateModal(false)
    }

  useEffect(()=>{
      (async()=>{
          try{
              await updateStatus(id, status)
          }catch(e){
              console.error(e)
          }
      })()
  },[status, id])



    return <>

        <section className={styles.sectionBack}>
            <Link className={styles.link} href={"/admin/messages"}>Revenir a la liste de messages</Link>
        </section>
        <section className={styles.section}>
    <article className={styles.info}>
        <h2 className={styles.h2}>Informations</h2>
        <span>
            <h3>Nom</h3>
            <p>{firstname}</p>
            </span>
        <span>
            <h3>Prénom</h3>
            <p>{lastname}</p>
            </span>
        <span>
            <h3>Email</h3>
            <p>{email}</p>
            </span>
        <span>
            <h3>Organisme</h3>
            <p>{organism}</p>
            </span>
        <span>
            <h3>Objet</h3>
            <p>{subject}</p>
            </span>
        <span>
            <h3>date</h3>
            <p>{formatedDate(date)}</p>
            </span>
    </article>
    <article className={styles.message}>
            <span className={styles.action}>
            <h2 className={styles.h2Message}>Message</h2>
                <button onClick={handleClickStatus} className={status ? styles.read : styles.unRead}
                        type="button">{buttonStatus}</button>
                <button onClick={handleOpenValidateModal} className={styles.deleteButton} type="button">Supprimer le message</button>
            </span>
        <p>{message}</p>
    </article>
    {openValidateModal && createPortal(<DeleteConfirmation closeModaleAction={closeModale} id={id}/>, document.body)}
    </section>

    </>
        }