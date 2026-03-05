
import styles from "./page.module.css";

import {Metadata} from "next";
import CardsSpec from "@/components/spectacle/cardsSpec/CardsSpec";
import {ScrollAnimation2} from "@/components/ui/animation/ScrollAnimation";

export const metadata : Metadata = {
	title : "Compagnie L'Enclos | Créations artistiques",
	description : "Pièces de théatre contemporaine, création totale ou extrait de pièce d'auteur",
	icons : "/images/logo.png",

}

export default function SpectaclesPage() {
	return (
		<section className={styles.page}>
			<article className={styles.section}>
				<h1 className={styles.h1}>{"La compagnie L'Enclos"}</h1>
				<ScrollAnimation2>
					<h2 className={styles.h2}>{"Les  créations "}</h2>
				</ScrollAnimation2>
			</article>
			<article className={styles.sectionCard}>
				<article className={styles.articleCard}>
					<CardsSpec />
				</article>
			</article>
		</section>
	);
}
