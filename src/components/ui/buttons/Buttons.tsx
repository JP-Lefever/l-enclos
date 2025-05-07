"use client"
import styles from "./buttons.module.css"
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {buttonSpec} from "@/assets/data/placeholder-data-spectacle";


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
            <section className={styles.specButtons}>
                {buttonSpec.map((b) => (
                    <article
                        key={b.id}
                        className={clsx(styles.articleSpec, {
                            [styles.isActive]: pathname === b.link,
                        })}
                    >
                        <Link
                            href={b.link}
                            className={clsx(styles.buttonSpec, {
                                [styles.isActiveSpec]: pathname === b.link,
                            })}
                            type="button"
                        >
                            {/* <Image
								className={styles.image}
								src={b.img_src}
								width={128}
								height={84}
								alt={b.name}
							/> */}
                            <p className={styles.textSpec}>{b.name}</p>
                        </Link>
                    </article>
                ))}
            </section>
        </>
    );
}
export  {ButtonsAgenda, ButtonMediation, ButtonsSpec};