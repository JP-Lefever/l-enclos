import styles from "@/app/(client)/agenda/creation/page.module.css";

import DisplayImmersion from "@/features/agenda/client/displayImmersion/DisplayImmersion";
import {readAllInterventions} from "@/features/agenda/agenda.action";

export default async function immersionsDatePage(){

    const {data, error} = await readAllInterventions()

     return (<>
        <section className={styles.section}>
            <h1 className={styles.h1}>Agenda</h1>
        </section>
        <section>
            {!error && data &&
            <DisplayImmersion data={data}/>
            }
        </section>
    </>)
}