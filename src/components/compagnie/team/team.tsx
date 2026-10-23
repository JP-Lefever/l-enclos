"use client"

import styles from "./team.module.css"
import Image from "next/image";
import {team} from "@/assets/data/placeholder-data-team"
import {TeamsProps} from "@/types/definitions";
import {useState} from "react";

export default function Team(){

    const [isOpen, setIsOpen] = useState<string | null>(null);

console.log(isOpen)
    return (
        <>
            <section className={styles.teamContainer}>
                    {team.map((c: TeamsProps) => (
                        <article className={styles.article} key={c.id}>
                            <figure className={styles.figure}>
                                <Image className={styles.image} fill={true} src={c.image} alt={c.name}/>
                            <button onClick={() => setIsOpen(isOpen === c.name ? null : c.name)} className={styles.hoverImage}>{"clic"}</button>
                            </figure>
                            <h2 className={styles.h2}>{c.name}</h2>
                            <h3 className={styles.h3}>{c.role}</h3>
                            {isOpen === c.name && (
                                <p>{c.description}</p>
                            )}
                        </article>
                    ))}

            </section>
        </>
    )
}