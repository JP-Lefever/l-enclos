import styles from "./page.module.css"
import DisplayDate from "@/features/agenda/client/displayDate/DisplayDate";
import {readAllDateComing} from "@/features/agenda/agenda.action";

export default async function AgendaPage(){

    const {data, error} = await readAllDateComing()

    return (<>
        <section className={styles.section}>
        <h1 className={styles.h1}>Agenda</h1>
        </section>
            <section>
        {!error && data &&
        <DisplayDate datesSpec={data}/>
        }
            </section>
    </>)
}