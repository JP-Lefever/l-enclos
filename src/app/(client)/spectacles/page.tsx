
import styles from "./page.module.css";

import {Metadata} from "next";
import CardsSpec from "@/components/spectacle/cardsSpec/CardsSpec";

export const metadata : Metadata = {
	title : "Compagnie L'Enclos | Créations artistiques",
	description : "Pièces de théatre contemporaine, création totale ou extrait de pièce d'auteur",
	icons : "/images/logo.png",

}

export default function SpectaclesPage() {
	return (
		<>
			<section className={styles.section}>
				<article className={styles.article}>
					<h1 className={styles.h1}>créations</h1>
				</article>
			</section>
			<section className={styles.sectionCard}>
				<h2 className={styles.h2}>{"Découvrez les créations de La Compagnie L'Enclos"}</h2>
				<article className={styles.articleCard}>
					<CardsSpec />
				</article>
			</section>
		</>
	);
}
