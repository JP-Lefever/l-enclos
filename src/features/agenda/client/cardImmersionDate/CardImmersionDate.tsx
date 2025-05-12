import {ScrollAnimation} from "@/components/ui/animation/ScrollAnimation";
import styles from "./cardImmersionDate.module.css"

import {ModifyImmersionProps} from "@/types/definitions";

export default  function CardImmersionDate({data} : {data : ModifyImmersionProps}){

    const {year, label, mediation_id} = data

    const mediationPublic = (value : number)=>{
        return value === 1 ? "Primaire" : value === 2 ? "Collège" : "EHPAD"
    }

    return (<>

        <ScrollAnimation className={styles.section}>
            <article className={styles.articles}>
                <h2 className={styles.h2}>{year}</h2>
                <h3 className={styles.h3}>{label}</h3>
                <p >{mediationPublic(mediation_id)}</p>
            </article>
        </ScrollAnimation>

    </>)
}