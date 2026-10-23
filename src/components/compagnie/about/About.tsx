"use client"

import styles from "@/app/(client)/compagnie/page.module.css";
import Histoire from "@/components/compagnie/histoire/Histoire";
import Team from "@/components/compagnie/team/team";
import {ButtonCompany} from "@/components/ui/buttons/Buttons";
import {useState} from "react";


export default function About() {

    const [isOpenHistory, setIsOpenHistory] = useState(true);
    const [isOpenTeam, setIsOpenTeam] = useState(false);

    return (
        <>
            <article>
                <ButtonCompany isOpenHistory={isOpenHistory} isOpenTeam={isOpenTeam} setIsOpenHistory ={setIsOpenHistory} setIsOpenTeam={setIsOpenTeam}/>
            </article>
            {isOpenHistory && (
                <article className={styles.sectionCard}>
                    <Histoire/>
                </article>
            )}
            {isOpenTeam && (
                <article className={styles.sectionCard}>
                    <Team/>
                </article>
            )}
        </>
    )

}