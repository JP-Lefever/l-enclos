import styles from "./not-found.module.css"
import Link from "next/link";


export default function NotFound() {

    return (<>
    <section className={styles.section}>
        <h1 className={styles.h1}> 404 - Not Found</h1>
        <Link className={styles.link} href="/">Cliquez ici pour revenir a l'accueil</Link>
    </section>

    </>)
}