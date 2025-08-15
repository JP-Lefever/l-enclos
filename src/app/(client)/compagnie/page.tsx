
import styles from "./page.module.css";
import {Metadata} from "next";
import Histoire from "@/components/compagnie/histoire/Histoire";

export const metadata : Metadata = {
	title : "Compagnie L'Enclos | L'histoire",
	description : "Les origines de la compagnie L'Enclos",
	icons : "/images/logo.png",
}

export default function CompagniePage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Histoire</h1>

			</section>
			<section>
				<Histoire />
			</section>
		</>
	);
}
