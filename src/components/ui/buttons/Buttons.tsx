"use client"
import styles from "./buttons.module.css"
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";


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
                <a className={styles.linkMediation} href="#primaire">
                    Primaire
                </a>
                <a className={styles.linkMediation} href="#college" >
                    College
                </a>
                <a className={styles.linkMediation} href="#ephad" >
                    Ephad
                </a>
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
            <TransitionLink className={clsx(styles.linkDates, {
            [styles.isActiveLink] : pathname === "/agenda/spectacles"
            })} href="/agenda/spectacles">
                <Image className={styles.image}
                       src="/images/logo.png"
                       width={1024}
                       height={1024}
                       alt="Dates spectacle"/>
                <p>Dates spectacles</p>
            </TransitionLink>
        </article>
        <article >

            <TransitionLink className={clsx(styles.linkDates, {
                [styles.isActiveLink] : pathname === "/agenda/immersions"
            })} href="/agenda/immersions">
                 <Image
                     className={styles.image}
                     src="/images/logo.png"
                     width={1024}
                     height={1024}
                     alt="Dates immersions"/>
                <p>{"Dates d'immersion"}</p>
            </TransitionLink>
        </article>
    </section>
    </>)
}

const ButtonsSpectaclePage = ()=>{
    const ancre = ["presentation", "distribution", "technique", "partenaires", "dates" ]

    return (

    <section className={styles.sectionButtonSpec}>
        {ancre.map((a)=>(
           <a href={`#${a}`} className={styles.linkSpec}  key={a} >{a}</a>
        ))}

    </section>
        )
}


export  {ButtonsAgenda, ButtonMediation,  ButtonsDates, ButtonsSpectaclePage};