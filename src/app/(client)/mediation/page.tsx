import styles from "./page.module.css";

import {Metadata} from "next";
import {mediation} from "@/assets/data/placeholder-data-mediation";
import CardMediation from "@/components/mediation/cardMediation/CardMediation";
import {ScrollAnimation2} from "@/components/ui/animation/ScrollAnimation";

export const metadata : Metadata = {
	title : "Compagnie L'Enclos | Médiations culturelles",
	description : "Action culturelle proposé pour les publics primaire, collège et EPHAD",
	icons : "/images/logo.png",
}


export default function MediationPage() {
	return (
		<>
			<section className={styles.page}>
				<article className={styles.section}>
					<h1 className={styles.h1}>{"La compagnie L'Enclos"}</h1>
					<ScrollAnimation2>
						<h2 className={styles.h2}>{"Les Médiations "}</h2>
					</ScrollAnimation2>
				</article>

				<article className={styles.sectionCard}>
					<article className={styles.articleCard} >
						{mediation.map(m => (
								<CardMediation key={m.id} data={m}/>
						))}
					</article>
				</article>
			</section>


		</>
	);
}
