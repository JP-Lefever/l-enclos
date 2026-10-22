import styles from "./team.module.css"
import Image from "next/image";
import {team} from "@/assets/data/placeholder-data-team"
import {TeamsProps} from "@/types/definitions";

export default function Team(){

    return (
        <>
            <section className={styles.teamContainer}>

                    {team.map((c: TeamsProps) => (
                        <article className={styles.article} key={c.id}>
                            <figure className={styles.figure}>
                                <Image className={styles.image} fill={true} src={c.image} alt={c.name}/>
                            </figure>
                            <h2 className={styles.h2}>{c.name}</h2>
                            <h3 className={styles.h3}>{c.role}</h3>
                            <p>{c.description}</p>
                        </article>

                    ))}

            </section>
        </>
    )
}