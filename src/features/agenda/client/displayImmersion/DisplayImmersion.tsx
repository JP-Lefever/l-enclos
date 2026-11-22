import {ModifyImmersionProps} from "@/types/definitions";
import styles from "./displayImmersion.module.css"


import CardImmersionDate from "@/features/agenda/client/cardImmersionDate/CardImmersionDate";

export default function DisplayImmersion({data} : {data : ModifyImmersionProps[]}){

    return (<>
        <section className={styles.section}>
            <article className={styles.article}>
                {data.map((d)=>(
                    <CardImmersionDate key={d.id} data={d}/>
                ))}
            </article>
        </section>

    </>)
}