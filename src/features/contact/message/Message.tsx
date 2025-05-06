import styles from "./message.module.css";
import {ContactProps} from "@/types/definitions";
import {formatedDate} from "@/lib/helpers/formatedDate";

export default function Message({fullMessage} : {fullMessage : ContactProps | null | string }){

    if(typeof fullMessage === "string"){
        return <p>{fullMessage}</p>
    }
    if (!fullMessage){
        return "Message introuvable"
    }

   const {firstname, lastname, email, organism, subject, date, message} = fullMessage;

    return <>

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
            <h2 className={styles.h2Message}>Message</h2>
            <p>{message}</p>
        </article>
    </section>

    </>
        }