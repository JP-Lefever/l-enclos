import styles from "./page.module.css";

import {Metadata} from "next";
import {mediation} from "@/assets/data/placeholder-data-mediation";
import CardMediation from "@/components/mediation/cardMediation/CardMediation";

export const metadata : Metadata = {
	title : "Compagnie L'Enclos | Médiations culturelles",
	description : "Action culturelle proposé pour les publics primaire, collège et EPHAD",
	icons : "/images/logo.png",
}


export default function MediationPage() {
	return (
		<>
			<section className={styles.section}>
				<article className={styles.article}>
					<h1 className={styles.h1}>Ateliers</h1>
				</article>
			</section>
			<section className={styles.sectionCard}>
					<h2 className={styles.h2}>{"Découvrez les ateliers de La Compagnie L'Enclos, adaptés à trois tranches d’âge différentes."}</h2>
					<article className={styles.articleCard} >
						{mediation.map(m => (
								<CardMediation key={m.id} data={m}/>
						))}
					</article>
			</section>


		</>
	);
}
