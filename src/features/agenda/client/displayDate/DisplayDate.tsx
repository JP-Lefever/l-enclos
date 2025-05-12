import styles from "./displayDate.module.css"
import CardSpectacleDate from "@/features/agenda/client/cardSpectacleDate/CardSpectacleDate";
import {ModifyDateProps} from "@/types/definitions";
import Image from "next/image"

export default function DisplayDate({datesSpec}: {datesSpec : ModifyDateProps[] }) {


    return(<>

<section className={styles.section}>
    <article className={styles.article}>
        <figure className={styles.figure}>
        <Image className={styles.image} src ="/images/logo.png" alt={"logo L'enclos"} width={1080} height={1080} />
        </figure>
        {datesSpec.map((d)=>(
        <CardSpectacleDate key={d.id} datesSpec={d}/>
        ))}
    </article>
</section>

    </>)
}