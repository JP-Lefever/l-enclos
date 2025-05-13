"use client"
import styles from "./buttons.module.css"
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {buttonSpec} from "@/assets/data/placeholder-data-spectacle";
import Image from "next/image";


const ButtonsAgenda = ({setIsOpenDate, setIsOpenInter} : {  setIsOpenDate : (s:boolean)=>void,  setIsOpenInter : (s:boolean)=>void})=>{

    const handleClickDate = ()=> {
        setIsOpenDate(true)
        setIsOpenInter(false)
    }

    const handleClickInter = ()=>{
        setIsOpenDate(false)
        setIsOpenInter(true)
    }
    return <>
    <section className={styles.AgendaButtons}>
        <button onClick={handleClickDate} className={styles.buttonDate} type="button">Date spectacle</button>
        <button onClick={handleClickInter} className={styles.buttonDate} type="button">Date immersion</button>
    </section>
    </>
}
const ButtonMediation= ()=>  {
    return (
        <>
            <section className={styles.mediationButton}>
                <Link className={styles.linkMediation} href="#primaire">
                    Primaire
                </Link>
                <Link className={styles.linkMediation} href="#college" type="button">
                    College
                </Link>
                <Link className={styles.linkMediation} href="#ephad" type="button">
                    Ephad
                </Link>
            </section>
        </>
    );
}




const ButtonsSpec= ()=> {
    const pathname = usePathname();
    return (
        <>
            <section className={styles.sectionAgenda}>
                {buttonSpec.map((b) => (
                    <article
                     key = {b.id}>
                        <Link
                            href={b.link}
                            className={clsx(styles.linkDates, {
                                [styles.isActiveLink] : pathname === b.link
                            })}
                            type="button"
                        >
                            <Image className={styles.image}
                                   src="/images/logo.png"
                                   width={1024}
                                   height={1024}
                                   alt="Dates spectacle"/>
                            <p className={styles.textSpec}>{b.name}</p>
                        </Link>
                    </article>
                ))}
            </section>
        </>
    );
}

const ButtonsDates = ()=>{
    const pathname = usePathname();
    return(
        <>
    <section className={styles.sectionAgenda}>
        <article>
            <Link className={clsx(styles.linkDates, {
            [styles.isActiveLink] : pathname === "/agenda/spectacles"
            })} href="/agenda/spectacles">
                <Image className={styles.image}
                       src="/images/logo.png"
                       width={1024}
                       height={1024}
                       alt="Dates spectacle"/>
                <p>Dates spectacles</p>
            </Link>
        </article>
        <article >

            <Link className={clsx(styles.linkDates, {
                [styles.isActiveLink] : pathname === "/agenda/immersions"
            })} href="/agenda/immersions">
                 <Image
                     className={styles.image}
                     src="/images/logo.png"
                     width={1024}
                     height={1024}
                     alt="Dates immersions"/>
                <p>{"Dates d'immersion"}</p>
            </Link>
        </article>
    </section>
    </>)
}


export  {ButtonsAgenda, ButtonMediation, ButtonsSpec, ButtonsDates};