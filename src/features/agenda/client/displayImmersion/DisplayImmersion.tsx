import {ModifyImmersionProps} from "@/types/definitions";
import styles from "./displayImmersion.module.css"
import Image from "next/image";

import CardImmersionDate from "@/features/agenda/client/cardImmersionDate/CardImmersionDate";

export default function DisplayImmersion({data} : {data : ModifyImmersionProps[]}){

    return (<>
        <section className={styles.section}>
            <article className={styles.article}>
                <figure className={styles.figure}>
                    <Image className={styles.image} src ="/images/logo.png" alt={"logo L'enclos"} width={1080} height={1080} />
                </figure>
                {data.map((d)=>(
                    <CardImmersionDate key={d.id} data={d}/>
                ))}
            </article>
        </section>

    </>)
}