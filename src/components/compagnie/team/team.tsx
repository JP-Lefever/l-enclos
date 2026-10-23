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
                            <figure className={styles.figure}
                                    onMouseMove={(e) => {
                                        const r = e.currentTarget.getBoundingClientRect();
                                        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
                                        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
                                    }}>
                                <Image className={styles.image} fill={true} src={c.image} alt={c.name}/>
                            <button onClick={() => setIsOpen(isOpen === c.name ? null : c.name)} className={styles.hoverImage} aria-label={`En savoir plus sur ${c.name}`}/>
                            </figure>
                            <h2 className={styles.h2}>{c.name}</h2>
                            <h3 className={styles.h3}>{c.role}</h3>
                            <div
                                className={`${styles.description} ${
                                    isOpen === c.name ? styles.descriptionOpen : ""
                                }`}
                            >
                                <p>{c.description}</p>
                            </div>
                        </article>
                    ))}

            </section>
        </>
    )
}