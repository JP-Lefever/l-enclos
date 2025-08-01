
import styles from "./page.module.css";
import CardsSpec from "@/features/spectacle/cardsSpec/CardsSpec";
import {Metadata} from "next";

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
