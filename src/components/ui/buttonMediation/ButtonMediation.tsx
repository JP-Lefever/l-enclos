import styles from "./buttonMediation.module.css";
import Link from "next/link";

export default function ButtonMediation() {
	return (
		<>
			<section className={styles.section}>
				<Link className={styles.link} href="#primaire">
					Primaire
				</Link>
				<Link className={styles.link} href="#college" type="button">
					College
				</Link>
				<Link className={styles.link} href="#ephad" type="button">
					Ephad
				</Link>
			</section>
		</>
	);
}
