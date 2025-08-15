
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
				<h1 className={styles.h1}>créations</h1>
			</section>

			<section>
				<CardsSpec />
			</section>
		</>
	);
}
