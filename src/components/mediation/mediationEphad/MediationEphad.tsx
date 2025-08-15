
import styles from "./mediationEphad.module.css";
import Image from "next/image";
import {ScrollAnimation, ScrollAnimation2} from "@/components/ui/animation/ScrollAnimation";
import {mediation} from "@/assets/data/placeholder-data-mediation";
import Markdown from "react-markdown";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";

export default function MediationEphad() {
	const slug = "ephad"
	return (
		<>
			<section className={styles.section}>
				<ScrollAnimation2 className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={mediation[2].photoPres}
						alt={mediation[2].name}
						fill={true}
					/>
				</ScrollAnimation2>

				<ScrollAnimation className={styles.sec} >
					<h1 className={styles.h1}>{mediation[2].name}</h1>
					<article className={styles.paragraph}>
					<Markdown>{mediation[2].pres}</Markdown>
						<TransitionLink className={styles.link} href={`/mediation/${slug}`}>
							Voir les ateliers
						</TransitionLink>
					</article>
				</ScrollAnimation>
			</section>
		</>
	);
}
